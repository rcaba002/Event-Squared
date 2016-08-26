angular.module('EventSquared').factory('Category', function($resource) {
  return $resource('/categories/:id');
});
