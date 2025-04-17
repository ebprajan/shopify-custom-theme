# Shopify Custom Theme

A modern, responsive Shopify theme built with performance and user experience in mind.

## Features

- Responsive design
- Modern CSS with Flexbox and Grid
- Reusable theme blocks
- Customizable sections
- Newsletter signup integration
- Product card component
- Featured collection section
- Mobile-friendly navigation

## Theme Structure

```
├── assets/
│   ├── theme.css
│   └── theme.js
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   └── hero.liquid
├── snippets/
│   ├── icon-cart.liquid
│   ├── product-card.liquid
│   ├── featured-collection.liquid
│   └── newsletter-signup.liquid
└── templates/
    └── index.liquid
```

## Installation

1. Clone this repository
2. Upload the theme to your Shopify store using the Shopify CLI or Theme Kit
3. Customize the theme settings in the Shopify admin

## Development

To develop locally:

1. Install [Shopify CLI](https://shopify.dev/themes/tools/cli)
2. Run `shopify theme dev` to start the development server
3. Make changes to the theme files
4. Changes will be automatically synced to your development theme

## Customization

The theme can be customized through:

- Theme settings in the Shopify admin
- Custom CSS in the theme editor
- Modifying the liquid templates
- Adding new sections and blocks

## License

This project is licensed under the MIT License - see the LICENSE file for details. 