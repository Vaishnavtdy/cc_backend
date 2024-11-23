// /**
//  * testimonial controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::testimonial.testimonial');

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::testimonial.testimonial", ({ strapi }) => ({
  async find(ctx) {
    // Fetch unique, published testimonials and include the Image field
    const testimonials = await strapi.db.query("api::testimonial.testimonial").findMany({
      where: { publishedAt: { $ne: null } }, // Only fetch published testimonials
      populate: ["Image"], // Populate the Image field to include media details
    });

    // Log for debugging (optional)
    console.log("Filtered Testimonials:", testimonials);

    // Return the filtered testimonials
    return testimonials;
  },
}));
