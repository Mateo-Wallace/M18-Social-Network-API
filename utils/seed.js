const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Add courses to the collection and await the results
  await User.collection.insertMany(users);
  // USERS REQUIRED AND CREATED IN DATA.JS

  // Add students to the collection and await the results
  await Thought.collection.insertMany(thoughts);
  // THOUGHTS REQUIRED AND CREATED IN DATA.JS

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
