define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.core');

    couchPotato.configureApp(module);

    module.directive('msRandomClass', msRandomClassDirective);

    /** @ngInject */
    function msRandomClassDirective() {
        return {
            restrict: 'A',
            scope   : {
                msRandomClass: '='
            },
            link    : function (scope, iElement) {
                var randomClass = scope.msRandomClass[Math.floor(Math.random() * (scope.msRandomClass.length))];
                iElement.addClass(randomClass);
            }
        };
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
