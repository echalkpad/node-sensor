# Infraestructure Techonologies:

- [NodeJS](https://nodejs.org/): Event-driven I/O server-side JavaScript environment based on V8. Includes API documentation, change-log, examples and announcements.
- [ExpressJS](http://expressjs.com): Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [MongoDb](https://www.mongodb.org/):MongoDB is the next-generation database that lets you create applications never before possible.
- [Node-Red](http://nodered.org/): A visual tool for wiring the Internet of Things.
- 
# Backend Techonologies:

- [Loopback](https://strongloop.com/): LoopBack is a highly-extensible, open-source Node.js framework. Compare with other frameworks. Quickly create dynamic end-to-end REST APIs.
- [MomentJs](http://momentjs.com/): Parse, validate, manipulate, and display dates in JavaScript.

# Frontend Techonologies:

# Execution:
node server/server.js

# Workflows
Copy and import this flow from node-red import clipboard
```
[{"id":"4d1060c0.b2efa","type":"mqtt-broker","z":"f2181939.0de7e8","broker":"localhost","port":"1883","clientid":"","usetls":false,"verifyservercert":true,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willRetain":"false","willPayload":"","birthTopic":"","birthQos":"0","birthRetain":"false","birthPayload":""},{"id":"9a3f0709.65c0f8","type":"debug","z":"f2181939.0de7e8","name":"out debug","active":true,"console":"false","complete":"payload","x":457,"y":60,"wires":[]},{"id":"ec611d7f.139ee","type":"catch","z":"f2181939.0de7e8","name":"","scope":null,"x":190,"y":222,"wires":[["bb6a5bca.4495a8"]]},{"id":"bb6a5bca.4495a8","type":"debug","z":"f2181939.0de7e8","name":"error","active":true,"console":"false","complete":"payload","x":356,"y":222,"wires":[]},{"id":"cbec3d13.3413c","type":"function","z":"f2181939.0de7e8","name":"persist","func":"console.log('Start persist node');\n\nvar loopback = context.global.loopback;\nvar Device = loopback.models.Device;\n\n// convert from string to JSON\nmsg.payload = JSON.parse(msg.payload);\n\nDevice.registerMeasure(msg.payload, function(err, device) {\n    if (err) node.error(\"registerMeasure device error\", msg);\n    \n    node.send(msg);\n});\n    \nreturn;","outputs":1,"noerr":0,"x":266,"y":60,"wires":[["9a3f0709.65c0f8"]]},{"id":"682e54c8.97d1ac","type":"mqtt in","z":"f2181939.0de7e8","name":"glukose mqtt","topic":"glukose","broker":"4d1060c0.b2efa","x":110,"y":60,"wires":[["cbec3d13.3413c"]]}]
```

# Licenses
The source code is released under Apache 2.0.
