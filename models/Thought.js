const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// const dateFormat = require('../utils/dateFormat')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema], //reference activity 17 and 18
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// virtual for reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;
