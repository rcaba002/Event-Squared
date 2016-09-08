var Square = require('../models/square');

module.exports = function(app) {
  app.get('/events/:eventId/squares', function(req, res) {
    var eventId = parseInt(req.params.eventId, 10);
    res.json(Square.all(eventId) || {});
  });

  app.get('/events/:eventId/squares/:id', function(req, res) {
    var eventId = parseInt(req.params.eventId, 10);
    var id = parseInt(req.params.id, 10);
    res.json(Square.get(eventId, id) || {});
  });

  app.delete('/events/:eventid/squares/:id', function(req, res) {
    res.json(Square.delete(parseInt(req.params.id, 10) || {}));
  });

  app.post('/events/:id/squares', function(req, res) {
    setTimeout(function() {
      res.json(Square.create(req.body));
    }, 1000);
  });

  app.put('/events/:eventId/squares/:id', function(req, res) {
    setTimeout(function() {
      res.json(Square.update(req.body));
    }, 1000);
  });
}
