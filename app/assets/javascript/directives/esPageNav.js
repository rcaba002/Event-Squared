angular.module("EventSquared").directive('esPageNav', function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/esPageNav.html",
    controller: function($scope, $location) {
        $scope.isPage = function(name) {
          return new RegExp("/" + name + "($|/)").test($location.path());
        };
    }
  };
});
