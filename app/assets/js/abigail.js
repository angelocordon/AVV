angular.module('abigail', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/landing.html',
        controller: 'homeCtrl'
      })

      .state('services', {
        url: '/services',
        template: '<h1>Our Services</h1>'
      })

      .state('work', {
        url: '/work',
        template: '<h1>Our Work</h1>'
      })

      .state('notes', {
        url: '/notes',
        template: '<h1>Blog</h1>'
      })

      .state('chat', {
        url: '/chat',
        template: '<h1>Chat</h1>'
      })
  }])

  .controller('homeCtrl', ['$scope', function($scope){
    $scope.bodyClass = 'home';
  }])

  .directive('navigation', function(){
    return {
      templateUrl: 'navigation.html'
    }
  })


;
