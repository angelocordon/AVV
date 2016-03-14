angular.module('abby.services', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('services', {
        url: '/services',
        views: {
          '': {
            templateUrl: '/views/layout.html',
            controller: ['$scope', function($scope){
              $scope.headline = 'Our Services';
              $scope.subline = "Hello World."
              $scope.bodyClass = ''
            }]
          },
          'content@services': {
            template: 'Hello there, this is the services page.'
          }
        }
      })
  }])
;
