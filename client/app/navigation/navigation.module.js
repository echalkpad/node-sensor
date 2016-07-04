define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.navigation', []);

    couchPotato.configureApp(module);

    module.config(config);

    /** @ngInject */
    function config() {

    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
