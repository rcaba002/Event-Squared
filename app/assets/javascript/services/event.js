angular.module('EventSquared').factory('Event', function($resource) {
  return $resource('/events/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
