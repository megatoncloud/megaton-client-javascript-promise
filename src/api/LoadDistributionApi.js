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
    define(['ApiClient', 'model/LoadDistributionEntry', 'model/LoadDistributionEntrySpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoadDistributionEntry'), require('../model/LoadDistributionEntrySpec'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.LoadDistributionApi = factory(root.MegatonApi.ApiClient, root.MegatonApi.LoadDistributionEntry, root.MegatonApi.LoadDistributionEntrySpec);
  }
}(this, function(ApiClient, LoadDistributionEntry, LoadDistributionEntrySpec) {
  'use strict';

  /**
   * LoadDistribution service.
   * @module api/LoadDistributionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LoadDistributionApi. 
   * @alias module:api/LoadDistributionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get load distribution
     * Retrieve load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoadDistributionEntry>} and HTTP response
     */
    this.getLoadDistributionWithHttpInfo = function(testPlanId) {
      var postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling getLoadDistribution");
      }


      var pathParams = {
        'testPlanId': testPlanId
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LoadDistributionEntry];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}/load-distribution', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get load distribution
     * Retrieve load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoadDistributionEntry>}
     */
    this.getLoadDistribution = function(testPlanId) {
      return this.getLoadDistributionWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set load distribution
     * Set load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @param {Array.<module:model/LoadDistributionEntrySpec>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoadDistributionEntry>} and HTTP response
     */
    this.setLoadDistributionWithHttpInfo = function(testPlanId, body) {
      var postBody = body;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling setLoadDistribution");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setLoadDistribution");
      }


      var pathParams = {
        'testPlanId': testPlanId
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LoadDistributionEntry];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}/load-distribution', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set load distribution
     * Set load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @param {Array.<module:model/LoadDistributionEntrySpec>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoadDistributionEntry>}
     */
    this.setLoadDistribution = function(testPlanId, body) {
      return this.setLoadDistributionWithHttpInfo(testPlanId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));