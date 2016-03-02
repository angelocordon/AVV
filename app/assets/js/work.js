angular.module('abby.work', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('work', {
        url: '/work/',
        template: '<h1>Our Work</h1>'
      })
  }])

;
