define(['angular',
        'angular-couch-potato',
        'angular-ui-router'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('fuse');

    couchPotato.configureApp(module);

    module.run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state) {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function () {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function () {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function () {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
