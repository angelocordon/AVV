var abby = angular.module('abigail', [
  'ui.router',

  'abby.home',
  'abby.services',
  'abby.work',
  'abby.notes',
  'abby.chat'

])

  .config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }])

  .directive('navigation', function(){
    return {
      templateUrl: 'views/partials/navigation.html'
    }
  })


;
