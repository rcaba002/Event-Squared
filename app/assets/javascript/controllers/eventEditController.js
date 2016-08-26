angular.module('EventSquared').controller('eventEditController', function($scope, Event, Category, $routeParams, $location) {
  $scope.event = Event.get({id: $routeParams.id});
  $scope.isSubmitting = false;
  $scope.categories = Category.query();

  $scope.saveEvent = function(event) {
    $scope.isSubmitting = true;
    event.$update().finally(function() {
      $scope.isSubmitting = false;
      $location.path('/events/' + event.id);
    });
  }
});
