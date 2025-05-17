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
├── ./claude/
│   ├── CLAUDE.md                            <-- You are here.
│   └── DEV_PLAN.md
├── index.html
├── projects                                 <-- Project HTML files that we have updated or recreated
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
├── assets
│   ├── css                                   <-- New HTML pages' CSS files
│   │   ├── admin-dashboard.css
│   │   ├── autumn-lookbook.css
│   │   ├── css-anim-saas.css
│   │   ├── css-saas-profile-setup.css
│   │   ├── mindflow-app.css
│   │   ├── portfolio-nav-new.css
│   │   ├── saas-css-anim-signup.css
│   │   ├── summer-lookbook.css
│   │   ├── webflow-print-series.css
│   │   └── webflow-product-page.css
│   ├── js                                     <-- New HTML pages' JS files
│   │   ├── admin-dashboard.js
│   │   ├── mindflow-app.js
│   │   ├── saas-css-anim-signup.js
│   │   └── saas-css-wave-anim.js
│   ├── docs                                   <-- Planning projects 
│   │   ├── css-animated-wave
│   │   ├── slideshow-decks
│   │   ├── 05-app-data-dashboards
│   │   ├── weekly-blog-webflow
│   │   ├── yoga-service-webflow
│   ├── images
│   │   ├── autumn-lookbook                    <-- p=part, s=section, ABC=look, v123=outfit
│   │   ├── bauhaus-nav-icons
│   │   ├── DESIGN_INSPO
│   │   ├── yoga-services 
│   │   ├── summer-lookbook                    <-- 12 sections, images depend on section
│   │   ├── webflow-print-series               <-- Mid Century Modern prints and icon
│   │   ├── webflow-product-page               <-- Primary Brutalist staged images and many related images
│   │   └── mindflow-profile.webp              <-- Profile avatar for the mindflow app
│   └── setup-scripts                          <-- utility scripts we used to putting together webflow sites
├── CNAME                                      <-- GitHub Pages URL
├── _config.yml                                <-- Jekyll config file
└── README.md
``` 