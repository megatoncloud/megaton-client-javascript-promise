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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MegatonApi);
  }
}(this, function(expect, MegatonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MegatonApi.LoadDistributionEntry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LoadDistributionEntry', function() {
    it('should create an instance of LoadDistributionEntry', function() {
      // uncomment below and update the code to test LoadDistributionEntry
      //var instane = new MegatonApi.LoadDistributionEntry();
      //expect(instance).to.be.a(MegatonApi.LoadDistributionEntry);
    });

    it('should have the property useCase (base name: "useCase")', function() {
      // uncomment below and update the code to test the property useCase
      //var instane = new MegatonApi.LoadDistributionEntry();
      //expect(instance).to.be();
    });

    it('should have the property pointOfPresence (base name: "pointOfPresence")', function() {
      // uncomment below and update the code to test the property pointOfPresence
      //var instane = new MegatonApi.LoadDistributionEntry();
      //expect(instance).to.be();
    });

    it('should have the property vuCount (base name: "vuCount")', function() {
      // uncomment below and update the code to test the property vuCount
      //var instane = new MegatonApi.LoadDistributionEntry();
      //expect(instance).to.be();
    });

  });

}));
