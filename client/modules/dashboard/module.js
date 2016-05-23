define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato){

  var module = angular.module('app.modules.dashboard', ['ui.router']);

  couchPotato.configureApp(module);

  module.config(function($stateProvider, $couchPotatoProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        data: {
          title: 'Dashboard View'
        },
        views: {
          "root": {
            templateUrl: 'modules/dashboard/views/dashboard.html',
            controller: 'DashboardCtrl',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'modules/dashboard/controllers/DashboardCtrl'
              ])
            }
          }
        }
      });
  });

  module.run(function($couchPotato){
    module.lazy = $couchPotato
  });

  return module;
});
