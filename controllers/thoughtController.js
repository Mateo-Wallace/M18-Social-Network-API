// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const thoughtController = {
  // Get all thoughts
  getThoughts(req, res) {
    // find() on Thought
  },

  // Get a single thought
  getSingleThought(req, res) {
    // findOne() on Thought
  },

  // create a new thought
  createThought(req, res) {
    // create on Thought
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