angular.module('EventSquared').controller('squareIndexController', function(Square, $scope, $routeParams) {
  $scope.squares = Square.query({eventId: $routeParams.eventId});
});
