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
    define(['ApiClient', 'model/TestExecution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TestExecution'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.TestExecutionsApi = factory(root.MegatonApi.ApiClient, root.MegatonApi.TestExecution);
  }
}(this, function(ApiClient, TestExecution) {
  'use strict';

  /**
   * TestExecutions service.
   * @module api/TestExecutionsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TestExecutionsApi. 
   * @alias module:api/TestExecutionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Execute test plan
     * Executes a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestExecution} and HTTP response
     */
    this.executeTestWithHttpInfo = function(testPlanId) {
      var postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling executeTest");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TestExecution;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}/test-executions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Execute test plan
     * Executes a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestExecution}
     */
    this.executeTest = function(testPlanId) {
      return this.executeTestWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get test executions
     * Retrieve all executed tests for a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestExecution>} and HTTP response
     */
    this.getTestExecutionsWithHttpInfo = function(testPlanId) {
      var postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling getTestExecutions");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [TestExecution];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}/test-executions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get test executions
     * Retrieve all executed tests for a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestExecution>}
     */
    this.getTestExecutions = function(testPlanId) {
      return this.getTestExecutionsWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));