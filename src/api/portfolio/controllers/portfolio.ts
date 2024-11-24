// /**
//  * portfolio controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::portfolio.portfolio');


/**
 * portfolio controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::portfolio.portfolio', ({ strapi }) => ({
  // Override the default 'find' method
  async find(ctx) {
    // Use Strapi's entity service to query data with population
    const { query } = ctx;
    const portfolios = await strapi.entityService.findMany('api::portfolio.portfolio', {
      ...query,
      populate: {
        Image: true, // Populate the Image field
        Categories: true, // Populate the Categories field
      },
    });

    return portfolios;
  },
}));
