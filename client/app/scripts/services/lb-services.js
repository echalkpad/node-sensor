(function(window, angular, undefined) {'use strict';

    var urlBase = "/api";
    var authHeader = 'authorization';

    /**
     * @ngdoc overview
     * @name lbServices
     * @module
     * @description
     *
     * The `lbServices` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module("lbServices", ['ngResource']);

    /**
     * @ngdoc object
     * @name lbServices.User
     * @header lbServices.User
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `User` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "User",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Users/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__findById__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Users/:id/accessTokens/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__destroyById__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Users/:id/accessTokens/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__updateById__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Users/:id/accessTokens/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__get__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Queries accessTokens of User.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `filter` – `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        isArray: true,
                        url: urlBase + "/Users/:id/accessTokens",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__create__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/Users/:id/accessTokens",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__delete__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/Users/:id/accessTokens",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__count__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Counts accessTokens of User.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/Users/:id/accessTokens/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#create
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Users",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#createMany
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Users",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#upsert
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Users",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#exists
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Users/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#findById
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Users/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#find
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Users",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#findOne
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Users/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#updateAll
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Users/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#deleteById
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Users/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#count
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Users/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$updateAttributes
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Users/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#createChangeStream
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Users/change-stream",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#login
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *   Default value: `user`.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     *
                     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
                     *
                     *
                     */
                    "login": {
                        params: {
                            include: "user"
                        },
                        interceptor: {
                            response: function(response) {
                                var accessToken = response.data;
                                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Users/login",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#logout
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Logout a user with access token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.clearUser();
                                LoopBackAuth.clearStorage();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Users/logout",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#confirm
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` – `{string}` -
                     *
                     *  - `token` – `{string}` -
                     *
                     *  - `redirect` – `{string=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/Users/confirm",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#resetPassword
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Reset password for a user with email.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/Users/reset",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#getCurrent
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {function(Object,Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/Users" + "/:id",
                        method: "GET",
                        params: {
                            id: function() {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            },
                        },
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.currentUserData = response.data;
                                return response.resource;
                            }
                        },
                        __isGetCurrentUser__ : true
                    }
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#getCachedCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user that was returned by the last
             * call to {@link lbServices.User#login} or
             * {@link lbServices.User#getCurrent}. Return null when there
             * is no user logged in or the data of the current user were not fetched
             * yet.
             *
             * @returns {Object} A User instance.
             */
            R.getCachedCurrent = function() {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };

            /**
             * @ngdoc method
             * @name lbServices.User#isAuthenticated
             * @methodOf lbServices.User
             *
             * @returns {boolean} True if the current user is authenticated (logged in).
             */
            R.isAuthenticated = function() {
                return this.getCurrentId() != null;
            };

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrentId
             * @methodOf lbServices.User
             *
             * @returns {Object} Id of the currently logged-in user or null.
             */
            R.getCurrentId = function() {
                return LoopBackAuth.currentUserId;
            };

            /**
             * @ngdoc property
             * @name lbServices.User#modelName
             * @propertyOf lbServices.User
             * @description
             * The name of the model represented by this $resource,
             * i.e. `User`.
             */
            R.modelName = "User";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.DeviceCluster
     * @header lbServices.DeviceCluster
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `DeviceCluster` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "DeviceCluster",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/DeviceClusters/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use DeviceCluster.deviceHubs.findById() instead.
                    "prototype$__findById__deviceHubs": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.destroyById() instead.
                    "prototype$__destroyById__deviceHubs": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.updateById() instead.
                    "prototype$__updateById__deviceHubs": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs() instead.
                    "prototype$__get__deviceHubs": {
                        isArray: true,
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.create() instead.
                    "prototype$__create__deviceHubs": {
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.destroyAll() instead.
                    "prototype$__delete__deviceHubs": {
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.count() instead.
                    "prototype$__count__deviceHubs": {
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#create
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/DeviceClusters",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#createMany
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/DeviceClusters",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#upsert
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/DeviceClusters",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#exists
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/DeviceClusters/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#findById
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/DeviceClusters/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#find
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/DeviceClusters",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#findOne
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/DeviceClusters/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#updateAll
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/DeviceClusters/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#deleteById
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/DeviceClusters/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#count
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/DeviceClusters/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#prototype$updateAttributes
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceCluster` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/DeviceClusters/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceCluster#createChangeStream
                     * @methodOf lbServices.DeviceCluster
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/DeviceClusters/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster#updateOrCreate
             * @methodOf lbServices.DeviceCluster
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceCluster` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster#update
             * @methodOf lbServices.DeviceCluster
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster#destroyById
             * @methodOf lbServices.DeviceCluster
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceCluster` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster#removeById
             * @methodOf lbServices.DeviceCluster
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceCluster` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.DeviceCluster#modelName
             * @propertyOf lbServices.DeviceCluster
             * @description
             * The name of the model represented by this $resource,
             * i.e. `DeviceCluster`.
             */
            R.modelName = "DeviceCluster";

            /**
             * @ngdoc object
             * @name lbServices.DeviceCluster.deviceHubs
             * @header lbServices.DeviceCluster.deviceHubs
             * @object
             * @description
             *
             * The object `DeviceCluster.deviceHubs` groups methods
             * manipulating `DeviceHub` instances related to `DeviceCluster`.
             *
             * Call {@link lbServices.DeviceCluster#deviceHubs DeviceCluster.deviceHubs()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster#deviceHubs
             * @methodOf lbServices.DeviceCluster
             *
             * @description
             *
             * Queries deviceHubs of DeviceCluster.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R.deviceHubs = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::get::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#count
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Counts deviceHubs of DeviceCluster.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            R.deviceHubs.count = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::count::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#create
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Creates a new instance in deviceHubs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R.deviceHubs.create = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::create::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#createMany
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Creates a new instance in deviceHubs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R.deviceHubs.createMany = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::createMany::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#destroyAll
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Deletes all deviceHubs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.deviceHubs.destroyAll = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::delete::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#destroyById
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Delete a related item by id for deviceHubs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for deviceHubs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.deviceHubs.destroyById = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::destroyById::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#findById
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Find a related item by id for deviceHubs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for deviceHubs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R.deviceHubs.findById = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::findById::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceCluster.deviceHubs#updateById
             * @methodOf lbServices.DeviceCluster.deviceHubs
             *
             * @description
             *
             * Update a related item by id for deviceHubs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for deviceHubs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R.deviceHubs.updateById = function() {
                var TargetResource = $injector.get("DeviceHub");
                var action = TargetResource["::updateById::DeviceCluster::deviceHubs"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.DeviceHub
     * @header lbServices.DeviceHub
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `DeviceHub` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "DeviceHub",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/DeviceHubs/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use DeviceHub.devices.findById() instead.
                    "prototype$__findById__devices": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceHubs/:id/devices/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceHub.devices.destroyById() instead.
                    "prototype$__destroyById__devices": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceHubs/:id/devices/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceHub.devices.updateById() instead.
                    "prototype$__updateById__devices": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceHubs/:id/devices/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use DeviceHub.devices() instead.
                    "prototype$__get__devices": {
                        isArray: true,
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceHub.devices.create() instead.
                    "prototype$__create__devices": {
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceHub.devices.destroyAll() instead.
                    "prototype$__delete__devices": {
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceHub.devices.count() instead.
                    "prototype$__count__devices": {
                        url: urlBase + "/DeviceHubs/:id/devices/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#create
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/DeviceHubs",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#createMany
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/DeviceHubs",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#upsert
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/DeviceHubs",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#exists
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/DeviceHubs/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#findById
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/DeviceHubs/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#find
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/DeviceHubs",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#findOne
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/DeviceHubs/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#updateAll
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/DeviceHubs/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#deleteById
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/DeviceHubs/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#count
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/DeviceHubs/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#prototype$updateAttributes
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceHub` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/DeviceHubs/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceHub#createChangeStream
                     * @methodOf lbServices.DeviceHub
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/DeviceHubs/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.findById() instead.
                    "::findById::DeviceCluster::deviceHubs": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.destroyById() instead.
                    "::destroyById::DeviceCluster::deviceHubs": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.updateById() instead.
                    "::updateById::DeviceCluster::deviceHubs": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs() instead.
                    "::get::DeviceCluster::deviceHubs": {
                        isArray: true,
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.create() instead.
                    "::create::DeviceCluster::deviceHubs": {
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.createMany() instead.
                    "::createMany::DeviceCluster::deviceHubs": {
                        isArray: true,
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.destroyAll() instead.
                    "::delete::DeviceCluster::deviceHubs": {
                        url: urlBase + "/DeviceClusters/:id/deviceHubs",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceCluster.deviceHubs.count() instead.
                    "::count::DeviceCluster::deviceHubs": {
                        url: urlBase + "/DeviceClusters/:id/deviceHubs/count",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.DeviceHub#updateOrCreate
             * @methodOf lbServices.DeviceHub
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub#update
             * @methodOf lbServices.DeviceHub
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub#destroyById
             * @methodOf lbServices.DeviceHub
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub#removeById
             * @methodOf lbServices.DeviceHub
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceHub` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.DeviceHub#modelName
             * @propertyOf lbServices.DeviceHub
             * @description
             * The name of the model represented by this $resource,
             * i.e. `DeviceHub`.
             */
            R.modelName = "DeviceHub";

            /**
             * @ngdoc object
             * @name lbServices.DeviceHub.devices
             * @header lbServices.DeviceHub.devices
             * @object
             * @description
             *
             * The object `DeviceHub.devices` groups methods
             * manipulating `Device` instances related to `DeviceHub`.
             *
             * Call {@link lbServices.DeviceHub#devices DeviceHub.devices()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name lbServices.DeviceHub#devices
             * @methodOf lbServices.DeviceHub
             *
             * @description
             *
             * Queries devices of DeviceHub.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R.devices = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::get::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#count
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Counts devices of DeviceHub.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            R.devices.count = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::count::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#create
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Creates a new instance in devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R.devices.create = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::create::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#createMany
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Creates a new instance in devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R.devices.createMany = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::createMany::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#destroyAll
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Deletes all devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.devices.destroyAll = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::delete::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#destroyById
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Delete a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.devices.destroyById = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::destroyById::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#findById
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Find a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R.devices.findById = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::findById::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name lbServices.DeviceHub.devices#updateById
             * @methodOf lbServices.DeviceHub.devices
             *
             * @description
             *
             * Update a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R.devices.updateById = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::updateById::DeviceHub::devices"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Device
     * @header lbServices.Device
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Device` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Device",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Devices/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Device.deviceType() instead.
                    "prototype$__get__deviceType": {
                        url: urlBase + "/Devices/:id/deviceType",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#create
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Devices",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#createMany
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Devices",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#upsert
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Devices",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#exists
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Devices/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#findById
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Devices/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#find
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Devices",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#findOne
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Devices/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#updateAll
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Devices/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#deleteById
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Devices/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#count
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Devices/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#prototype$updateAttributes
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Device` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Devices/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Device#createChangeStream
                     * @methodOf lbServices.Device
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Devices/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceHub.devices.findById() instead.
                    "::findById::DeviceHub::devices": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceHubs/:id/devices/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceHub.devices.destroyById() instead.
                    "::destroyById::DeviceHub::devices": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceHubs/:id/devices/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceHub.devices.updateById() instead.
                    "::updateById::DeviceHub::devices": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/DeviceHubs/:id/devices/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use DeviceHub.devices() instead.
                    "::get::DeviceHub::devices": {
                        isArray: true,
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "GET"
                    },

                    // INTERNAL. Use DeviceHub.devices.create() instead.
                    "::create::DeviceHub::devices": {
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceHub.devices.createMany() instead.
                    "::createMany::DeviceHub::devices": {
                        isArray: true,
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceHub.devices.destroyAll() instead.
                    "::delete::DeviceHub::devices": {
                        url: urlBase + "/DeviceHubs/:id/devices",
                        method: "DELETE"
                    },

                    // INTERNAL. Use DeviceHub.devices.count() instead.
                    "::count::DeviceHub::devices": {
                        url: urlBase + "/DeviceHubs/:id/devices/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Track.device() instead.
                    "::get::Track::device": {
                        url: urlBase + "/Tracks/:id/device",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.Device#updateOrCreate
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Device#update
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Device#destroyById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Device#removeById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Device#modelName
             * @propertyOf lbServices.Device
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Device`.
             */
            R.modelName = "Device";


            /**
             * @ngdoc method
             * @name lbServices.Device#deviceType
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Fetches belongsTo relation deviceType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceType` object.)
             * </em>
             */
            R.deviceType = function() {
                var TargetResource = $injector.get("DeviceType");
                var action = TargetResource["::get::Device::deviceType"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.DeviceType
     * @header lbServices.DeviceType
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `DeviceType` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "DeviceType",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/DeviceTypes/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use DeviceType.deviceGroup() instead.
                    "prototype$__get__deviceGroup": {
                        url: urlBase + "/DeviceTypes/:id/deviceGroup",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#create
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/DeviceTypes",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#createMany
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/DeviceTypes",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#upsert
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/DeviceTypes",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#exists
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/DeviceTypes/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#findById
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/DeviceTypes/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#find
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/DeviceTypes",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#findOne
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/DeviceTypes/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#updateAll
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/DeviceTypes/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#deleteById
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/DeviceTypes/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#count
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/DeviceTypes/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#prototype$updateAttributes
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceType` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/DeviceTypes/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceType#createChangeStream
                     * @methodOf lbServices.DeviceType
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/DeviceTypes/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use Device.deviceType() instead.
                    "::get::Device::deviceType": {
                        url: urlBase + "/Devices/:id/deviceType",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.DeviceType#updateOrCreate
             * @methodOf lbServices.DeviceType
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceType` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceType#update
             * @methodOf lbServices.DeviceType
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceType#destroyById
             * @methodOf lbServices.DeviceType
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceType` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceType#removeById
             * @methodOf lbServices.DeviceType
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceType` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.DeviceType#modelName
             * @propertyOf lbServices.DeviceType
             * @description
             * The name of the model represented by this $resource,
             * i.e. `DeviceType`.
             */
            R.modelName = "DeviceType";


            /**
             * @ngdoc method
             * @name lbServices.DeviceType#deviceGroup
             * @methodOf lbServices.DeviceType
             *
             * @description
             *
             * Fetches belongsTo relation deviceGroup.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceGroup` object.)
             * </em>
             */
            R.deviceGroup = function() {
                var TargetResource = $injector.get("DeviceGroup");
                var action = TargetResource["::get::DeviceType::deviceGroup"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.DeviceGroup
     * @header lbServices.DeviceGroup
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `DeviceGroup` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "DeviceGroup",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/DeviceGroups/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#create
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/DeviceGroups",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#createMany
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/DeviceGroups",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#upsert
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/DeviceGroups",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#exists
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/DeviceGroups/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#findById
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/DeviceGroups/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#find
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/DeviceGroups",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#findOne
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/DeviceGroups/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#updateAll
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/DeviceGroups/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#deleteById
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/DeviceGroups/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#count
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/DeviceGroups/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#prototype$updateAttributes
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `DeviceGroup` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/DeviceGroups/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.DeviceGroup#createChangeStream
                     * @methodOf lbServices.DeviceGroup
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/DeviceGroups/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use DeviceType.deviceGroup() instead.
                    "::get::DeviceType::deviceGroup": {
                        url: urlBase + "/DeviceTypes/:id/deviceGroup",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.DeviceGroup#updateOrCreate
             * @methodOf lbServices.DeviceGroup
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceGroup` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceGroup#update
             * @methodOf lbServices.DeviceGroup
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceGroup#destroyById
             * @methodOf lbServices.DeviceGroup
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceGroup` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DeviceGroup#removeById
             * @methodOf lbServices.DeviceGroup
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DeviceGroup` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.DeviceGroup#modelName
             * @propertyOf lbServices.DeviceGroup
             * @description
             * The name of the model represented by this $resource,
             * i.e. `DeviceGroup`.
             */
            R.modelName = "DeviceGroup";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name lbServices.Track
     * @header lbServices.Track
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Track` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Track",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Tracks/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Track.device() instead.
                    "prototype$__get__device": {
                        url: urlBase + "/Tracks/:id/device",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#create
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Tracks",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#createMany
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Tracks",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#upsert
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Tracks",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#exists
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Tracks/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#findById
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Tracks/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#find
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Tracks",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#findOne
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Tracks/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#updateAll
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Tracks/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#deleteById
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Tracks/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#count
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Tracks/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#prototype$updateAttributes
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Track` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Tracks/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.Track#createChangeStream
                     * @methodOf lbServices.Track
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Tracks/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name lbServices.Track#updateOrCreate
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Track#update
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Track#destroyById
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Track#removeById
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Track` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name lbServices.Track#modelName
             * @propertyOf lbServices.Track
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Track`.
             */
            R.modelName = "Track";


            /**
             * @ngdoc method
             * @name lbServices.Track#device
             * @methodOf lbServices.Track
             *
             * @description
             *
             * Fetches belongsTo relation device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            R.device = function() {
                var TargetResource = $injector.get("Device");
                var action = TargetResource["::get::Track::device"];
                return action.apply(R, arguments);
            };

            return R;
        }]);


    module
        .factory('LoopBackAuth', function() {
            var props = ['accessTokenId', 'currentUserId'];
            var propsPrefix = '$LoopBack$';

            function LoopBackAuth() {
                var self = this;
                props.forEach(function(name) {
                    self[name] = load(name);
                });
                this.rememberMe = undefined;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.save = function() {
                var self = this;
                var storage = this.rememberMe ? localStorage : sessionStorage;
                props.forEach(function(name) {
                    save(storage, name, self[name]);
                });
            };

            LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            }

            LoopBackAuth.prototype.clearUser = function() {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.clearStorage = function() {
                props.forEach(function(name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new LoopBackAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                var key = propsPrefix + name;
                if (value == null) value = '';
                storage[key] = value;
            }

            function load(name) {
                var key = propsPrefix + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
            function($q, LoopBackAuth) {
                return {
                    'request': function(config) {

                        // filter out non urlBase requests
                        if (config.url.substr(0, urlBase.length) !== urlBase) {
                            return config;
                        }

                        if (LoopBackAuth.accessTokenId) {
                            config.headers[authHeader] = LoopBackAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: { error: { status: 401 } },
                                status: 401,
                                config: config,
                                headers: function() { return undefined; }
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    }
                }
            }])

    /**
     * @ngdoc object
     * @name lbServices.LoopBackResourceProvider
     * @header lbServices.LoopBackResourceProvider
     * @description
     * Use `LoopBackResourceProvider` to change the global configuration
     * settings used by all models. Note that the provider is available
     * to Configuration Blocks only, see
     * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
     * for more details.
     *
     * ## Example
     *
     * ```js
     * angular.module('app')
     *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
     * ```
     */
        .provider('LoopBackResource', function LoopBackResourceProvider() {
            /**
             * @ngdoc method
             * @name lbServices.LoopBackResourceProvider#setAuthHeader
             * @methodOf lbServices.LoopBackResourceProvider
             * @param {string} header The header name to use, e.g. `X-Access-Token`
             * @description
             * Configure the REST transport to use a different header for sending
             * the authentication token. It is sent in the `Authorization` header
             * by default.
             */
            this.setAuthHeader = function(header) {
                authHeader = header;
            };

            /**
             * @ngdoc method
             * @name lbServices.LoopBackResourceProvider#setUrlBase
             * @methodOf lbServices.LoopBackResourceProvider
             * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
             * @description
             * Change the URL of the REST API server. By default, the URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.setUrlBase = function(url) {
                urlBase = url;
            };

            /**
             * @ngdoc method
             * @name lbServices.LoopBackResourceProvider#getUrlBase
             * @methodOf lbServices.LoopBackResourceProvider
             * @description
             * Get the URL of the REST API server. The URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.getUrlBase = function() {
                return urlBase;
            };

            this.$get = ['$resource', function($resource) {
                return function(url, params, actions) {
                    var resource = $resource(url, params, actions);

                    // Angular always calls POST on $save()
                    // This hack is based on
                    // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
                    resource.prototype.$save = function(success, error) {
                        // Fortunately, LoopBack provides a convenient `upsert` method
                        // that exactly fits our needs.
                        var result = resource.upsert.call(this, {}, this, success, error);
                        return result.$promise || result;
                    };
                    return resource;
                };
            }];
        });

})(window, window.angular);
