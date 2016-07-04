define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.core');

    couchPotato.configureApp(module);

    module.directive('msSplashScreen', msSplashScreenDirective);

    /** @ngInject */
    function msSplashScreenDirective($animate) {
        return {
            restrict: 'E',
            link    : function (scope, iElement) {
                var splashScreenRemoveEvent = scope.$on('msSplashScreen::remove', function () {
                    $animate.leave(iElement).then(function () {
                        // De-register scope event
                        splashScreenRemoveEvent();

                        // Null-ify everything else
                        scope = iElement = null;
                    });
                });
            }
        };
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
