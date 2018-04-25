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
    define(['ApiClient', 'model/HARLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HARLog'));
  } else {
    // Browser globals (root is window)
    if (!root.MegatonApi) {
      root.MegatonApi = {};
    }
    root.MegatonApi.HAR = factory(root.MegatonApi.ApiClient, root.MegatonApi.HARLog);
  }
}(this, function(ApiClient, HARLog) {
  'use strict';




  /**
   * The HAR model module.
   * @module model/HAR
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HAR</code>.
   * @alias module:model/HAR
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>HAR</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HAR} obj Optional instance to populate.
   * @return {module:model/HAR} The populated <code>HAR</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('log')) {
        obj['log'] = HARLog.constructFromObject(data['log']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/HARLog} log
   */
  exports.prototype['log'] = undefined;



  return exports;
}));

