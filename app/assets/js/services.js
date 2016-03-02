angular.module('abby.services', ['ui.router'])

  .config(['$stateProvider', function($stateProvider){

    $stateProvider
      .state('services', {
        url: '/services/',
        template: '<h1>Our Services</h1>'
      })
  }])

;
