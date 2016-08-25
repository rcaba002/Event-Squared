angular.module('EventSquared').controller('eventShowController', function(Event, $scope, $routeParams) {
  $scope.event = Event.get({id: $routeParams.id});
});
