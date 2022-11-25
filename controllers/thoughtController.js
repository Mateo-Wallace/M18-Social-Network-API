// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const thoughtController = {
  // Get all thoughts
  getThoughts(req, res) {
    // find() on Thought
    Thought.find()
    .then((thoughts) => res.status(200).json(thoughts))
    .catch((err) => res.status(500).json(err));
  },

  // Get a single thought
  getSingleThought(req, res) {
    // findOne() on Thought
    Thought.findOne({ _id: req.params.thoughtId })
    .select('-__v')
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.status(200).json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },

  // create a new thought
  createThought(req, res) {
    // create on Thought
    Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
    })
    .then((user) =>
      !user
        ? res.status(404).json({
            message: 'Thought created, but found no user with that ID',
          })
        : res.json('Created the thought 🎉')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  // update a thought
  updateThought(req, res) {
    // findOneAndUpdate
  },

  // delete a thought
  deleteThought(req, res) {
    // findOneAndDelete
    // example says findOneAndRemove
  },

  // add a reaction to a thought
  addReaction(req, res) {
    // findOneAndUpdate
    // use $addToSet - reference activity 23, controllers/postController
    // check out how it's being used in the createPost
  },

  // Remove reaction from a thought
  removeReaction(req, res) {
    // findOneAndUpdate
    // use $pull
  },
};


module.exports = thoughtController