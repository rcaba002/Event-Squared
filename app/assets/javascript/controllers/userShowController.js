angular.module('EventSquared').controller('userShowController', function(User, $scope, $routeParams) {
  $scope.user = User.get({id: $routeParams.id});
});
