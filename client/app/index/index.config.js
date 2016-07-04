define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('fuse');

    couchPotato.configureApp(module);

    module.config(config);

    /** @ngInject */
    function config() {
        // Put your custom configurations here
    }
    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
