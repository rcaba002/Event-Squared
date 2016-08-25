var Task = require('../models/event');

module.exports = function(app) {
  app.get('/events', function(req, res) {
    res.json(Task.all());
  });

  app.get('/events/:id', function(req, res) {
    var taskId = parseInt(req.params.id, 10);
    res.json(Task.get(taskId) || {});
  });

  app.delete('/events/:id', function(req, res) {
    res.json(Task.delete(parseInt(req.param.id, 10) || {}));
  });

  app.post('/events', function(req, res) {
    setTimeout(function() {
      res.json(Task.create(req.body));
    }, 1000);
  });

  app.put('/events/:id', function(req, res) {
    setTimeout(function() {
      res.json(Task.update(req.body));
    }, 1000);
  });
}
