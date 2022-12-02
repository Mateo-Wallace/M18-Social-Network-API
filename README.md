<p id="readme-top"></p>

[![License Shield](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](./LICENSE) [![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-555555?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mateo-wallace/)

# M18 - Social Network API

## Description

Social Network API is a server database that allows the user to make get, post, put, and delete requests in order to fully manipulate data. It was made in order to practice MongoDB and Mongoose.

While building this project I learned to:
- Create a noSQL database through MongoDB
- Add virtuals to a model
- Add multiple routes to the same function instead of defining them individually

### Built With

 [![Mongoose Shield](https://img.shields.io/badge/Mongoose-AA2929?&style=for-the-badge&logo=matrix&logoColor=white)](https://mongoosejs.com/) [![MongoDB Shield](https://img.shields.io/badge/MongoDB-47A248?&style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Express Shield](https://img.shields.io/badge/Express-000000?&style=for-the-badge&logo=express&logoColor=white)](http://expressjs.com/) [![Insomnia Shield](https://img.shields.io/badge/Insomnia-4000BF?&style=for-the-badge&logo=insomnia&logoColor=white)](https://docs.insomnia.rest/) [![JavaScript Shield](https://img.shields.io/badge/JavaScript-F7DF1E?&style=for-the-badge&logo=javascript&logoColor=272727)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Node.js Shield](https://img.shields.io/badge/Node.js-339933?&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) [![NPM Shield](https://img.shields.io/badge/NPM-333333?&style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

## Table of Contents
- [Installation](#installation)
    - [Video Walkthrough](#video-walkthrough)
- [Usage](#usage)
    - [Get Requests](#get-requests)
    - [Post Requests](#post-requests)
    - [Put Requests](#put-requests)
    - [Delete Requests](#delete-requests)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repo down to your local machine.
1. If you don't have Node.js, navigate to [nodejs.org](https://nodejs.org/en/) & download v16.18.0 or newer.
1. If you don't have MongoDB, navigate to [mongodb.com](https://www.mongodb.com/) & download.
1. If you don't have Insomnia, navigate to [insomnia.rest](https://insomnia.rest/download) & download Insomnia.
1. Open the directory in your terminal and run `npm i` .
1. Seed the database from the command line by running `npm run seed`

### Video Walkthrough

For an example of the application at work see the [Video Walkthrough](https://drive.google.com/file/d/1RJ0tgrbb54iNjdfBRPj5AQ04A1TZf04t/view)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Open your terminal, and in the command line run 

	npm start

This should make your server begin listening for requests. Navigate to Insomnia and in the navigation bar type in any of these requests in order to manipulate your database:

### Get Requests

Get requests are used to view information. The following commands will show you ALL data of a specific type.

- `http://localhost:3001/api/users` to view all users
- `http://localhost:3001/api/thoughts` to view all thoughts

These commands will give you data of a specified ID. Edit the `:id` in the link to the id of the item you would like to view.

- `http://localhost:3001/api/users/:userId` to view a specific user
- `http://localhost:3001/api/thoughts/:thoughtId` to view a specific thought

### Post Requests

Post requests are used to add new information. The following commands will Post data to a specific type.

- `http://localhost:3001/api/users` to post a new user
    - Example body input
        ```
        {
            "username": "foo bar",
            "email": "foo@bar.com"
        }
        ```
- `http://localhost:3001/api/users/:userId/friends` to post a new friend to a specific user
    - Example body input
        ```
        <!-- This id belongs to the user you would like to friend.
        The current users id should be filled in the fetch -->
        {
            "_id": "637f1ce4591ea686b82f458a"
        }
        ```
- `http://localhost:3001/api/thoughts` to post a new thought
    - Example body input
        ```
        {
            "thoughtText": "This is an example thought",
            "username": "foo bar",
            "userId": "63807b65ab237b93219a29bc"
        }
        ```
- `http://localhost:3001/api/thoughts/:thoughtId/reactions` to post a new reaction to a specific thought
    - Example body input
        ```
        <!-- This username should be the user who is reacting, 
        not the current user -->
        {
            "reactionBody": "This is an example reaction",
            "username": "bar foo"
        }
        ```

### Put Requests

Put requests are used to update information. The following commands will Put data to a specific item in a specific type. Edit the `:id` in the link to the id of the item you would like to update.

- `http://localhost:3001/api/users/:userId/` to update a specific user
    - Example body input
        ```
        {
            "username": "foo foo"
        }
        ```
- `http://localhost:3001/api/thoughts/:thoughtId` to update a specific thought
    - Example body input
        ```
        {
            "thoughtText": "This thought has been updated",
            "username": "foo foo"
        }
        ```

### Delete Requests

Pelete requests are used to destroy information. The following commands will Delete a specific item. Edit the `:id` in the link to the id of the item you would like to delete.

- `http://localhost:3001/api/users/:userId` to delete a specific user
- `http://localhost:3001/api/users/:userId/friends/:friendId` to delete a specific friend from a specific user
- `http://localhost:3001/api/thoughts/:thoughtId` to delete a specific thought
- `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId` to delete a specific reaction from a specific thought

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

For any further questions feel free to contact me via:
- GitHub: [Mateo-Wallace](https://github.com/Mateo-Wallace)
- Email: [mateo.t.wallace@gmail.com](mailto:mateo.t.wallace@gmail.com)
- LinkedIn: [Mateo Wallace](https://www.linkedin.com/in/mateo-wallace-57931b254/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
