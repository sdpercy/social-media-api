# social-media-api

  <br />

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [UserStory](#userstory)
  5. [Models](#model)
  6. [Endpoints](#endpoints)
  7. [Questions](#questions)
  
  ## Description
  An API for a social media application. 
  
  ## Installation
  1. Ensure that [MongoDB](https://docs.mongodb.com/manual/installation/) is installed and configured correctly. 
  2. Clone the repository
  3. Install the dependencies with `npm i`
  4. Run `npm start` which will start the server 
  5. Use [Insomnia](https://insomnia.rest/) or a similar application to test the REST API.
  
  ## User Story
  AS A social media startup I WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data.
  
  
 
  ## Models
  1. User
  2. Thought
  3. Reaction(SCHEMA ONLY)

  ## Endpoints

  ### User <br />
  Get all users - `GET /api/users`
  Create a user - `POST /api/users`
  Get user by Id - `GET /api/users/:id`
  Update a user - `PUT /api/users/:id`
  Delete a user - `DELETE /api/users/:id`
  Add a friend - `PUT /api/users/:userId/friends/:friendId`
  Delete a friend - `DELETE /api/users/:userId/friends/:friendId`

  ### Thought <br />
  Get all thoughts - `GET /api/thoughts`
  Create a thought - `POST /api/thoughts`
  Get thought by ID - `GET /api/thoughts/:id`
  Update a thought - `PUT /api/thoughts/:id`
  Delete a thought - `DELETE /api/thoughts/:id`

  ### Reaction <br />
  Add a reaction - `PUT /api/thoughts/:id/reactions`
  Delete a reaction - `DELETE /api/thoughts/:id/reactions`

  ## Questions

  Find me on GitHub: [sdpercy](https://github.com/sdpercy)<br />
  <br />
  Email questions to: scottpercy@hotmail.com<br />