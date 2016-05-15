'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
    .controller('AboutCtrl', function ($scope, socket) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        socket.on('push-event', function(msg) {
            $scope.message = 'Push message: ' +  msg + ' at ' + new Date();

            console.log($scope.message);
        });

        socket.emit('push-event', 'Hello Push');
    });
