angular.module('EventSquared').factory('Event', function($resource) {
  return $resource('/events/:id');
});
