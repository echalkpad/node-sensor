define(['angular',
        'angular-couch-potato',
        'angular-animate',
        'angular-aria',
        'angular-cookies',
        'angular-messages',
        'angular-resource',
        'angular-sanitize',
        'angular-material',
        'angular-translate',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.core', ['ngAnimate',
                                        'ngAria',
                                        'ngCookies',
                                        'ngMessages',
                                        'ngResource',
                                        'ngSanitize',
                                        'ngMaterial',
                                        'pascalprecht.translate',
                                        'ui.router']);

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
