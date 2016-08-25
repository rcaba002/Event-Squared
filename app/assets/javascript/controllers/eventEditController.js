angular.module('EventSquared').controller('eventEditController', function(Event, $scope, $routeParams, $location) {
  $scope.event = Event.get({id: $routeParams.id});
  $scope.isSubmitting = false;

  $scope.saveEvent = function(event) {
    $scope.isSubmitting = true;
    event.$update().finally(function() {
      $scope.isSubmitting = false;
      $location.path('/events/' + event.id);
    });
  }
});
