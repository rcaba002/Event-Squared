angular.module('EventSquared').factory('Square', function($resource) {
  return $resource('/events/:eventId/squares/:id', {eventId: "@eventId", id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
