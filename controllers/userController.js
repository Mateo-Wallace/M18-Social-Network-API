const { User, Thought } = require('../models');

const userController = {
  // Get all users
  getUsers(req, res) {
    // find() on User
    User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
  },

  // Get a single user
  getSingleUser(req, res) {
    // findOne() on User
    // use .populate to populate friends and thoughts for that User
    // ex: .populate('friends')
  },

  // create a new user
  createUser(req, res) {
    // create on User
    User.create(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },

  // update a user
  updateUser(req, res) {
    // findOneAndUpdate
  },

  // Delete a user and associated thoughts
  deleteUser(req, res) {
    // findOneAndDelete
  },

  // Add friend to friend list
  addFriend(req, res) {
    // findOneAndUpdate
    // use $addToSet - reference activity 23, controllers/postController
    // check out how it's being used in the createPost
  },

  // Remove friend from friend list
  removeFriend(req, res) {
    // findOneAndUpdate
    // use $pull
  },
};

module.exports = userController;