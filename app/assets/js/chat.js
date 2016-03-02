angular.module('abby.chat', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('chat', {
        url: '/chat/',
        template: '<h1>Chat With Us</h1>'
      })
  }])

;
