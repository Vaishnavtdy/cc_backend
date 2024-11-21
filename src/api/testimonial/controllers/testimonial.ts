// /**
//  * testimonial controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::testimonial.testimonial');


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::testimonial.testimonial', ({ strapi }) => ({
  async find(ctx) {
    // Fetch all testimonials and include the Image field
    const testimonials = await strapi.db.query('api::testimonial.testimonial').findMany({
      populate: ['Image'], // Populating the Image field to include media details
    });

    // Return the fetched testimonials with image details
    return testimonials;
  },
}));
