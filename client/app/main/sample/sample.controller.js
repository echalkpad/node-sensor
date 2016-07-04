define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.sample');

    couchPotato.configureApp(module);

    module.controller('SampleController', SampleController);

    /** @ngInject */
    function SampleController(SampleData)
    {
        var vm = this;

        // Data
        vm.helloText = SampleData.data.helloText;

        // Methods

        //////////
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
