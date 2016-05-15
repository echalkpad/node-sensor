'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
    .controller('MainCtrl', ['$scope', 'DeviceCluster', 'DeviceHub', 'Device', 'DeviceType', function ($scope, DeviceCluster, DeviceHub, Device, DeviceType) {

        DeviceCluster.find({ filter: {include: { relation: 'deviceHubs',
                                                 //where: {code: ''},
                                                 scope: { include: { relation: 'devices',
                                                                     //where: {code: ''},
                                                                     scope: { include: { relation: 'deviceType'}}}}
                                               }
        }})
            .$promise
            .then(function(deviceClusters) {
                for(var i in JSON.parse(angular.toJson(deviceClusters))) {
                    var deviceCluster = deviceClusters[i];

                    console.log('Device Cluster: ' + deviceCluster.code);

                    for(var j in JSON.parse(angular.toJson(deviceCluster.deviceHubs))) {
                        var deviceHub = deviceCluster.deviceHubs[j];

                        console.log('Device Hub: ' + deviceHub.code + " - " + deviceHub.description);

                        for(var k in JSON.parse(angular.toJson(deviceHub.devices))) {
                            var device = deviceHub.devices[k];

                            console.log('Device: ' + device.code + " - " + device.description);
                            console.log('Device Type: ' + device.deviceType.code);
                        }
                    }
                }
            }, function(errorResponse) {
                console.log('Error finding Device Clusters - ' + errorResponse.data.error.status + ": " + errorResponse.data.error.message);
            });
    }]);
