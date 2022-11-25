const users = [
  {
    "_id": "638081f7417ed0ed80903d70",
    "username": "seth wooten",
    "email": "seth@wooten.com",
    "thoughts": [
      {
        "_id": "63808319417ed0ed80903d7d"
      }
    ],
    "friends": [
      {
        "_id": "63808213417ed0ed80903d72"
      }
    ],
    "__v": 0
  },
  {
    "_id": "63808213417ed0ed80903d72",
    "username": "tester",
    "email": "test@test.com",
    "thoughts": [
      {
        "_id": "638082d4417ed0ed80903d79"
      }
    ],
    "friends": [
      {
        "_id": "638081f7417ed0ed80903d70"
      }
    ],
    "__v": 0
  }
];

const thoughts = [
  {
    "_id": "638082d4417ed0ed80903d79",
    "thoughtText": "This is an example thought by tester",
    "username": "tester",
    "createdAt": "2022-11-25T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is an example reaction by seth wooten",
        "username": "seth wooten",
        "_id": "638083c9417ed0ed80903d81",
        "reactionId": "638083c9417ed0ed80903d82",
        "createdAt": "2022-11-25T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  },
  {
    "_id": "63808319417ed0ed80903d7d",
    "thoughtText": "This is an example thought by seth wooten",
    "username": "seth wooten",
    "createdAt": "2022-11-25T09:09:17.076+00:00",
    "reactions": [
      {
        "reactionBody": "This is an example reaction by tester",
        "username": "tester",
        "_id":  "6380840e417ed0ed80903d89",
        "reactionId": "6380840e417ed0ed80903d8a",
        "createdAt": "2022-11-25T09:09:17.076+00:00",
      }
    ],
    "__v": 0
  }
];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
