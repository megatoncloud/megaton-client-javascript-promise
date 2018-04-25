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
    instance = new MegatonApi.HARRequest();
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

  describe('HARRequest', function() {
    it('should create an instance of HARRequest', function() {
      // uncomment below and update the code to test HARRequest
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be.a(MegatonApi.HARRequest);
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be();
    });

    it('should have the property httpVersion (base name: "httpVersion")', function() {
      // uncomment below and update the code to test the property httpVersion
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be();
    });

    it('should have the property cookies (base name: "cookies")', function() {
      // uncomment below and update the code to test the property cookies
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be();
    });

    it('should have the property postData (base name: "postData")', function() {
      // uncomment below and update the code to test the property postData
      //var instane = new MegatonApi.HARRequest();
      //expect(instance).to.be();
    });

  });

}));
