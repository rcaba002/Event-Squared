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

    .when('/users', {
      templateUrl: "assets/templates/users/index.html",
      controller: "userIndexController"
    })

    .when('/users/:id', {
      templateUrl: "assets/templates/users/show.html",
      controller: "userShowController"
    })

    .when('/events/:eventId/squares', {
      templateUrl: "assets/templates/squares/index.html",
      controller: "squareIndexController"
    })

    .when('/events/:eventId/squares/:id', {
      templateUrl: "assets/templates/squares/show.html",
      controller: "squareShowController"
    })
});
