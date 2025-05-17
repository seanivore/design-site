# High-Demand Digital Asset Showcase Maintenance 

## Summary 

We've created a highly-polished collection of in-demand digital products to showcase technical and creative abilities in a more intentional way than a typical portfolio website. 

`design.august.style` takes a project, cuts out the best parts, places it in a walled garden, and then puts it on display. 

Find the original project state updates in `memory` MCP at "Portfolio Strategy: Show What They Want", "Sean's Portfolio Vision".

## Upkeep 

There are just two sections of the site. Projects and About. 

### Projects 

The `./projects` directory contains the HTML files for each project. 

Each project has a `./assets` directory that contains the CSS, JS, and images for the project. 

### Adding New Projects 

*High-demand means always changing. We'll need to update, and curate, the project entries over time. Once the section is built, protocol for updating it will be outlined here.* 

## Project Directory Structure 

```plaintext
├── CLAUDE.md                        <-- You are here
├── README.md                        <-- Project overview 
├── index.html                       <-- Interactive AI gatekeeper homepage
├── projects                         <-- Showcase projects 
│   ├── ai-admin-dashboard.html
│   ├── autumn-lookbook-part-1.html
│   ├── autumn-lookbook-part-2.html
│   ├── autumn-lookbook-part-3.html
│   ├── css-anim-saas-landing.html
│   ├── css-saas-profile-setup.html
│   ├── mindflow-app.html
│   ├── saas-css-anim-signup.html
│   ├── summer-lookbook-part-1.html
│   ├── summer-lookbook-part-2.html
│   ├── summer-lookbook-part-3.html
│   ├── summer-lookbook-part-4.html
│   ├── webflow-print-series.html
│   └── webflow-product-page.html
├── assets                           <-- Showcase project assets 
│   ├── css                          <-- New HTML Projects' CSS files 
│   │   ├── admin-dashboard.css
│   │   ├── autumn-lookbook.css
│   │   ├── css-anim-saas.css
│   │   ├── css-saas-profile-setup.css
│   │   ├── mindflow-app.css
│   │   ├── saas-css-anim-signup.css
│   │   ├── summer-lookbook.css
│   │   ├── webflow-print-series.css
│   │   ├── webflow-product-page.css
│   │   └── webflow-weekly-blogs.css
│   ├── docs
│   │   ├── css-animated-wave         <-- CSS wave animation landing page 
│   │   ├── DEV_PLAN.md               <-- Project planning document 
│   │   ├── slideshow-decks           <-- two horizontally scrolling slideshows 
│   │   ├── weekly-blog-webflow       <-- holistic alignment blog series  
│   │   └── yoga-service-webflow      <-- yoga service website 
│   ├── images
│   │   ├── autumn-lookbook
│   │   ├── DESIGN_INSPO              <-- Conceptual inspo.
│   │   ├── mindflow-profile.webp
│   │   ├── NAV_INSPO                 <-- Navigation inspiration images 
│   │   ├── summer-lookbook 
│   │   ├── webflow-print-series      <-- Webflow print series images 
│   │   ├── bauhaus-nav-icons 
│   │   ├── webflow-product-page      <-- Webflow product page images 
│   │   └── yoga-services             <-- Yoga services images 
│   └── js                            <-- New HTML Projects' JS files 
│       ├── admin-dashboard.js
│       ├── mindflow-app.js
│       ├── saas-css-anim-signup.js
│       └── saas-css-wave-anim.js
├── _config.yml                       <-- Config file for Jekyll 
└── CNAME                             <-- GitHub Pages custom domain name
```