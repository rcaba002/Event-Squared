angular.module('EventSquared').controller('eventShowController', function(Event, $scope, $routeParams, $location) {
  $scope.event = Event.get({id: $routeParams.id});

  $scope.deleteEvent = function(event) {
    event.$remove().then(function() {
      $location.path('/events');
    });
  }
});
