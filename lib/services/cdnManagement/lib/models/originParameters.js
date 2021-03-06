/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the OriginParameters class.
 * @constructor
 * Origin properties needed for origin creation or update.
 * @member {string} hostName The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 * 
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535.
 * 
 * @member {number} [httpsPort] The value of the HTTPS port. Must be between 1
 * and 65535.
 * 
 */
function OriginParameters() {
  OriginParameters['super_'].call(this);
}

util.inherits(OriginParameters, models['BaseResource']);

/**
 * Defines the metadata of OriginParameters
 *
 * @returns {object} metadata of OriginParameters
 *
 */
OriginParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OriginParameters',
    type: {
      name: 'Composite',
      className: 'OriginParameters',
      modelProperties: {
        hostName: {
          required: true,
          serializedName: 'properties.hostName',
          type: {
            name: 'String'
          }
        },
        httpPort: {
          required: false,
          serializedName: 'properties.httpPort',
          type: {
            name: 'Number'
          }
        },
        httpsPort: {
          required: false,
          serializedName: 'properties.httpsPort',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = OriginParameters;
