var abby = angular.module('abigail', [
  'ui.router',

  // 'abby.config',

  'abby.home',
  'abby.services',
  'abby.work',
  'abby.about',
  'abby.notes',
  'abby.chat'

])

  .run(function($rootScope){
    $rootScope.baseUrl = "/avv"
  })

  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);
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
