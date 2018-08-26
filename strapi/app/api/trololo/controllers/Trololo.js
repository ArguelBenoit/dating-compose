'use strict';

/**
 * Trololo.js controller
 *
 * @description: A set of functions called "actions" for managing `Trololo`.
 */

module.exports = {

  /**
   * Retrieve trololo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.trololo.search(ctx.query);
    } else {
      return strapi.services.trololo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a trololo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.trololo.fetch(ctx.params);
  },

  /**
   * Count trololo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.trololo.count(ctx.query);
  },

  /**
   * Create a/an trololo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.trololo.add(ctx.request.body);
  },

  /**
   * Update a/an trololo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.trololo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an trololo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.trololo.remove(ctx.params);
  }
};
