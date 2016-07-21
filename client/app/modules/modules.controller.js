define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('fuse');

    couchPotato.configureApp(module);

    module.controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope) {
        // Data

        //////////

        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event) {
            if ( event.targetScope.$id === $scope.$id ) {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
