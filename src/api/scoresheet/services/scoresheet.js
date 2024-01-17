'use strict';

/**
 * scoresheet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scoresheet.scoresheet');
