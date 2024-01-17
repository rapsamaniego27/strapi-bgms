'use strict';

/**
 * boardgame service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boardgame.boardgame');
