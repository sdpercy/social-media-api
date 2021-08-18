const { User, Thought } = require('../models');

const userController = {
//GET /api/users
    getAllUsers(req, res) {
        User.find({})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

// GET /api/users/:id
getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate([
        { path: 'thoughts', select: "-__v" },
        { path: 'friends', select: "-__v" }
    ])
    .select('-__v')
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: 'User not found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
},

//POST /api/users/
createUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
},

//PUT /api/users/:id
updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.json(err));
},

//DELETE /api/users/:id
deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found with this id'});
            return;
        }

        User.updateMany(
            { _id : {$in: dbUserData.friends } },
            { $pull: { friends: params.id } }
        )
        .then(() => {
            // This will remove any comments from this user
            Thought.deleteMany({ username : dbUserData.username })
            .then(() => {
                res.json({message: "User is successfully deleted"});
            })
            .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
},

//POST /api/users/:userId/friends/:friendId
addFriend({ params }, res) {
    // add friendId to userId's friend list
    User.findOneAndUpdate(
        { _id: params.userId },
        { $addToSet: { friends: params.friendId } },
        { new: true, runValidators: true }
    )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found with this userId' });
            return;
        }
        // add userId to friendId's friend list
        return User.findOneAndUpdate(
            { _id: params.friendId },
            { $addToSet: { friends: params.userId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData2 => {
            if(!dbUserData2) {
                res.status(404).json({ message: 'User not found with this friendId' })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
},

//DELETE /api/users/:userId/friends/:friendId
deleteFriend({ params }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true, runValidators: true }
    )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found with this userId' });
            return;
        }
       
        return User.findOneAndUpdate(
            { _id: params.friendId },
            { $pull: { friends: params.userId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData2 => {
            if(!dbUserData2) {
                res.status(404).json({ message: 'User not found with this friendId' })
                return;
            }
            res.json({message: 'Friend was successfully deleted'});
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
}
}

module.exports = UserController;