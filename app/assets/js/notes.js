angular.module('abby.notes', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('notes', {
        url: '/notes',
        views: {
          '': {
            templateUrl: 'views/layout.html',
            controller: ['$scope', function($scope){
              $scope.headline = 'From the minds of @angelo and @angela';
              $scope.subline = "Hello, we're A Vivid Visual. We help businesses grow through web design, app development and branding.";
              $scope.bodyClass = '';
            }]
          }
        }
      })
  }])

;
