# Showcase Site Projects
PROJECT DIRECTORY: `/Users/seanivore/Development/design-site/...`
THIS DOCUMENT: `./assets/docs/PROJECT_SITES.md`

Find project status updates in `memory` MCP at "Portfolio Strategy: Show What They Want", "Sean's Portfolio Vision" 

## Goal 
To create extremely high-value, polished, B2B/B2C web development designer's showcase. 
  - Show common website UX flows through series of instances of a project 
  - Expand my current design portfolio, while also narrowing it down to specific needs of B2B/B2C tech companies 
  - In at least one case, create high-fidelity product images for an iPhone app 
  - For app UX/UI, start with an existing app, recreate UX/UI flow, then adjust to fit needs of imaginary project 

--> Detailed scope, design brief, development overview, and project directory organization: `./CLAUDE.md` 

### Projects Showcase:
  - Modern form design patterns
  - Micro-interactions and loading states
  - Responsive layouts
  - Accessibility considerations
  - Clean, conversion-focused UX

### What I Love About This Approach:
  - Shows progression - Hiring managers can see you understand multi-step user journeys
  - Demonstrates versatility - Two different animation styles, same high quality
  - Practical value - These are exactly the types of pages companies need
  - Easy to customize - The code structure allows for quick brand color swaps

## Project Directory Organization 
1. Assets from original projects or projects in planning state are organized into `./assets/docs` directories 
2. Determined what the project will be for the showcase, then choose a naming convention for all assets  
3. Finalized HTML files for the project should be placed in the `./projects` directory 
4. Their assets like CSS, JS, images, etc. should be placed in appropriate subdirectories in the `./assets` directory 
5. Once all projects are adjusted, start the `./index.html` file and delete the temporary docs project folders 

----

## Project Concept 

The goal is to create a super-polished collection of high-demand digital assets that showcase web development, design, and user experience capabilities. This professional web developer's portfolio features one-page versions of websites, carefully curated and adjusted to fulfill job marketing needs. Within the portfolio's horizontal navigation, pages scroll vertically in a "walled garden" environment where links and inputs are simulated for display purposes. The collection emphasizes commonly sought-after elements like SaaS product landing pages, high-fidelity iOS apps, and administrative dashboards. Each project entry presents either a complete UX flow or selected key pages from the digital project.

### Design Theme 

Lean into "simple" to capitalize on making it impressive. Include interactive elements that wow because of smart design, not overly technical development demands. 

Show what they want to see. Think only visually. 

  - Visuals before everything --> they're always the real story 
  - Highest bar --> pass the gut check 

### Logic 

When you come across web design portfolios online, unless it is for an agency, there is always a common theme: They have been scrubbed and polished after the fact. They are not the real story. They are examples of the designer's ability to code and implement design, sure, but they are being used to create a new story. 

When going through my websites I'd like to do the same. Some just straight up do need some fixes, but we should look at them as themes that can be crafted into whatever type of websites will be most sought after by companies hiring designers. We might include a URL to see the full site for some of them, but in general I think I'd like to try to avoid needing to do that. The real URLs will be somewhere if someone is really digging, meaning this website can be nothing but perfect examples of work. Make up fictional companies to fill out the projects. 

## Design Brief 

### Projects Section 

This has been constructed but I was having trouble communicating the Project Navigation logic through chat and needed to write it all out as I did below. Aside from some size changes, the aesthetics are pretty solid. 

#### Displayed Project Information 

Nothing but the title and a subtitle. We are sticking to our ALL VISUAL roots. No description should be necessary otherwise we should rethink the project's inclusion. The names should cut straight to the high-value digital asset; call it out. 

`/Users/seanivore/Development/design-site/projects.html`
`/Users/seanivore/Development/design-site/assets/js/portfolio-nav.js`
`/Users/seanivore/Development/design-site/assets/css/portfolio-nav.css`

Every project page has this in the head: 

```html
<link rel="stylesheet" href="../assets/css/portfolio-nav.css">
``` 

