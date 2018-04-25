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
    root.MegatonApi.HTTPScriptEntry = factory(root.MegatonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HTTPScriptEntry model module.
   * @module model/HTTPScriptEntry
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HTTPScriptEntry</code>.
   * @alias module:model/HTTPScriptEntry
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>HTTPScriptEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HTTPScriptEntry} obj Optional instance to populate.
   * @return {module:model/HTTPScriptEntry} The populated <code>HTTPScriptEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('delay')) {
        obj['delay'] = ApiClient.convertToType(data['delay'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * @member {String} delay
   */
  exports.prototype['delay'] = undefined;
  /**
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));

