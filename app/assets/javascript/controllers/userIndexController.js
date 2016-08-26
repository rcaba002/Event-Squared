angular.module('EventSquared').controller('userIndexController', function(User, $scope) {
  $scope.users = User.query();
});
