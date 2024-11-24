import type { Schema, Struct } from '@strapi/strapi';

export interface DesignCategory extends Struct.ComponentSchema {
  collectionName: 'components_design_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'design.category': DesignCategory;
    }
  }
}
