define(['angular',
        'angular-couch-potato',
        'angular-ui-router',
        'ms-api.provider',
        'angular-translate-loader-partial'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.quick-panel', []);

    couchPotato.configureApp(module);

    module.config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider, msApiProvider) {
        // Translation
        $translatePartialLoaderProvider.addPart('app/quick-panel');

        // Api
        msApiProvider.register('quickPanel.activities', ['app/data/quick-panel/activities.json']);
        msApiProvider.register('quickPanel.contacts', ['app/data/quick-panel/contacts.json']);
        msApiProvider.register('quickPanel.events', ['app/data/quick-panel/events.json']);
        msApiProvider.register('quickPanel.notes', ['app/data/quick-panel/notes.json']);
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
