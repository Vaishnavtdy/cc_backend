// /**
//  * blog controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::blog.blog');

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::blog.blog", ({ strapi }) => ({
  async find(ctx) {
    // Use the core service to fetch all blog entries and populate the Image field
    const blogs = await strapi.db.query("api::blog.blog").findMany({
      populate: ["Image"], // Populate Image field
    });

    // Return the fetched blogs
    return blogs;
  },
  async findOne(ctx) {
    const { id } = ctx.params;

    // Custom logic: Fetch the blog entry
    const blogEntry = await strapi.db.query("api::blog.blog").findOne({
      where: { id },
      populate: ["Image"], // Populate related fields as needed
    });

    if (!blogEntry) {
      return ctx.notFound("Blog entry not found");
    }

    // Return the blog entry
    return blogEntry;
  },
}));