And this at the bottom of the body. 

```html
<script src="../assets/js/portfolio-nav.js"></script>
```

#### Ready Project Pages 

1. SaaS Product Sales 
   CSS Animation & Micro-Interactions with a Modular, Versatile Design 
  - Landing Page `./projects/css-anim-saas-landing.html` 
  - Signup Page `./projects/saas-css-anim-signup.html` 
  - Profile Setup Page `./projects/saas-css-anim-profile-setup.html` 

2. AI Generated Fashion Magazine
   Luxury Looks Pull From Historic Art Movements & Are Designed for Relatable Archetypes
  - Part 1 `./projects/autumn-lookbook-part-1.html`
  - Part 2 `./projects/autumn-lookbook-part-2.html`
  - Part 3 `./projects/autumn-lookbook-part-3.html`

3. Webflow E-Commerce 500+ Product Store 
   Single-Edition Prints Showcasing 30+ Art Movements with AI Staged Photographs 
  - Mid-Century Modern Print Series Page `./projects/webflow-print-series.html`
  - Bauhaus Print Product Page `./projects/webflow-product-page.html`

4. Fashion Guide With Solution Oriented Styles 
   Google Lens API Integration Is Steps Away from Implementation
  - Section 1 `./projects/summer-lookbook-part-1.html`
  - Section 2 `./projects/summer-lookbook-part-2.html`
  - Section 3 `./projects/summer-lookbook-part-3.html`
  - Section 4 `./projects/summer-lookbook-part-4.html`

5. AI-Guided Yoga & Meditation App 
   Interaction Is Handled By the AI & No Typing Required 
  - Interactive App `./projects/mindflow-app.html`

6. AI-Data Visualization Dashboard 
   CSS Animated Charts For Rarely Captured Data Before AI-Led Teen Planning App 
  - `./projects/ai-admin-dashboard.html`

#### Project Section Navigation 

PROJECT NAVIGATION BAR 
  - Contains icons for each project 
  - Extends 100% width 
  - Fixed in viewport even when projects are changed via the icons 
  - There is a PROJECT NAVIGATION BAR "ON" and "OFF" state for UX purposes

PROJECT ICONS 
  - 6 round, glass-effect circles 
  - Each circle represents a project 

PROJECT NAVIGATION BAR "ON" STATE
  - Black 70% opacity layer over first project; entire viewport
  - Project icons are about 6rem x 6rem 
  - They are vertically in the middle of the lower half of the view portfolio; prominent 
  - They are centered horizontally with a few REM spacing between them; enough to still have decent padding on the sides 
  - They all have a GREEN stroke boarder 
  - When you hover over an icon, it grows a tiny bit and brightens and the name of the project appears above it 
  - The project name is prominent, bold, taking up the 2nd fourth of the viewport vertically with text almost as large as that space 

PAGE LOAD 
  - The Project Navigation Bar is "ON" 

SELECT A PROJECT 
  - When an icon is clicked that project is selected
  - The user can choose any of the six projects 
  - The Project Navigation Bar is "OFF" 

PROJECT NAVIGATION BAR "OFF" STATE 
  - All other 5 icons disappear completely 
  - The black 70% opacity layer is gone so the user can now see the project they have selected 
  - The selected icon is now 20rem x 20rem; very large 
  - The selected icon now has a red stroke boarder
  - The selected icon is positioned so that the left 1/3 and bottom 1/3 of the circle is bleed off screen helping manage the size 
  - On top of the selected icon are two small 3rem x 3rem round circles 
  - These are project page navigation circles 
  - These circles have arrow icons left and right 
  - Obviously these are only present if the project has more than one page 
  - The project page navigation circles have a GREEN stroke boarder 
  - The altering of green and red indicates to the user which element to use at that time 
  - the project page navigation circles are mostly on top of the large selected icon, with maybe half of the right circle off the right edge of the selected icon 
  - Above the large selected icon are small circular dots that represent the pages of the project, they are 0.5rem x 0.5rem 
  - Since the project was just selected the first dot is bright white, while the others are faded and semi transparent still 
  - In small 1rem font, the name of the project is displayed above the project page indicator dots 
  - Since the large selected icon is now in red stroke, it is intuitively the option to click to END the viewing of the project and END the OFF state of the Project Navigation Bar; the user can click anywhere on the large selected icon to end the project 

