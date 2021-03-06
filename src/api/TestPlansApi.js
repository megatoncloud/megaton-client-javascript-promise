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
    define(['ApiClient', 'model/TestPlan', 'model/TestPlanPatchOperation', 'model/TestPlanSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TestPlan'), require('../model/TestPlanPatchOperation'), require('../model/TestPlanSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.TestPlansApi = factory(root.MegatonApi.ApiClient, root.MegatonApi.TestPlan, root.MegatonApi.TestPlanPatchOperation, root.MegatonApi.TestPlanSpec);
  }
}(this, function(ApiClient, TestPlan, TestPlanPatchOperation, TestPlanSpec) {
  'use strict';

  /**
   * TestPlans service.
   * @module api/TestPlansApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TestPlansApi. 
   * @alias module:api/TestPlansApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create test plan
     * Executes a new test plan for a specified tenant
     * @param {module:model/TestPlanSpec} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlan} and HTTP response
     */
    this.createTestPlanWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTestPlan");
      }


      var pathParams = {
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
      var returnType = TestPlan;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create test plan
     * Executes a new test plan for a specified tenant
     * @param {module:model/TestPlanSpec} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlan}
     */
    this.createTestPlan = function(body) {
      return this.createTestPlanWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete test plan
     * Deletes a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTestPlanWithHttpInfo = function(testPlanId) {
      var postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling deleteTestPlan");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete test plan
     * Deletes a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteTestPlan = function(testPlanId) {
      return this.deleteTestPlanWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get test plan
     * Retrieve a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlan} and HTTP response
     */
    this.getTestPlanWithHttpInfo = function(testPlanId) {
      var postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling getTestPlan");
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
      var returnType = TestPlan;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get test plan
     * Retrieve a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlan}
     */
    this.getTestPlan = function(testPlanId) {
      return this.getTestPlanWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get test plans
     * Retrieve all test plans for a specified tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlan>} and HTTP response
     */
    this.getTestPlansWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
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
      var returnType = [TestPlan];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get test plans
     * Retrieve all test plans for a specified tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlan>}
     */
    this.getTestPlans = function() {
      return this.getTestPlansWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update test plan
     * Updates an existing new test plan for a specified tenant
     * @param {Number} testPlanId 
     * @param {Array.<module:model/TestPlanPatchOperation>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlan} and HTTP response
     */
    this.updateTestPlanWithHttpInfo = function(testPlanId, body) {
      var postBody = body;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling updateTestPlan");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTestPlan");
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
      var returnType = TestPlan;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update test plan
     * Updates an existing new test plan for a specified tenant
     * @param {Number} testPlanId 
     * @param {Array.<module:model/TestPlanPatchOperation>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlan}
     */
    this.updateTestPlan = function(testPlanId, body) {
      return this.updateTestPlanWithHttpInfo(testPlanId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
