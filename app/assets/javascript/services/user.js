angular.module('EventSquared').factory('User', function($resource) {
  return $resource('/users/:id');
});
