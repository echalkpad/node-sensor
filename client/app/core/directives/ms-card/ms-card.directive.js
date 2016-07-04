define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.core');

    couchPotato.configureApp(module);

    module.directive('msCard', msCardDirective);

    /** @ngInject */
    function msCardDirective() {
        return {
            restrict: 'E',
            scope   : {
                templatePath: '=template',
                card        : '=ngModel',
                vm          : '=viewModel'
            },
            template: '<div class="ms-card-content-wrapper" ng-include="templatePath" onload="cardTemplateLoaded()"></div>',
            compile : function (tElement) {
                // Add class
                tElement.addClass('ms-card');

                return function postLink(scope, iElement) {
                    // Methods
                    scope.cardTemplateLoaded = cardTemplateLoaded;

                    //////////
                    /**
                     * Emit cardTemplateLoaded event
                     */
                    function cardTemplateLoaded() {
                        scope.$emit('msCard::cardTemplateLoaded', iElement);
                    }
                };
            }
        };
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
