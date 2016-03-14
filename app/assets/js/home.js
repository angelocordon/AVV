angular.module('abby.home', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          '': {
            templateUrl: '/views/layout.html',
            controller: ['$scope', function($scope){
              $scope.headline = 'Your ideas should be empowered.';
              $scope.subline = "Hello, we're A Vivid Visual. We help businesses grow through web design, app development and branding."
              $scope.bodyClass = 'home';
            }]
          },
          'content@home': {
            templateUrl: '/views/pages/landing.html'
          }
        }
      })
  }])

;
