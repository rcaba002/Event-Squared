angular.module('EventSquared').controller('squareShowController', function(Square, $scope, $routeParams, $location) {
  $scope.square = Square.get({eventId: $routeParams.eventId, id: $routeParams.id});

  $scope.deleteEvent = function(square) {
    square.$remove().then(function() {
      $location.path('/events');
    });
  }
});
