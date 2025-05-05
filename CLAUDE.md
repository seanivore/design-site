# Development Map 
--> design.august.style/ 

[Overview](#overview) • [Design Brief](#design-brief) • [Development](#development) • [Directory Structure](#directory-structure)

## Overview 

We're building a professional web developer's portfolio. I have old websites from Webflow, Framer, and Adobe Portfolio that have been pulled from the depths of the Internet over the past few months, made local, then deployed to GitHub Pages/Jekyll. I never expected I'd be able to showcase these. They're all custom designed, covered in my own artwork, and have hand drawn curvaceous lottie animations. All very pretty. 

### Inspiration 

In deciding how to showcase these, I've had this website saved, `https://www.alex-moulinneuf.fr/about`, simplistically powerful `./assets/images/DESIGN_INSPO/`. It is just two pages, PROJECTS and ABOUT, which is where you start.

  - Beams of light move slightly as you scroll down the long page 
  - The 2D profile picture responds to your mouse using perspective 3D styling 
  - The bio is no longer than what you'd put on your instagram 
  - "🇫🇷 Based in Paris, France — 💼 Open to full-time opportunities"
  - Then a two sentence highlight, much like what reads off the top of a resume 
  - Nothing else except icons for LinkedIn, GitHub, and Email 
  - The projects section is a full 100vw x 100vh visual for each project 
  - The navigation is a row of logo-type icons at the bottom left of the screen 

It has made me realize that my old portfolio was a project in coding. It is comprehensive, but doesn't showcase the work well. This is clear now because I broke my cardinal rules. We will be bringing them back in this new website. 

  - Visuals before everything --> they're always the real story 
  - Highest bar --> pass the gut check 

### The Caveat 

When you see other web design portfolios, unless it is for an agency, there is always a common theme: They have been scrubbed and polished after the fact. They are not the real story. They are examples of the designer's ability to code and implement design, sure, but they are being used to create a new story. 

When going through my websites I'd like to do the same. Some just straight up do need some fixes, but we should look at them as themes that can be crafted into whatever type of websites will be most sought after by companies hiring designers. We might include a URL to see the full site for some of them, but in general I think I'd like to try to avoid needing to do that. The real URLs will be somewhere if someone is really digging, meaning this website can be nothing but perfect examples of work. Make up fictional companies to fill out the projects. 

## Design Brief 

### Projects Section 

We need to show movement, but cannot use bulky video files that lack any interactivity. Much like the example, each project will be a full page visual. We'll achieve this by pulling a single page from each website example. The viewer will be able to scroll up and down on the actual project page, without leaving the walled garden that is our showcase. 

The navigation will use trendy glass-effect circles with a touch of the project's aesthetic. When clicked, the project will slide in from the right as the previous one slides out to the left, just like video transition effects, and the navigation will remain fixed to the viewport. The selected project will have a larger circle with a bit of title and description text just above it. The text and the navigation disappear when the viewer scrolls up and down the project. 

In short: 

  - Each project is a full viewport width and height visual 
  - A single web project is presented as a page from a website where the vertical scroll still works 
  - When you go to the next project, it slides in from the right as the previous one slides out to the left 
  - The portfolio navigation is a series small glass circles at the bottom left of the screen 

And I created a visual example of the navigation UI here: `/Users/seanivore/Development/design-site/assets/images/NAV_INSPO.png` 

### About Section (Homepage)

Written in the middle of a 100vw x 100vh panel is my bio. The font is bold and black, and the background is off white. This is covered completely by a grid of rectangles that make up an interactive CSS animation. 

  - Sean August Horvath 
  - Graphic Designer with 14 years experience in production, social media strategy, and user experience. I'm passionate about using design to make complexity accessible and engaging.
  - [LinkedIn Icon](https://linkedin.com/in/seanivore) | [GitHub Icon](https://github.com/seanivore) | [Envelope Icon](mailto:sean@august.style) 

#### Interactive CSS Animation 

From edge to edge, top to bottom, a grid of small rectangles; about 200 of them across and 100 of them tall. Clicking anywhere on one of them and they ripple outwards in a circle, moving like "The Wave" that people do sitting in a stadium, the cards "flipping" in succession. The flip is a visual illusion. Each side of the rectangle is different, meaning when the rectangle narrows to a line, then expands back out to a full rectangle, the illusion is created. The cards "flip" 360º with them reaching 180º at wave "peak", before going back to the original position as the wave passes. 

On the normal side the rectangles are a heavily blurred transparent foggy shade, which has the inverted background filter applied to it so that the text behind is visible, though cloudy and unclear. This makes the it look like the background is black with blurry white text. The viewer can't see what it says, but they can tell there is something there. On the other side, they are closer to 100% opacity and have the trendy glass effect. When they click, by clicking enough, they could clear enough of the rectangles at once to see what it says. 

#### UI Navigation 

Not including the three icons for the LinkedIn, GitHub, and Email links, there are just three other link buttons, all of which have a 11px radius curved edges on a stroke that matches the font color. 

At the bottom right there is a CLEAR button. This acts as the accessibility option which turns "off" the interactive visual animation. When clicked, a wave expands from the button that is of a bigger magnitude than the ripple, more like a tsunami. When they flip with this button the cards do not flip back, which is what gives the CLEAR button that "off" type accessibility option. 

At the top right, there are two buttons. One for PROJECTS and the other, which is already depressed, says ABOUT. PROJECTS, when clicked, reacts just like the CLEAR button, but instead of showing what is behind the cards, the cards flip to show the PROJECTS page. 

I was playing with some math trying to figure out how the sequence of flipping cards could create the desired wave effect. Hopefully it will help define the JS for the CSS animation: `./assets/docs/CSS_WAVE_ANIMATION.md` 

## Development 

### PHASE 1: Preparing Project Files 

- Preparing project pages 
  - Review possible sites to include and
  - Identify which to include and how to include them 
  - Pull together all their assets 
  - Organize their assets into the project directory 

### PHASE 2: Building the Project Section 

### PHASE 3: Building the Homepage 

### PHASE 4: Finalize, polish, and publish 

----

## Sites 

### 1. CSS Animation Product Feature Landing Page 
`./projects/animated-product-landing.html`: This was a HTML/CSS/JS project created recently. I love the home page with it's glass buttons and CSS motion background. Let's make it into a template for a SaaS product landing page or something similar. I've already moved the essentials for the page to function in this directory. It includes: 

**Good to go for now**

- JS animation: `./assets/js/wave-animation.js`
- Page CSS: `./assets/css/animated-product-landing.css`
- Animation CSS: `./assets/css/wave-animation.css` 

### 2. Horizontally Scrolling Presentations 
This could be turned into some kind of template. We would need to adjust them so that they are vertically scrollable instead, but the design and slide panels are all there. 

**Two that are ready to be adjusted and moved into this directory**

- Charcoal: `https://presenting.august.style/ai-voice-sales-development` 
- Blue: `https://presenting.august.style/implement-ai-voice-marketing`
- Project directory: `/Users/seanivore/Development/presentation-decks`

### 3. Webflow 800+ Product Store 
There are a few different potential options here. The homepage is the most comprehensive and impressive, as a place to start. But the other pages would be great if we adjust them a bit to make them look like serious web store project pages with the cost, description, quantity, add to card, and other details. 

- Homepage: `https://print-shop-fashion.august.style`
- Vintage Prints: `https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/shop-prints-by-aesthetic/vintage.html`
- One print's product page: `https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/original-single-edition-prints/exhilarating-bauhaus-geometric-abstract-art-minimalist-mid-century-design.html`
- Print series product page: `https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/original-print-series/pattern-mash-mid-century-modern-emotive-geometric-abstract-grow-into-detailed-cities-art-history-print-shop.html`
- Project directory: `/Users/seanivore/Development/webflow-store` 

### 4. Framer Autumn Fashion Lookbook, AI Generated In-Painted Photos 
This is a long page but it is probably almost perfect as it is, once separated from the rest of the site. We could add more robust descriptions and pricing information next to each image. 

- Lookbook: `https://ai-generated-content.august.style/lookbook`
- Project directory: `/Users/seanivore/Development/framer-cms-lookbook`

### 5. Webflow Custom Art 200+ Blog/Week Automated 
This has a good, long homepage with timely information and a lot of images. We could adjust the images a bit more to make them look more like content tiles with headlines and descriptions. 

- Homepage: `https://generative-horoscopes.august.style/`
- Project directory: `/Users/seanivore/Development/astrofluenced`

### 6. Webflow Summer Fashion Lookbook, AI Generated In-Painted Photos 
This is a book that you page through. It would work best if we pull a few pages and combine them into one new longer page, sort of like the earlier lookbook but maybe this one could be an online store instead of a magazine. 

- Lookbook: `https://print-shop-fashion.august.style/fashion/lookbook/summer-2024-cover.html`
- Project directory: `/Users/seanivore/Development/webflow-store`

### 7. Webflow CMS AI Generated Weekend Horoscopes 
Will need to edit it a bit because the date filtering is gone and I kept a few weeks in the CMS when we pulled it to local, but they have really pretty animated lottie illustrations, and the blog posts are all there. 

- Blog: `https://generative-horoscopes.august.style/astrology-reading/energy-planning/weekend-perfect.html`
- Project directory: `/Users/seanivore/Development/astrofluenced`

### 8. Custom Hand Illustrated Client Site 
Small site and URL can be provided to probably good with just one page. We'll probably just want to make it look more like a feature page for signing up for the online PT service. 

- Homepage: `https://www.online-pt-trainer.august.style/`
- Project directory: `/Users/seanivore/Development/webflow-client-ckheals`

### 9. Webflow Professional Portfolio 
Hand Illustrated, 3D Motion, NFTs; But this might be another one that could be made into more of a template. 

- Homepage: `https://www.visual-producer.august.style/`
- Project directory: `/Users/seanivore/Development/webflow-2023`

### 10. Reference & Technical Documentation Website 
In the same vein as turning these into templates, making them more than just actual projects. This one and the one about SFA are both Markdown > HTML GitHub Pages Jekyll sites which illustrate the reference and technical documentation for the projects perfectly. 

- Homepage: `https://www.ai-philosophy.august.style/`
- Project directory: `/Users/seanivore/Development/non-bio-life`

- Homepage: `https://sfagent.august.style/ai-voice-marketing-case-study/index-section-site-map/` 
- Project directory: `/Users/seanivore/Development/voice-mkt-sfa`

### Additional Project Options 
Though honestly if we did all 10 above, it would be pretty solid. 

#### Two Potential Project Posts that Aren't Only Web Design
- 10+ Weekly AI Research & Produced Videos 
(A.S. Polytechnic Updates,68 episodes, aired 10/6/24) 
https://automated-podcasts.august.style/ --> embed playlist 
https://ai-generated-content.august.style/briefings --> AI generated blogs 

- AI-Generated Automated Daily Podcast 
(Astrofluenced,48 episodes, aired 2/5/24) 
https://astrofluenced-podcasts.august.style/ --> embed playlist 

#### Possible Options To Pull 
- Adobe Gallery of Prints
https://www.art-history.august.style/

- Illustration Adobe Portfolio 
https://www.illustration-animation.august.style/

#### Projects In Old Portfolio 
- And of course, anything from old portfolio that might work 
https://www.developer-technologist.august.style/
`/Users/seanivore/Development/portfolio-seanivore`

## Directory Structure 

```plaintext
/Users/seanivore/Development/design-site/
├── projects
│   └── animated-product-landing.html         <-- *First project page*
├── CLAUDE.md                                 <-- *You are here*
├── assets
│   ├── css                                   <-- *First project page's assets*
│   │   ├── animated-product-landing.css
│   │   └── wave-animation.css
│   ├── docs
│   │   ├── CAREER_INFO
│   │   │   ├── MY_PROFESSIONAL_EVOLUTION.md
│   │   │   ├── OLD_PORTFOLIO_PROJECTS.md
│   │   │   └── RESUME.md
│   │   ├── EMOTION_DRIVEN_COPYWRITING.md
│   │   ├── MATH_LOGIC_HOME_ANIM.md           <-- *Homepage CSS animation sketch*
│   │   └── DESIGN_BRIEFING.md                <-- *Project plan, logic, design explainer*
│   ├── images
│   │   ├── DESIGN_INSPO                      <-- *Inspo website*
│   │   │   ├── INSPO_DESIGN_1.png
│   │   │   ├── INSPO_DESIGN_2.png
│   │   │   ├── INSPO_DESIGN_3.png
│   │   │   ├── INSPO_DESIGN_4.png
│   │   │   └── INSPO_DESIGN_5.png
│   │   └── NAV_INSPO.png                     <-- *Sketch of navigation UI*
│   └── js
│       └── wave-animation.js                 <-- *First project page's assets*
├── CNAME
├── _config.yml
└── README.md
```
