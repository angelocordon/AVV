angular.module('abby.notes', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('notes', {
        url: '/notes/',
        template: '<h1>Our Notes</h1>'
      })
  }])

;
