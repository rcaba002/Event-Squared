angular.module("EventSquared").directive('esSquares', function(Square, $routeParams) {
  return {
      replace: true,
      restrict: "E",
      templateUrl: "assets/templates/directives/esSquares.html",
      link: function(scope) {
        scope.squares = Square.query({eventId: $routeParams.id});
      }
  };
});
