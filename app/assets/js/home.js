angular.module('abby.home', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/landing.html',
        controller: 'homeCtrl'
      })
  }])

  .controller('homeCtrl', ['$scope', function($scope){
    $scope.bodyClass = 'home';
  }])

;
