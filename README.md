# Social Media API

  <br />

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [UserStory](#user-story)
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
  Get all users - `GET /api/users`<br />
  Create a user - `POST /api/users`<br />
  Get user by Id - `GET /api/users/:id`<br />
  Update a user - `PUT /api/users/:id`<br />
  Delete a user - `DELETE /api/users/:id`<br />
  Add a friend - `PUT /api/users/:userId/friends/:friendId`<br />
  Delete a friend - `DELETE /api/users/:userId/friends/:friendId`<br />

  ### Thought <br />
  Get all thoughts - `GET /api/thoughts`<br />
  Create a thought - `POST /api/thoughts`<br />
  Get thought by ID - `GET /api/thoughts/:id`<br />
  Update a thought - `PUT /api/thoughts/:id`<br />
  Delete a thought - `DELETE /api/thoughts/:id`<br />

  ### Reaction <br />
  Add a reaction - `PUT /api/thoughts/:id/reactions`<br />
  Delete a reaction - `DELETE /api/thoughts/:id/reactions`<br />

  ## Questions

  Find me on GitHub: [sdpercy](https://github.com/sdpercy)<br />
  <br />
  Email questions to: scottpercy@hotmail.com<br />