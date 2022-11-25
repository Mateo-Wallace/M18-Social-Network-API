const users = [
  {
    "username": "seth wooten",
    "email": "seth@wooten.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
  },
  {
    "username": "tester",
    "email": "test@test.com",
    "thoughts": [],
    "friends": [],
    "__v": 0
  }
];

const thoughts = [
  {
    "thoughtText": "This is an example thought by tester",
    "username": "tester",
    "createdAt": "2022-11-25T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is an example reaction by seth wooten",
        "username": "seth wooten",
        "reactionId": "638083c9417ed0ed80903d82",
        "createdAt": "2022-11-25T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  },
  {
    "thoughtText": "This is an example thought by seth wooten",
    "username": "seth wooten",
    "createdAt": "2022-11-25T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is an example reaction by tester",
        "username": "tester",
        "reactionId": "6380840e417ed0ed80903d8a",
        "createdAt": "2022-11-25T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  }
];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
