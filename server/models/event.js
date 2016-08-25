var _ = require('lodash');
var Category = require('./category')
var User = require('./user')

var tasks = [
  {
    "id": 1,
    "userId": 3,
    "categoryId": 2,
    "title": "Bob's Birthday Bash",
    "location": "Hard Rock Cafe, St. Louis",
    "content": "We are excited to celebrate Bob's 35th birthday! Join us!"
  },
  {
    "id": 2,
    "userId": 1,
    "categoryId": 8,
    "title": "Jane's Christmas Party",
    "location": "Jane & Bob's Home, St. Charles",
    "content": "Every year we bring friends and family together. Tis the season!"
  },
  {
    "id": 3,
    "userId": 2,
    "categoryId": 11,
    "title": "Horizon Cafe Social Meet",
    "location": "Horizon Cafe, St. Louis",
    "content": "Join us to meet others like you! Free drinks!"
  },
  {
    "id": 4,
    "userId": 1,
    "categoryId": 12,
    "title": "SA&E Summit",
    "location": "Daugherty Business Solutions",
    "content": "Please attend the seminars offered throughout the day."
  },
]

var lastId = 4;

var buildTasks = function() {
  var rawTasks = JSON.parse(JSON.stringify(tasks));
  var builtTasks = [];
  var task;

  for (var i = 0, len = rawTasks.length; i < len; i++) {
    task = rawTasks[i];
    task.user = User.get(task.userId);
    task.category = Category.get(task.categoryId);
    builtTasks.push(task);
  }

  return builtTasks;
};

module.exports = {
  get: function(id) {
    return _.find(buildTasks(), function(task) {
      return task.id === id;
    });
  },
  all: function() {
    return buildTasks();
  },
  update: function(task) {
    var updatedTask;
    for (var i = 0, len = tasks.length; i < len; i++) {
      if(tasks[i].id === task.id) {
        _.assign(tasks[i], task);
        updatedTask = tasks[i];
        break;
      }
    }

    return updatedTask;
  },
  delete: function(id) {
    var deletedTask;
    for (var i = 0, len = tasks.length; i < len; i++) {
      if(tasks[i].id === id) {
        deletedTask = tasks[i];
        tasks.splice(i, 1);
        break;
      }
    }

    return deletedTask;
  },
  create: function(task) {
    lastId += 1;
    task.id = lastId;
    tasks.push(task);
    return task;
  }
};
