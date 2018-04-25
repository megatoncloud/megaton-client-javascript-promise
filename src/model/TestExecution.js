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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.TestExecution = factory(root.MegatonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TestExecution model module.
   * @module model/TestExecution
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TestExecution</code>.
   * @alias module:model/TestExecution
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TestExecution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestExecution} obj Optional instance to populate.
   * @return {module:model/TestExecution} The populated <code>TestExecution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = ApiClient.convertToType(data['profile'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('terminatedReason')) {
        obj['terminatedReason'] = ApiClient.convertToType(data['terminatedReason'], 'String');
      }
      if (data.hasOwnProperty('statusTimestamp')) {
        obj['statusTimestamp'] = ApiClient.convertToType(data['statusTimestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {String} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} terminatedReason
   */
  exports.prototype['terminatedReason'] = undefined;
  /**
   * @member {String} statusTimestamp
   */
  exports.prototype['statusTimestamp'] = undefined;



  return exports;
}));

