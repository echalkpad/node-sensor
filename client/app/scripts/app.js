'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */
var app = angular.module('testAngularApp', ['plumbApp.directives',
                                             'ngAnimate',
                                             'ngCookies',
                                             'ngResource',
                                             'ngRoute',
                                             'ngSanitize',
                                             'ngTouch',
                                             'lbServices',
                                             'ui.slider',
                                             'ngStorage',
                                             'btford.socket-io'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/graph', {
                templateUrl: 'views/graph.html',
                controller: 'GraphCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('socket', function (socketFactory) {
        return socketFactory();
    })
    .controller('MenuController', function ($scope, $location) {
        $scope.isActive = function (path) {
            return $location.path() === path;
        }
    });

jsPlumb.ready(function(){
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['testAngularApp']);
    });

});
