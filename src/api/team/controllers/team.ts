// /**
//  * team controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::team.team');

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::team.team", ({ strapi }) => ({
  async find(ctx) {
    // Fetch unique, published team members and include the image field
    const teams = await strapi.db.query("api::team.team").findMany({
      where: { publishedAt: { $ne: null } }, // Fetch only published team members
      populate: ["Image"], // Populate the 'image' field to include media details
    });

    // Log for debugging (optional)
    console.log("Filtered Teams:", teams);

    // Return the filtered team members
    return teams;
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    // Fetch a single team member by ID and populate the image field
    const team = await strapi.db.query("api::team.team").findOne({
      where: { id: parseInt(id, 10), publishedAt: { $ne: null } },
      populate: ["Image"], // Populate the 'image' field
    });

    // Return the team member data
    return team;
  },
}));