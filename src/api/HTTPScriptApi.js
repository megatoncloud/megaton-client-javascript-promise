/**
 * Megaton API
 * JSON API for the Megaton Cloud Platform
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@megaton.cloud
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HTTPMessageHeader', 'model/HTTPScriptEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HTTPMessageHeader'), require('../model/HTTPScriptEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.HTTPScriptApi = factory(root.MegatonApi.ApiClient, root.MegatonApi.HTTPMessageHeader, root.MegatonApi.HTTPScriptEntry);
  }
}(this, function(ApiClient, HTTPMessageHeader, HTTPScriptEntry) {
  'use strict';

  /**
   * HTTPScript service.
   * @module api/HTTPScriptApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HTTPScriptApi. 
   * @alias module:api/HTTPScriptApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get HTTP script
     * Retrieves HTTP script for a specified use-case
     * @param {Number} useCaseId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HTTPScriptEntry>} and HTTP response
     */
    this.getHttpScriptWithHttpInfo = function(useCaseId) {
      var postBody = null;

      // verify the required parameter 'useCaseId' is set
      if (useCaseId === undefined || useCaseId === null) {
        throw new Error("Missing the required parameter 'useCaseId' when calling getHttpScript");
      }


      var pathParams = {
        'useCaseId': useCaseId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['password'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [HTTPScriptEntry];

      return this.apiClient.callApi(
        '/v1/tenants/me/use-cases/{useCaseId}/http-script', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get HTTP script
     * Retrieves HTTP script for a specified use-case
     * @param {Number} useCaseId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HTTPScriptEntry>}
     */
    this.getHttpScript = function(useCaseId) {
      return this.getHttpScriptWithHttpInfo(useCaseId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get HTTP script entry body
     * Retrieves body for a specified use-case and HTTP script entry
     * @param {Number} useCaseId 
     * @param {Number} entryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getHttpScriptEntryBodyWithHttpInfo = function(useCaseId, entryId) {
      var postBody = null;

      // verify the required parameter 'useCaseId' is set
      if (useCaseId === undefined || useCaseId === null) {
        throw new Error("Missing the required parameter 'useCaseId' when calling getHttpScriptEntryBody");
      }

      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling getHttpScriptEntryBody");
      }


      var pathParams = {
        'useCaseId': useCaseId,
        'entryId': entryId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['password'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1/tenants/me/use-cases/{useCaseId}/http-script/{entryId}/body', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get HTTP script entry body
     * Retrieves body for a specified use-case and HTTP script entry
     * @param {Number} useCaseId 
     * @param {Number} entryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getHttpScriptEntryBody = function(useCaseId, entryId) {
      return this.getHttpScriptEntryBodyWithHttpInfo(useCaseId, entryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get HTTP script entry headers
     * Retrieves headers for a specified use-case and HTTP script entry
     * @param {Number} useCaseId 
     * @param {Number} entryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HTTPMessageHeader>} and HTTP response
     */
    this.getHttpScriptEntryHeadersWithHttpInfo = function(useCaseId, entryId) {
      var postBody = null;

      // verify the required parameter 'useCaseId' is set
      if (useCaseId === undefined || useCaseId === null) {
        throw new Error("Missing the required parameter 'useCaseId' when calling getHttpScriptEntryHeaders");
      }

      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling getHttpScriptEntryHeaders");
      }


      var pathParams = {
        'useCaseId': useCaseId,
        'entryId': entryId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['password'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [HTTPMessageHeader];

      return this.apiClient.callApi(
        '/v1/tenants/me/use-cases/{useCaseId}/http-script/{entryId}/headers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get HTTP script entry headers
     * Retrieves headers for a specified use-case and HTTP script entry
     * @param {Number} useCaseId 
     * @param {Number} entryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HTTPMessageHeader>}
     */
    this.getHttpScriptEntryHeaders = function(useCaseId, entryId) {
      return this.getHttpScriptEntryHeadersWithHttpInfo(useCaseId, entryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
