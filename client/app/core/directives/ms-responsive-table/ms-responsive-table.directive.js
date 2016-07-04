define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.core');

    couchPotato.configureApp(module);

    module.directive('msResponsiveTable', msResponsiveTableDirective);

    /** @ngInject */
    function msResponsiveTableDirective() {
        return {
            restrict: 'A',
            link    : function (scope, iElement) {
                // Wrap the table
                var wrapper = angular.element('<div class="ms-responsive-table-wrapper"></div>');
                iElement.after(wrapper);
                wrapper.append(iElement);

                //////////
            }
        };
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
