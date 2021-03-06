// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define(['require',
        'jquery',
        'angular',
        'domReady',
        'bootstrap',
        'includes',
        'app'], function (require, $, ng, domReady) {
    'use strict';

    domReady(function (document) {
        ng.bootstrap(document, ['app']);
        ng.resumeBootstrap();

        ng.element(document).scope().$emit('$viewContentAnimationEnded');
    });
});
