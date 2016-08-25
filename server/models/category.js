// Lods the full lodash build
var _ = require('lodash');


var categories = [
  {"id": 1, "name": "Anniversary"},
  {"id": 2, "name": "Birthday"},
  {"id": 3, "name": "Conference"},
  {"id": 4, "name": "Convention"},
  {"id": 5, "name": "Exhibition"},
  {"id": 6, "name": "Fundraiser"},
  {"id": 7, "name": "Gala"},
  {"id": 8, "name": "Holiday"},
  {"id": 9, "name": "Meeting"},
  {"id": 10, "name": "Miscellaneous"},
  {"id": 11, "name": "Networking"},
  {"id": 12, "name": "Seminar"},
  {"id": 13, "name": "Social"},
  {"id": 14, "name": "Wedding"},
  {"id": 15, "name": "Workshop"}
]

module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
};
