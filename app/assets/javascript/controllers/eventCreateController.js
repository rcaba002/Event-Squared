angular.module('EventSquared').controller('eventCreateController', function($scope, Event, $location) {
  $scope.event = new Event();
  $scope.isSubmitting = false;

  $scope.saveEvent = function(event) {
    $scope.isSubmitting = true;
    event.$save().then(function() {
      $location.path('/events');
    }).finally(function() {
      $scope.isSubmitting = false;
    });
  }
});
