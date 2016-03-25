var abby = angular.module('abigail', [
  'ui.router',

  'abby.home',
  'abby.services',
  'abby.work',
  'abby.about',
  'abby.notes',
  'abby.chat'

])

  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }])

  .directive('navigation', function(){
    return {
      templateUrl: 'views/partials/navigation.html'
    }
  })

  .directive('header', function(){
    return {
      templateUrl: 'views/partials/header.html'
    }
  })


;
