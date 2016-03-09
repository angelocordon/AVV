angular.module('abby.work', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('work', {
        url: '/work',
        templateUrl: '/views/work.html',
        controller: 'workCtrl'
      })
  }])

  .service('workService', function($rootScope, $http, $log){
    this.getProjects = function(){
      var projects = $http({
        method: 'GET',
        url: '/assets/projects.json'
        });
        
      return projects;
    };
  })

  .controller('workCtrl', function($scope, workService){
    workService.getProjects().success(function(data){
      $scope.works = data.projects;
    })
  })
;
