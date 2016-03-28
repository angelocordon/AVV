angular.module('abby.work', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('work', {
        url: '/work',
        views: {
          '': {
            templateUrl: 'views/layout.html',
            controller: ['$scope', function($scope){
              $scope.headline = 'From designing identities to building MVPs.';
              $scope.subline = "We've had the pleasure of helping many businesses get off the ground with their best foot forward. See what we can do to help yours."
              $scope.bodyClass = 'work'
            }]
          },
          'content@work': {
            templateUrl: 'views/pages/work.html',
            controller: 'workCtrl'
          }
        }
      })
  }])

  .service('workService', function($rootScope, $http, $log){
    this.getProjects = function(){
      var projects = $http({
        method: 'GET',
        url: 'assets/projects.json'
        });

      return projects;
    };
  })

  .controller('workCtrl', function($scope, workService){
    workService.getProjects().success(function(data){
      $scope.works = data.projects;
    });
  })
;
