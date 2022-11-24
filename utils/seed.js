const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Add users from data
  await User.collection.insertMany(users);

  // Add thoughts from data
  await Thought.collection.insertMany(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
