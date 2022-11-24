const users = [
  {
    username: 'tester',
    email: 'test@test.com',
    thoughts: [
      {
        thoughtText: 'This is a test',
        username: 'tester'
      },
    ],
  },
  {
    username: 'seth wooten',
    email: 'seth@wooten.com',
    thoughts: [
      {
        thoughtText: 'This is a seth',
        username: 'seth wooten'
      },
    ],
  },
];

const thoughts = [
  {
    thoughtText: 'This is a test',
    username: 'tester'
  },
  {
    thoughtText: 'This is a seth',
    username: 'seth wooten'
  },
];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
