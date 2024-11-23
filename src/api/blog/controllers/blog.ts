// /**
//  * blog controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::blog.blog');

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::blog.blog", ({ strapi }) => ({
  async find(ctx) {
    // Fetch only unique, published blog entries and populate the Image field
    const blogs = await strapi.db.query("api::blog.blog").findMany({
      where: { publishedAt: { $ne: null } }, // Filter only published entries
      populate: ["Image"], // Populate the Image field
    });

    // Log for debugging (optional)
    console.log("Filtered Blogs:", blogs);

    // Return the filtered blogs
    return blogs;
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    // Fetch the blog entry by ID with related Image field
    const blogEntry = await strapi.db.query("api::blog.blog").findOne({
      where: { id, publishedAt: { $ne: null } }, // Ensure it's published
      populate: ["Image"], // Populate related fields as needed
    });

    // If no blog entry is found, return a 404 error
    if (!blogEntry) {
      return ctx.notFound("Blog entry not found");
    }

    // Return the single blog entry
    return blogEntry;
  },
}));
