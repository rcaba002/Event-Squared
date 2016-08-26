var _ = require('lodash');

var users = [
  {
    "id": 1,
    "name": "John Doe",
    "username": "jdoe123",
    "emailaddress": "jdoe@example.com",
    "phone": "314-555-1234",
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "username": "jsmith456",
    "emailaddress": "jsmith@example.com",
    "phone": "314-555-5678",
  },
  {
    "id": 3,
    "name": "Ron Johnson",
    "username": "rjohnson789",
    "emailaddress": "rjohnson@example.com",
    "phone": "314-555-9012",
  },
  {
    "id": 4,
    "name": "Bob Tabor",
    "username": "btabor012",
    "emailaddress": "btabor@example.com",
    "phone": "314-555-3456",
  }
]

module.exports = {
  get: function(id) {
    return _.find(users, function(user) {
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }
};
