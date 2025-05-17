# Showcase Site Projects
PROJECT DIRECTORY: `/Users/seanivore/Development/design-site/...`
THIS DOCUMENT: `./assets/docs/PROJECT_SITES.md`

--> Review project concept and logic via `memory` MCP tool entity "Portfolio Strategy: Show What They Want" and "Sean's Portfolio Vision" 

## Development 
### PHASE 1 Project Page Entries ✅
### PHASE 2: Build Project Section ✅
### PHASE 3: Build Homepage ✅
**PUBLISH EARLY VERSION**
### PHASE 4: Navigation Update ✅
**PUBLISHED SO I CAN USE IT**
### PHASE 5: Interactive Homepage 
### PHASE 6: "Even More Updates" 

## Current Updates 

1. Our interactive app project, `./projects/mindflow-app.html`, seems to be blocking the functionality of the navigation bar. Find the navigation bar located in the HTML at the bottom of the file. I think it has something to do with a JS conflict, though there is no JS conflict issue with our technically similar admin dashboard project. The app's JS can be seen in `./assets/js/mindflow-app.js`. It appears, but nothing on the bar can be clicked. 
2. Update the navigation bar to be responsive on mobile by making it double tall, placing the project info on the bottom, making the project info text smaller, etc. Currently it goes off the screen before the last project's button which of course means the project details are not visible at all. 

### Ready Project Pages 

1. SaaS Product Sales 
   CSS Animation, Micro-Interactions, & Modular Build 
  - Landing Page `./projects/css-anim-saas-landing.html` 
  - Signup Page `./projects/saas-css-anim-signup.html` 
  - Profile Setup Page `./projects/saas-css-anim-profile-setup.html` 

2. AI Generated Fashion Magazine
   Art History Inspired Luxury Designed for Relatable Archetypes
  - Part 1 `./projects/autumn-lookbook-part-1.html`
  - Part 2 `./projects/autumn-lookbook-part-2.html`
  - Part 3 `./projects/autumn-lookbook-part-3.html`

3. Webflow E-Commerce 500+ Product Store 
   AI-Staged Photography of Historically Accurate Single-Edition Prints
  - Mid-Century Modern Print Series Page `./projects/webflow-print-series.html`
  - Bauhaus Print Product Page `./projects/webflow-product-page.html`

4. Solution-Oriented Fashion
   Google Lens API Integration to Buy The Look
  - Section 1 `./projects/summer-lookbook-part-1.html`
  - Section 2 `./projects/summer-lookbook-part-2.html`
  - Section 3 `./projects/summer-lookbook-part-3.html`
  - Section 4 `./projects/summer-lookbook-part-4.html`

5. Yoga & Meditation App
   AI-Managed User Interface to Journal Without Typing 
  - Interactive App `./projects/mindflow-app.html`

6. Dashboard For When AI Is The App's UI
   Visualizing Insights From Massive Data Sets With Animated Charts
  - Admin Dashboard `./projects/ai-admin-dashboard.html`

### Interactive Homepage 

A simple chat UI that calls Claude, presents them with a role to play as a riddle-master, or paranoid gatekeeper, or one of many other personas that create a brief moment of `gut check` fun, hopefully laughter, before admitting the viewer into the project section. 

## Directory Structure 

```plaintext 
├── CLAUDE.md                                <-- You are here
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
│   │   ├── saas-css-anim-signup.css
│   │   ├── summer-lookbook.css
│   │   ├── webflow-print-series.css
│   │   ├── webflow-product-page.css
│   │   └── webflow-weekly-blogs.css
│   ├── js                                     <-- New HTML pages' JS files
│   │   ├── admin-dashboard.js
│   │   ├── mindflow-app.js
│   │   ├── saas-css-anim-signup.js
│   │   └── saas-css-wave-anim.js
│   ├── docs                                   <-- Planning projects 
│   │   ├── 02-framer-autumn-lookbook
│   │   ├── 04-weblfow-summer-lookbook
│   │   ├── 05-app-data-dashboards
│   │   ├── 06-webflow-service-yoga
│   │   ├── 07-webflow-weekly-blogs
│   │   ├── 08-css-wave
│   │   ├── CSS_RIPPLE_ANIMATION.md            <-- CSS animation idea for homepage
│   │   └── PROJECT_SITES.md                   <-- Content for the projects section
│   ├── images
│   │   ├── autumn-lookbook                    <-- j=portrait, jwide=landscape
│   │   ├── mindflow-app-avatar-profile.webp   <-- avatar for the mindflow app profile page 
│   │   ├── summer-lookbook                    <-- 12 sections, images depend on section
│   │   ├── webflow-print-series               <-- Mid Century Modern prints and icon
│   │   └── webflow-product-page               <-- Primary Brutalist staged images and many related images
│   └── setup-scripts                          <-- utility scripts we used to putting together webflow sites
├── CNAME                                      <-- GitHub Pages URL
├── _config.yml                                <-- Jekyll config file
└── README.md
```

