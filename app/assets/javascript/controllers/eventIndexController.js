angular.module('EventSquared').controller('eventIndexController', function(Event, $scope) {
  $scope.events = Event.query();
  $scope.search = {};
});
