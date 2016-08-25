angular.module('EventSquared').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/events'
    })

    .when('/events', {
      templateUrl: "assets/templates/events/index.html",
      controller: "eventIndexController"
    })

    .when('/events/new', {
      templateUrl: "assets/templates/events/new.html",
      controller: "eventCreateController"
    })

    .when('/events/:id', {
      templateUrl: "assets/templates/events/show.html",
      controller: "eventShowController"
    })

    .when('/events/:id/edit', {
      templateUrl: "assets/templates/events/edit.html",
      controller: "eventEditController"
    })
});