Websites for the Projects Section --> `./assets/docs/PROJECT_SITES.md` 

## Even More Updates 

### Analytics Dashboard 

- Adjust header font 
- Make more robust
- Change User page to live tracking
- Highlight data gathering points 
- Adjust some metrics to make more intuitive sense 

### Lookbook Handy Search Trick
- If an image is used, say of just a model's shoes, to get a page token from SerpAPI: `https://serpapi.com/google-lens-api`
- Then that token can be used to get the image in Google Lens "Visually Similar" image search: `https://serpapi.com/google-lens-visual-matches-api`
- This would automate clicking part of the image and finding similar results in that style but for all different price points and shipping locations 
- It would be rad if we had tooltips for the images 
- In Adobe Illustrator I can get exact X/Y coordinates for the image 
- Then it could be more of a high-end magazine style lookbook, like Abercrombie & Fitch 

### Other Projects to Include 

#### Client Online Service Booking for Yoga Instructor 
Custom Hand Illustrated Client Site; Small site and URL can be provided to probably good with just one page. We'll probably just want to make it look more like a feature page for signing up for the online PT service. 

**Yoga Services**
- 07-yoga-services.html
  - `./assets/docs/07-yoga-services/07-yoga-services.html`
  - [Live webpage](https://online-pt-trainer.august.style/)
  - `/Users/seanivore/Development/webflow-client-ckheals/index.html`

#### Webflow Blog 
Webflow Custom Art 200+ Blog/Week Automated. The weekly series "Holistic Alignment" was a three-blog series for finding personal growth internally, externally, and then finding the intersection of the two. The pages have pretty animated lottie animations and I illustrated all the background jungle-core art deco. The bottom "Read More" section is messy but we can skip that and just keep the rest. 

  **Internal Catalysts**
  - 05-blog-1-internal-catalysts.html
    - `./assets/docs/05-weekly-holistic-alignment/1-internal-catalysts/05-blog-1-internal-catalysts.html`
    - [Live webpage](https://generative-horoscopes.august.style/astrology-reading/improve-life/growth-through-introspection.html)
    - `/Users/seanivore/Development/astrofluenced/astrology-reading/improve-life/growth-through-introspection.html`

  **Interpersonal Catalysts**
  - 05-blog-2-interpersonal-catalysts.html
    - `./assets/docs/05-weekly-holistic-alignment/2-interpersonal-catalysts/05-blog-2-interpersonal-catalysts.html`
    - [Live webpage](https://generative-horoscopes.august.style/astrology-reading/improve-life/change-your-outlook.html)
    - `/Users/seanivore/Development/astrofluenced/astrology-reading/improve-life/change-your-outlook.html`

  **Holistic Alignment**
  - 05-blog-3-personal-development.html
    - `./assets/docs/05-weekly-holistic-alignment/3-personal-development/05-blog-3-personal-development.html`
    - [Live webpage](https://generative-horoscopes.august.style/astrology-reading/improve-life/internal-external-personal-growth.html)
    - `/Users/seanivore/Development/astrofluenced/astrology-reading/improve-life/internal-external-personal-growth.html`

#### Scrolling Presentations 

The current horizontal scrolling page won't work with our UX/UI when the page(s) are placed in the projects section of the portfolio. Scrolling up and down is okay, and clicking if it goes to another portfolio display page is okay, otherwise we don't want them leaving our walled garden, and so I'm not sure how else they could scroll. Unless it was a walk through intro of how to use an app with actual next page buttons and some pages could have text input fields to choose a name or enter other information, and then also the note for turning on notifications and geo-location. That might work well with this. 
  - Charcoal, perfect for design aesthetic: `https://presenting.august.style/ai-voice-sales-development` 
  - Project directory: `./assets/docs/02-scrolling-presentations`
  - Blue but a little too playful: `https://presenting.august.style/implement-ai-voice-marketing`

#### Technical Documentation 
Reference & Technical Documentation Website; In the same vein as turning these into templates, making them more than just actual projects. This one and the one about SFA are both Markdown > HTML GitHub Pages Jekyll sites which illustrate the reference and technical documentation for the projects perfectly. 

**Ready to be adjusted; could be pulled from old directory but might be easier to pull directly from the live site**

- Homepage: `https://www.ai-philosophy.august.style/`
- Project directory: `/Users/seanivore/Development/non-bio-life`

- Homepage: `https://sfagent.august.style/ai-voice-marketing-case-study/index-section-site-map/` 
- Project directory: `/Users/seanivore/Development/voice-mkt-sfa`

- Project: `./assets/docs/10-technical-documentation` 