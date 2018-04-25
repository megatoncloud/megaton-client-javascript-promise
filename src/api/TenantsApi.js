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
    define(['ApiClient', 'model/Tenant', 'model/TenantSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Tenant'), require('../model/TenantSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.TenantsApi = factory(root.MegatonApi.ApiClient, root.MegatonApi.Tenant, root.MegatonApi.TenantSpec);
  }
}(this, function(ApiClient, Tenant, TenantSpec) {
  'use strict';

  /**
   * Tenants service.
   * @module api/TenantsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TenantsApi. 
   * @alias module:api/TenantsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new tenant
     * Create a new tenant with email and password authentication
     * @param {module:model/TenantSpec} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tenant} and HTTP response
     */
    this.createTenantWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTenant");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Tenant;

      return this.apiClient.callApi(
        '/v1/tenants', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new tenant
     * Create a new tenant with email and password authentication
     * @param {module:model/TenantSpec} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tenant}
     */
    this.createTenant = function(body) {
      return this.createTenantWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete authenticated tenant
     * Use Bearer token to identify and permanently delete tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAuthenticatedTenantWithHttpInfo = function() {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v1/tenants/me', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete authenticated tenant
     * Use Bearer token to identify and permanently delete tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAuthenticatedTenant = function() {
      return this.deleteAuthenticatedTenantWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get authenticated tenant
     * Use Bearer token to identify and retrieve tenant details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tenant} and HTTP response
     */
    this.getAuthenticatedTenantWithHttpInfo = function() {
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Tenant;

      return this.apiClient.callApi(
        '/v1/tenants/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get authenticated tenant
     * Use Bearer token to identify and retrieve tenant details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tenant}
     */
    this.getAuthenticatedTenant = function() {
      return this.getAuthenticatedTenantWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));