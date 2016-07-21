define(['angular',
        'angular-couch-potato',
        'ms-navigation.directive'], function(ng, couchPotato) {
        'use strict';

    var module = ng.module('app.modules.core', [
                           'app.modules.core.sample',
                           'app.modules.core.maps'
    ]);

    couchPotato.configureApp(module);

    module.config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('modules.core', {
            title : 'MODULES',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('modules.core.maps', {
            title: 'Maps',
            icon : 'icon-map-marker',
            state: 'app.modules_maps'
        });
    }

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
