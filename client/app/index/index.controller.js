define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('fuse');

    couchPotato.configureApp(module);

    module.controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming) {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        //////////
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
