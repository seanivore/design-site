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

# Projects 

## PROJECT I: CSS Animation Page 
### CSS Animation SaaS Landing Page `./projects/css-anim-saas-landing.html` 
### CSS Animation SaaS Signup Page `./projects/saas-css-anim-signup.html` 
### CSS Animation SaaS Profile Setup Page `./projects/saas-css-anim-profile-setup.html` 

## PROJECT II: Autumn Lookbook 
### Part 1 `./projects/autumn-lookbook-part-1.html`
### Part 2 `./projects/autumn-lookbook-part-2.html`
### Part 3 `./projects/autumn-lookbook-part-3.html`

**IMAGES**
- All of the current images on the page are using Framer CDN links 
- The local images are in the `./assets/docs/04-autumn-lookbook/images` directory 

## PROJECT III: Webflow Store 
### Print Series Page `./projects/webflow-print-series.html`
### Product Page `./projects/webflow-product-page.html`

**UPDATES** 
- Add a 'Checkout' page that has the form and a 'Pay Now' button 
- Add a 'Cart' page that has the cart items 
- Add a 'Login' page that has the login form 
- Add a 'Forgot Password' page that has the forgot password form 
- It would be nice ot have more than one series page 
- Create ~3 different product pages to show the versatility of the design 
- Use the image of either the original print or the close-up in-frame image when hovering over a project image 

## PROJECT IV: Summer Lookbook
### Part 1 `./projects/summer-lookbook-part-1.html`
### Part 2 `./projects/summer-lookbook-part-2.html`
### Part 3 `./projects/summer-lookbook-part-3.html`
### Part 4 `./projects/summer-lookbook-part-4.html`

**UPDATES**
- It would be rad if we had tooltips for the images 
- In Adobe Illustrator I can get exact X/Y coordinates for the image 
- Then it could be more of a high-end magazine style lookbook, like Abercrombie & Fitch 

## PROJECT V: Interactive AI-Led Yoga & Meditation App 
### Interactive App `./projects/mindflow-app.html`
### Wireframe Showcase `./projects/mindflow-showcase.html` 

**UPDATES**
- The app page is good to go 
- The showcase page needs to be cleaned up and better organized 
- mobile app landing pages with:
  - App store download buttons
  - Feature comparison tables
  - Interactive product tours
  - Testimonial carousels

## PROJECT VI: CSS Animation behind Admin Dashboard 

  1. CSS animation — "morphing blob shapes that react to scroll position" — morphing 3D blob behind frosted glass IS so on trend. I'd like to make sure we are sticking to my general vibe of using simple FX but in impressive ways.
  2. On the frosted glass let's create a User Admin Dashboard for tracking the novel and massive amounts of AI collected data, with the blob behind data cards and charts. Dashboards are incredibly sought-after by companies.
  3. Regarding the blob animation concern: we must be cautious, keep it subtle; thinking more "lava lamp behind frosted glass" than "aggressive 3D morphing." Simple but mesmerizing, just like the wave animation.

We have the same starting point as our earlier 'PROJECT I' CSS animation page. 

```
./assets/docs/css-animated-wave/
├── assets
│   ├── css
│   │   ├── home.css
│   │   └── wave-animation.css
│   └── js
│       └── wave-animation.js
└── index.html
```

### Data To Display in Dashboard 

I was immediately reminded of the "Activity Check-in MVP" concept when thinking about the data to display in the dashboard. It collects a lot of never-before-collected data, thanks to AI. 

You can find the MVP concept broken down, and then sorted in to types of data collection and visualization concepts, here: `./assets/docs/css-animated-wave/data-type-inspo/activity-check-in-app-data.md`

I then asked the list to be recreated with information that doesn't require understanding the MVP concept to understand why we're showing certain data in certain ways. There is a lot of information that was provided at onces, so please review this and let me know if it is't valuable or if it isn't simple enough. REMEMBER: Visuals first always, for this project. Simple is the way. 

### Dashboard Data & Visualization Concepts
To showcase the power of a modern admin dashboard, especially one designed to handle rich, nuanced data from AI-driven insights, we'll conceptualize data displays around the following themes. These examples aim to be compelling and understandable, hinting at the depth of analysis possible without requiring specific knowledge of any single underlying data source. This approach allows for a visually rich dashboard demonstrating the ability to synthesize complex, multi-source data into actionable insights.

**Key Data Visualization Categories & Potential Chart Applications:**

1. User Engagement & Behavioral Rhythms:
  - *Data Points:* Activity peaks and troughs, interaction frequency, feature adoption rates, daily/weekly routine mapping, session duration heatmaps.
  - *Potential Charts:* Line charts (trends), Heat maps (activity density), Bar charts (segment comparisons), Sankey diagrams (user flow).
2. Sentiment & Preference Dynamics:
  - *Data Points:* Real-time sentiment scores, positive/negative interaction drivers, preference clustering, taste profile evolution, product/feature affinity mapping.
  - *Potential Charts:* Gauge charts (current sentiment), Stacked bar charts (sentiment breakdown), Scatter plots (preference correlations), Radar charts (multi-faceted profiles).
3. Contextual & Environmental Intelligence:
  - *Data Points:* Venue/location atmosphere analytics (e.g., energy levels, busy scores derived from multiple inputs), popular interaction zones, real-time service demand, resource utilization patterns.
  - *Potential Charts:* Bubble charts (venue popularity/attributes), Geospatial maps with heat overlays, Area charts (demand over time), Custom iconography on floor plans.
4. Social Interaction & Influence Mapping:
  - *Data Points:* Group activity patterns, communication nexuses, influence scores within cohorts, trend adoption velocity across networks.
  - *Potential Charts:* Network graphs, Tree maps (hierarchical influence), Bar charts (influencer scores).
5. Style & Consumption Trendspotting:
  - *Data Points:* Emerging brand/product mentions, visual trend identification (from image/video content analysis), purchase intent signals, correlation between style choices and activity patterns.
  - *Potential Charts:* Word clouds (trending terms/brands), Line charts (trend adoption curves), Donut charts (category breakdowns).
6. Predictive Insights & Anomaly Detection:
  - *Data Points:* Forecasted demand/activity, churn risk indicators, unusual behavior alerts, opportunity identification scores.
  - *Potential Charts:* Line charts with forecast bands, Bullet charts (actual vs. target), Scatter plots with outlier highlighting.


----

**OTHER PROJECTS**

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
