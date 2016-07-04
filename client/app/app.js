define(['angular',
        'angular-couch-potato',
        'angular-ui-router',
        'angular-animate',
        'angular-bootstrap'], function (ng, couchPotato) {
    'use strict';

    var app = ng.module('app', [
        'scs.couch-potato',
        'ui.router',
        'ui.bootstrap',

        // App module
        'fuse'
    ]);

    couchPotato.configureApp(app);

    app.config(function ($provide, $httpProvider) {
    });

    app.run(function ($couchPotato, $rootScope, $state, $stateParams) {
        app.lazy = $couchPotato;

        $rootScope.$state = $state;
        $rootScope.$stateParams=$stateParams;

        // Remove the splash screen
        $rootScope.$on('$viewContentAnimationEnded', function (event) {
            if ( event.targetScope.$id === $rootScope.$id ) {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
    });

    return app;
});
