var _ = require('lodash');
var User = require('./user');

var squares = [
  {
    "id": 1,
    "userId": 3,
    "eventId": 1,
    "title": "Dinner",
    "content": "Dinner will be served at 6:00pm"
  },
  {
    "id": 2,
    "userId": 3,
    "eventId": 1,
    "title": "After Party",
    "content": "We will be going to Shark's Bar at 9:00pm"
  },
  {
    "id": 3,
    "userId": 1,
    "eventId": 2,
    "title": "Christmas Dinner",
    "content": "We will be serving turkey, ham, and a bunch of sides"
  },
  {
    "id": 4,
    "userId": 2,
    "eventId": 2,
    "title": "Gift Exchange",
    "content": "Let's plan on exchanging gifts at 9:00pm"
  }
]

var lastId = 4;

var buildSquares = function(eventId) {
  var rawSquares = JSON.parse(JSON.stringify(squares));
  var builtSquares = [];
  var square;

  for (var i = 0, len = rawSquares.length; i < len; i++) {
    square = rawSquares[i];
    square.user = User.get(square.userId);
    if (square.eventId === eventId) {
      builtSquares.push(square);
    }
  }

  return builtSquares;
};

module.exports = {
  get: function(eventId, id) {
    return _.find(buildSquares(eventId), function(square) {
      return square.id === id;
    });
  },
  all: function(eventId) {
    return buildSquares(eventId);
  },
  update: function(square) {
    var updatedSquare;
    for (var i = 0, len = squares.length; i < len; i++) {
      if(squares[i].id === square.id) {
        _.assign(squares[i], square);
        updatedSquare = squares[i];
        break;
      }
    }

    return updatedSquare;
  },
  delete: function(id) {
    var deletedSquare;
    for (var i = 0, len = squares.length; i < len; i++) {
      if(squares[i].id === id) {
        deletedSquare = squares[i];
        squares.splice(i, 1);
        break;
      }
    }

    return deletedSquare;
  },
  create: function(square) {
    lastId += 1;
    square.id = lastId;
    squares.push(square);
    return square;
  }
};
