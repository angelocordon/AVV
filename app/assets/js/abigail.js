var abby = angular.module('abigail', [
  'ui.router',
  // 'ngTouch',

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
      templateUrl: 'views/partials/navigation.html',
      controller: ['$scope', function($scope){
        $scope.toggle = function(){
          $scope.display = true;
        };

        $scope.close = function(){
          $scope.display = false;
        };

      }]
    }
  })

  .directive('header', function(){
    return {
      templateUrl: 'views/partials/header.html'
    }
  })
;
