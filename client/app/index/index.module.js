define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('fuse', [
        // Core
        'app.core',

        // Navigation
        'app.navigation',

        // Toolbar
        'app.toolbar',

        // Quick panel
        'app.quick-panel',

        // core module
        'app.modules.core'
    ]);

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