EXITING A PROJECT 
  - The use has clicked the large selected icon with the red stroke this is partially off screen 
  - Red is to END the project view which means 
  - The project navigation bar is now "ON" 
  - The icons, page shade, and everything returns to the original state from when the page loaded 

WHY THIS IS LOGICAL AND ERROR PROOF 
  - The user cannot change projects while in a project 
  - While in the project the user can scroll up and down and click the buttons of the project or use the navigation circles to go to the next or previous page 
  - The red and green are intuitive and make it easy to understand which element to use 
  - The change is size of icons is dramatic indicating what is happening 

And I created a visual example of the navigation UI here: `/Users/seanivore/Development/design-site/assets/images/NAV_INSPO.png` 

### About Section (Homepage)

Written in the middle of a 100vw x 100vh panel is my bio. The font is bold and black, and the background is off white. This is covered completely by a grid of rectangles that make up an interactive CSS animation. 

  - Sean August Horvath 
  - Graphic Designer with 14 years experience in production, social media strategy, and user experience. I'm passionate about using design to make complexity accessible and engaging.
  - Icons: [LinkedIn](https://linkedin.com/in/seanivore) | [GitHub](https://github.com/seanivore) | [Envelope](mailto:sean@august.style) 

#### UI Navigation 

This is fine for now. I just need the website functional to use in applications 

----

## Development 
Websites for the Projects Section --> `./assets/docs/PROJECT_SITES.md`

### PHASE 1 PROJECT PAGE ENTRIES COMPLETE  
### PHASE 2: Building the Project Section 

- Build the project section navigation 
- Piece together collected project pages 
- Add details to project pages 

### PHASE 3: Building the Homepage 

- Review the CSS animation idea for the homepage 
- Build the homepage 

### PHASE 4: Finalize, polish, and publish 

----

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

----

# Projects Ready For Showcase



----

**UPDATES FOR LATER**
- Adjust header font 
- Make more robust
- Change User page to live tracking
- Highlight data gathering points 
- Adjust some metrics to make more intuitive sense 

----
**FYC for Lookbook TO MAYBE DO LATER**
- If an image is used, say of just a model's shoes, to get a page token from SerpAPI: `https://serpapi.com/google-lens-api`
- Then that token can be used to get the image in Google Lens "Visually Similar" image search: `https://serpapi.com/google-lens-visual-matches-api`
- This would automate clicking part of the image and finding similar results in that style but for all different price points and shipping locations 
- It would be rad if we had tooltips for the images 
- In Adobe Illustrator I can get exact X/Y coordinates for the image 
- Then it could be more of a high-end magazine style lookbook, like Abercrombie & Fitch 
----

**OTHER PROJECTS TO MAYBE ADD LATER**

## PROJECT: Client Online Service Booking for Yoga Instructor 
Custom Hand Illustrated Client Site; Small site and URL can be provided to probably good with just one page. We'll probably just want to make it look more like a feature page for signing up for the online PT service. 

**Yoga Services**
- 07-yoga-services.html
  - `./assets/docs/07-yoga-services/07-yoga-services.html`
  - [Live webpage](https://online-pt-trainer.august.style/)
  - `/Users/seanivore/Development/webflow-client-ckheals/index.html`

## PROJECT: Webflow Blog 
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


**OTHER PROJECTS**

## PROJECT 
The current horizontal scrolling page won't work with our UX/UI when the page(s) are placed in the projects section of the portfolio. Scrolling up and down is okay, and clicking if it goes to another portfolio display page is okay, otherwise we don't want them leaving our walled garden, and so I'm not sure how else they could scroll. Unless it was a walk through intro of how to use an app with actual next page buttons and some pages could have text input fields to choose a name or enter other information, and then also the note for turning on notifications and geo-location. That might work well with this. 
  - Charcoal, perfect for design aesthetic: `https://presenting.august.style/ai-voice-sales-development` 
  - Project directory: `./assets/docs/02-scrolling-presentations`
  - Blue but a little too playful: `https://presenting.august.style/implement-ai-voice-marketing`

## PROJECT POTENTIAL: CSS Background Animation ALT. VERSION OF PROJECT I could be an admin data dashboard. 
The project above seems to perfectly clean, simple, easy to adjust not to make it into something else that hiring manager would be impressed by. I think we'd just need to make some key alterations so it isn't obviously just a simple revamp of the original. Some thoughts there: 
  - Adjust the CSS animation for something equally as mesmerizing and engaging, but different enough. Perhaps like growing and shrinking dots of different sizes. 
  - When looking into how to wireframe the above, we should also look at other commonly sought after wire frames 
  - This way we don't need to do another 'Project Feature Landing Page' but still create something a company looking for web design would find value in. 


API Documentation Portal - Interactive docs, code samples, authentication flows

B2B Marketing Landing - Lead generation forms, white paper downloads, webinar signups

## Additional Project Options 
Though honestly if we did all 10 above, it would be pretty solid. 

## Webflow Portfolio 
Webflow Professional Portfolio; Hand Illustrated, 3D Motion, NFTs; But this might be another one that could be made into more of a template. 

**Ready to be adjusted; could be pulled from old directory but might be easier to pull directly from the live site**

- Homepage: `https://www.visual-producer.august.style/`
- Project directory: `/Users/seanivore/Development/webflow-2023`

- Project: `./assets/docs/09-webflow-portfolio`

## Technical Documentation 
Reference & Technical Documentation Website; In the same vein as turning these into templates, making them more than just actual projects. This one and the one about SFA are both Markdown > HTML GitHub Pages Jekyll sites which illustrate the reference and technical documentation for the projects perfectly. 

**Ready to be adjusted; could be pulled from old directory but might be easier to pull directly from the live site**

- Homepage: `https://www.ai-philosophy.august.style/`
- Project directory: `/Users/seanivore/Development/non-bio-life`

- Homepage: `https://sfagent.august.style/ai-voice-marketing-case-study/index-section-site-map/` 
- Project directory: `/Users/seanivore/Development/voice-mkt-sfa`

- Project: `./assets/docs/10-technical-documentation`


### Two Potential Project Posts that Aren't Only Web Design
- 10+ Weekly AI Research & Produced Videos 
(A.S. Polytechnic Updates,68 episodes, aired 10/6/24) 
https://automated-podcasts.august.style/ --> embed playlist 
https://ai-generated-content.august.style/briefings --> AI generated blogs 

- AI-Generated Automated Daily Podcast 
(Astrofluenced,48 episodes, aired 2/5/24) 
https://astrofluenced-podcasts.august.style/ --> embed playlist 

### Possible Options To Pull 
- Adobe Gallery of Prints
https://www.art-history.august.style/

- Illustration Adobe Portfolio 
https://www.illustration-animation.august.style/

### Projects In Old Portfolio 
- And of course, anything from old portfolio that might work 
https://www.developer-technologist.august.style/
`/Users/seanivore/Development/portfolio-seanivore`


## Weekend Horoscopes 
Webflow CMS AI Generated Weekend Horoscopes; Will need to edit it a bit because the date filtering is gone and I kept a few weeks in the CMS when we pulled it to local, but they have really pretty animated lottie illustrations, and the blog posts are all there. 

**Ready to be adjusted; could be pulled from old directory but might be easier to pull directly from the live site**

- Blog: `https://generative-horoscopes.august.style/astrology-reading/energy-planning/weekend-perfect.html`
- Project directory: `/Users/seanivore/Development/astrofluenced`
- Project: `./assets/docs/07-weekend-horoscopes`

