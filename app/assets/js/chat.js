angular.module('abby.chat', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('chat', {
        url: '/chat',
        views: {
          '': {
            templateUrl: 'views/layout.html',
            controller: ['$scope', function($scope){
              $scope.headline = "Are you ready to make your ideas a reality? Chat with us.";
            }]
          }
        }
      })
  }])

;
