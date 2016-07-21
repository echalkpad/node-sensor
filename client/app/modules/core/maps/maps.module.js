define(['angular',
        'angular-couch-potato',
        'angular-ui-router',
        'angular-google-maps'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.modules.core.maps', ['uiGmapgoogle-maps']);

    couchPotato.configureApp(module);

    module.config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider
            .state('app.modules_maps', {
                url  : '/modules/maps',
                views: {
                    'content@app'                   : {
                        templateUrl: 'app/modules/core/maps/maps.html',
                        controller : 'MapsController as vm'
                    },
                    'tabContent@app.modules_maps': {
                        templateUrl: 'app/modules/core/maps/tabs/simple.html'
                    }
                }
            })

            .state('app.modules_maps.satellite', {
                url  : '/satellite',
                views: {
                    'tabContent': {
                        templateUrl: 'app/modules/core/maps/tabs/satellite.html'
                    }
                }
            })

            .state('app.modules_maps.terrain', {
                url  : '/terrain',
                views: {
                    'tabContent': {
                        templateUrl: 'app/modules/core/maps/tabs/terrain.html'
                    }
                }
            })

            .state('app.modules_maps.simple-marker', {
                url  : '/simple-marker',
                views: {
                    'tabContent': {
                        templateUrl: 'app/modules/core/maps/tabs/simple-marker.html'
                    }
                }
            })

            .state('app.modules_maps.custom-marker', {
                url  : '/custom-marker',
                views: {
                    'tabContent': {
                        templateUrl: 'app/modules/core/maps/tabs/custom-marker.html'
                    }
                }
            })

            .state('app.modules_maps.info-window', {
                url  : '/info-window',
                views: {
                    'tabContent': {
                        templateUrl: 'app/modules/core/maps/tabs/info-window.html'
                    }
                }
            });
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
