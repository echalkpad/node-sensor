define(['angular',
        'angular-couch-potato',
        'angular-ui-router',
        'angular-translate-loader-partial'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.toolbar', []);

    couchPotato.configureApp(module);

    module.config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('app/toolbar');
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
