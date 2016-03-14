angular.module('abby.about', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: '/views/layout.html',
            controller: ['$scope', function($scope){
              $scope.headline = 'More than a design and development studio.';
              $scope.subline = '';
              $scope.bodyClass = '';
            }]
          }
        }
      })
  }])

;
