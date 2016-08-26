angular.module('EventSquared').controller('eventCreateController', function($scope, Event, Category, $location) {
  $scope.event = new Event();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();

  $scope.saveEvent = function(event) {
    $scope.isSubmitting = true;
    event.$save().then(function() {
      $location.path('/events');
    }).finally(function() {
      $scope.isSubmitting = false;
    });
  }
});
