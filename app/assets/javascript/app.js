angular.module('EventSquared', ['ngRoute', 'ngResource', 'ngGravatar']).config(function(GravatarProvider) {
  GravatarProvider.setSize(100);
});
