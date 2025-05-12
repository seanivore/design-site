# Development Map 
--> design.august.style/ 
Websites for the Projects Section --> `./assets/docs/PROJECT_SITES.md`

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
  - Icons: [LinkedIn](https://linkedin.com/in/seanivore) | [GitHub](https://github.com/seanivore) | [Envelope](mailto:sean@august.style) 

#### Interactive CSS Ripple Animation 

From edge to edge, top to bottom, a grid of small rectangles; about 200 of them across and 100 of them tall. Clicking anywhere on one of them and they ripple outwards in a circle, moving like "The Wave" that people do sitting in a stadium, the cards "flipping" in succession. The flip is a visual illusion. Each side of the rectangle is different, meaning when the rectangle narrows to a line, then expands back out to a full rectangle, the illusion is created. The cards "flip" 360º with them reaching 180º at wave "peak", before going back to the original position as the wave passes. 

On the normal side the rectangles are a heavily blurred transparent foggy shade, which has the inverted background filter applied to it so that the text behind is visible, though cloudy and unclear. This makes the it look like the background is black with blurry white text. The viewer can't see what it says, but they can tell there is something there. On the other side, they are closer to 100% opacity and have the trendy glass effect. When they click, by clicking enough, they could clear enough of the rectangles at once to see what it says. 

#### UI Navigation 

Not including the three icons for the LinkedIn, GitHub, and Email links, there are just three other link buttons, all of which have a 11px radius curved edges on a stroke that matches the font color. 

At the bottom right there is a CLEAR button. This acts as the accessibility option which turns "off" the interactive visual animation. When clicked, a wave expands from the button that is of a bigger magnitude than the ripple, more like a tsunami. When they flip with this button the cards do not flip back, which is what gives the CLEAR button that "off" type accessibility option. 

At the top right, there are two buttons. One for PROJECTS and the other, which is already depressed, says ABOUT. PROJECTS, when clicked, reacts just like the CLEAR button, but instead of showing what is behind the cards, the cards flip to show the PROJECTS page. 

I was playing with some math trying to figure out how the sequence of flipping cards could create the desired wave effect. Hopefully it will help define the JS for the CSS animation: `./assets/docs/CSS_RIPPLE_ANIMATION.md` 

## Development 
Websites for the Projects Section --> `./assets/docs/PROJECT_SITES.md`

### PHASE 1: Preparing Project Files 

- Preparing project pages 
  - Review possible sites to include
  - Identify which to include and how to include them 
  - Pull together all their assets 
  - Organize their assets into the project directory 

- Adjust project pages to better fit portfolio entry concept  

### PHASE 2: Building the Project Section 

- Build the project section navigation 
- Piece together collected project pages 
- Add details to project pages 

### PHASE 3: Building the Homepage 

- Review the CSS animation idea for the homepage 
- Build the homepage 

### PHASE 4: Finalize, polish, and publish 

----

## Directory Structure *NEEDS TO BE UPDATED* 

```plaintext
/Users/seanivore/Development/design-site/
├── projects
│   └── animated-product-landing.html     <-- *First project page*
├── CLAUDE.md                             <-- *You are here*
├── assets
│   ├── css                             
│   │   ├── animated-product-landing.css  <-- *First project page's assets*
│   │   └── wave-animation.css            <-- *First project page's assets*
│   ├── docs
│   │   ├── 02-scrolling-presentations    <-- *Temp. folder for project page prep.*
│   │   ├── 03-webflow-store              <-- *Temp. folder for project page prep.*
│   │   ├── 04-autumn-lookbook            <-- *Temp. folder for project page prep.*
│   │   ├── 05-webflow-blog               <-- *Temp. folder for project page prep.*
│   │   ├── 06-summer-lookbook            <-- *Temp. folder for project page prep.*
│   │   ├── 07-yoga-services              <-- *Temp. folder for project page prep.*
│   │   ├── CSS_RIPPLE_ANIMATION.md       <-- *CSS animation idea for homepage*
│   │   └── PROJECT_SITES.md              <-- *Content for the projects section*
│   ├── images
│   │   ├── DESIGN_INSPO                  <-- *Inspo website*
│   │   └── NAV_INSPO.png                 <-- *Sketch of navigation UI*
│   └── js
│       └── wave-animation.js             <-- *First project page's assets*
├── CNAME
├── _config.yml
└── README.md
```

```plaintext 
├── projects
│   ├── animated-product-landing.html
│   ├── autumn-lookbook-part-1.html
│   ├── autumn-lookbook-part-2.html
│   ├── autumn-lookbook-part-3.html
│   ├── summer-lookbook-part-1.html
│   ├── summer-lookbook-part-2.html
│   ├── summer-lookbook-part-3.html
│   ├── summer-lookbook-part-4.html
│   ├── webflow-print-series.html
│   └── webflow-product-page.html
├── _config.yml
├── assets
│   ├── css
│   │   ├── animated-product-landing.css
│   │   ├── autumn-lookbook.css
│   │   ├── main.css
│   │   ├── summer-lookbook.css
│   │   ├── wave-animation.css
│   │   ├── webflow-print-series.css
│   │   └── webflow-product-page.css
│   ├── docs
│   │   ├── 02-scrolling-presentations
│   │   │   ├── ai-voice-sales-development.html
│   │   │   ├── assets
│   │   │   │   ├── css
│   │   │   │   │   ├── alt-slides.css
│   │   │   │   │   ├── main.css
│   │   │   │   │   ├── pixel-animation.css
│   │   │   │   │   └── wave-animation.css
│   │   │   │   ├── favicon
│   │   │   │   │   ├── apple-touch-icon.png
│   │   │   │   │   ├── favicon-96x96.png
│   │   │   │   │   ├── favicon.ico
│   │   │   │   │   ├── favicon.svg
│   │   │   │   │   ├── site.webmanifest
│   │   │   │   │   ├── web-app-manifest-192x192.png
│   │   │   │   │   └── web-app-manifest-512x512.png
│   │   │   │   ├── images
│   │   │   │   │   ├── brand-text-art-1.svg
│   │   │   │   │   ├── brand-text-art-2.svg
│   │   │   │   │   └── thumbnail-presentation-1.webp
│   │   │   │   └── js
│   │   │   │       ├── pixel-animation.js
│   │   │   │       ├── slideshow.js
│   │   │   │       └── wave-animation.js
│   │   │   └── implement-ai-voice-marketing.html
│   │   ├── 03-webflow-store
│   │   │   ├── aesthetic
│   │   │   │   ├── 03-webflow-store-aesthetic.html
│   │   │   │   └── 03-webflow-store-aesthetic.jpeg
│   │   │   ├── print-series
│   │   │   │   ├── 03-webflow-store-print-series.html
│   │   │   │   ├── 03-webflow-store-print-series.jpeg
│   │   │   │   └── original-styles.css
│   │   │   └── product-page
│   │   │       ├── 03-webflow-store-product-page.html
│   │   │       └── 03-webflow-store-product-page.jpeg
│   │   ├── 04-autumn-lookbook
│   │   │   ├── 04-autumn-lookbook.html
│   │   │   ├── 04-autumn-lookbook.jpeg
│   │   │   ├── LOOKBOOK_FLOW.md
│   │   │   └── Lookbook.csv
│   │   ├── 05-weekly-holistic-alignment
│   │   │   ├── 1-internal-catalysts
│   │   │   │   ├── 05-blog-1-internal-catalysts.html
│   │   │   │   └── 05-blog-1-internal-catalysts.jpeg
│   │   │   ├── 2-interpersonal-catalysts
│   │   │   │   ├── 05-blog-2-interpersonal-catalysts.html
│   │   │   │   └── 05-blog-2-interpersonal-catalysts.jpeg
│   │   │   └── 3-personal-development
│   │   │       ├── 05-blog-3-personal-development.html
│   │   │       └── 05-blog-3-personal-development.jpeg
│   │   ├── 06-summer-lookbook
│   │   │   ├── IMAGES_MISSING_OR_TO_REPLACE.md
│   │   │   ├── SUMMER_LOOKBOOK_PART_1.md
│   │   │   ├── SUMMER_LOOKBOOK_PART_2.md
│   │   │   ├── SUMMER_LOOKBOOK_PART_3.md
│   │   │   └── SUMMER_LOOKBOOK_PART_4.md
│   │   ├── 07-yoga-services
│   │   │   ├── 07-yoga-services.html
│   │   │   └── 07-yoga-services.jpeg
│   │   ├── CSS_RIPPLE_ANIMATION.md
│   │   └── PROJECT_SITES.md
│   ├── images
│   │   ├── autumn-lookbook
│   │   │   ├── j-section-1A-v1.webp
│   │   │   ├── j-section-1A-v2.webp
│   │   │   ├── j-section-1A-v3.webp
│   │   │   ├── j-section-1A-v4.webp
│   │   │   ├── j-section-1B-v1.webp
│   │   │   ├── j-section-1B-v2.webp
│   │   │   ├── j-section-1B-v3.webp
│   │   │   ├── j-section-1C-v1.webp
│   │   │   ├── j-section-1C-v2.webp
│   │   │   ├── j-section-1C-v3.webp
│   │   │   ├── j-section-2A-v1.webp
│   │   │   ├── j-section-2A-v2.webp
│   │   │   ├── j-section-2A-v3.webp
│   │   │   ├── j-section-2B-v1.webp
│   │   │   ├── j-section-2B-v2.webp
│   │   │   ├── j-section-2B-v3.webp
│   │   │   ├── j-section-2B-v4.webp
│   │   │   ├── j-section-2C-v1.webp
│   │   │   ├── j-section-2C-v2.webp
│   │   │   ├── j-section-2C-v3.webp
│   │   │   ├── j-section-3A-v1.webp
│   │   │   ├── j-section-3A-v2.webp
│   │   │   ├── j-section-3A-v3.webp
│   │   │   ├── j-section-3B-v1.webp
│   │   │   ├── j-section-3B-v2.webp
│   │   │   ├── j-section-3B-v3.webp
│   │   │   ├── j-section-3C-v1.webp
│   │   │   ├── j-section-3C-v2.webp
│   │   │   ├── j-section-3C-v3.webp
│   │   │   ├── j-section-4A-v1.webp
│   │   │   ├── j-section-4A-v2.webp
│   │   │   ├── j-section-4A-v3.webp
│   │   │   ├── j-section-4B-v1.webp
│   │   │   ├── j-section-4B-v2.webp
│   │   │   ├── j-section-4B-v3.webp
│   │   │   ├── j-section-4C-v1.webp
│   │   │   ├── j-section-4C-v2.webp
│   │   │   ├── j-section-4C-v3.webp
│   │   │   ├── j-section-5A-v1.webp
│   │   │   ├── j-section-5A-v2.webp
│   │   │   ├── j-section-5A-v3.webp
│   │   │   ├── j-section-5B-v1.webp
│   │   │   ├── j-section-5B-v2.webp
│   │   │   ├── j-section-5B-v3.webp
│   │   │   ├── j-section-5C-v1.webp
│   │   │   ├── j-section-5C-v2.webp
│   │   │   ├── j-section-5C-v3.webp
│   │   │   ├── j-section-6A-v1.webp
│   │   │   ├── j-section-6A-v2.webp
│   │   │   ├── j-section-6A-v3.webp
│   │   │   ├── j-section-6B-v1.webp
│   │   │   ├── j-section-6B-v2.webp
│   │   │   ├── j-section-6B-v3.webp
│   │   │   ├── j-section-6C-v1.webp
│   │   │   ├── j-section-6C-v2.webp
│   │   │   ├── j-section-6C-v3.webp
│   │   │   ├── j-section-7A-v1.webp
│   │   │   ├── j-section-7A-v2.webp
│   │   │   ├── j-section-7A-v3.webp
│   │   │   ├── j-section-7B-v1.webp
│   │   │   ├── j-section-7B-v2.webp
│   │   │   ├── j-section-7B-v3.webp
│   │   │   ├── j-section-7C-v1.webp
│   │   │   ├── j-section-7C-v2.webp
│   │   │   ├── j-section-7C-v3.webp
│   │   │   ├── j-section-8A-v1.webp
│   │   │   ├── j-section-8A-v2.webp
│   │   │   ├── j-section-8A-v3.webp
│   │   │   ├── j-section-8B-v1.webp
│   │   │   ├── j-section-8B-v2.webp
│   │   │   ├── j-section-8B-v3.webp
│   │   │   ├── j-section-8C-v1.webp
│   │   │   ├── j-section-8C-v2.webp
│   │   │   ├── j-section-8C-v3.webp
│   │   │   ├── j-section-9A-v1.webp
│   │   │   ├── j-section-9A-v2.webp
│   │   │   ├── j-section-9A-v3.webp
│   │   │   ├── j-section-9B-v1.webp
│   │   │   ├── j-section-9B-v2.webp
│   │   │   ├── j-section-9B-v3.webp
│   │   │   ├── j-section-9C-v1.webp
│   │   │   ├── j-section-9C-v2.webp
│   │   │   ├── j-section-9C-v3.webp
│   │   │   ├── jwide-section-1A-v1.webp
│   │   │   ├── jwide-section-1A-v2.webp
│   │   │   ├── jwide-section-1A-v3.webp
│   │   │   ├── jwide-section-1A-v4.webp
│   │   │   ├── jwide-section-1B-v1.webp
│   │   │   ├── jwide-section-1B-v2.webp
│   │   │   ├── jwide-section-1B-v3.webp
│   │   │   ├── jwide-section-1C-v1.webp
│   │   │   ├── jwide-section-1C-v2.webp
│   │   │   ├── jwide-section-1C-v3.webp
│   │   │   ├── jwide-section-2A-v1.webp
│   │   │   ├── jwide-section-2A-v2.webp
│   │   │   ├── jwide-section-2A-v3.webp
│   │   │   ├── jwide-section-2B-v1.webp
│   │   │   ├── jwide-section-2B-v2.webp
│   │   │   ├── jwide-section-2B-v3.webp
│   │   │   ├── jwide-section-2B-v4.webp
│   │   │   ├── jwide-section-2C-v1.webp
│   │   │   ├── jwide-section-2C-v2.webp
│   │   │   ├── jwide-section-2C-v3.webp
│   │   │   ├── jwide-section-3A-v1.webp
│   │   │   ├── jwide-section-3A-v2.webp
│   │   │   ├── jwide-section-3A-v3.webp
│   │   │   ├── jwide-section-3B-v1.webp
│   │   │   ├── jwide-section-3B-v2.webp
│   │   │   ├── jwide-section-3B-v3.webp
│   │   │   ├── jwide-section-3C-v1.webp
│   │   │   ├── jwide-section-3C-v2.webp
│   │   │   ├── jwide-section-3C-v3.webp
│   │   │   ├── jwide-section-4A-v1.webp
│   │   │   ├── jwide-section-4A-v2.webp
│   │   │   ├── jwide-section-4A-v3.webp
│   │   │   ├── jwide-section-4B-v1.webp
│   │   │   ├── jwide-section-4B-v2.webp
│   │   │   ├── jwide-section-4B-v3.webp
│   │   │   ├── jwide-section-4C-v1.webp
│   │   │   ├── jwide-section-4C-v2.webp
│   │   │   ├── jwide-section-4C-v3.webp
│   │   │   ├── jwide-section-5A-v1.webp
│   │   │   ├── jwide-section-5A-v2.webp
│   │   │   ├── jwide-section-5A-v3.webp
│   │   │   ├── jwide-section-5B-v1.webp
│   │   │   ├── jwide-section-5B-v2.webp
│   │   │   ├── jwide-section-5B-v3.webp
│   │   │   ├── jwide-section-5C-v1.webp
│   │   │   ├── jwide-section-5C-v2.webp
│   │   │   ├── jwide-section-5C-v3.webp
│   │   │   ├── jwide-section-6A-v1.webp
│   │   │   ├── jwide-section-6A-v2.webp
│   │   │   ├── jwide-section-6A-v3.webp
│   │   │   ├── jwide-section-6B-v1.webp
│   │   │   ├── jwide-section-6B-v2.webp
│   │   │   ├── jwide-section-6B-v3.webp
│   │   │   ├── jwide-section-6C-v1.webp
│   │   │   ├── jwide-section-6C-v2.webp
│   │   │   ├── jwide-section-6C-v3.webp
│   │   │   ├── jwide-section-7A-v1.webp
│   │   │   ├── jwide-section-7A-v2.webp
│   │   │   ├── jwide-section-7A-v3.webp
│   │   │   ├── jwide-section-7B-v1.webp
│   │   │   ├── jwide-section-7B-v2.webp
│   │   │   ├── jwide-section-7B-v3.webp
│   │   │   ├── jwide-section-7C-v1.webp
│   │   │   ├── jwide-section-7C-v2.webp
│   │   │   ├── jwide-section-7C-v3.webp
│   │   │   ├── jwide-section-8A-v1.webp
│   │   │   ├── jwide-section-8A-v2.webp
│   │   │   ├── jwide-section-8A-v3.webp
│   │   │   ├── jwide-section-8B-v1.webp
│   │   │   ├── jwide-section-8B-v2.webp
│   │   │   ├── jwide-section-8B-v3.webp
│   │   │   ├── jwide-section-8C-v1.webp
│   │   │   ├── jwide-section-8C-v2.webp
│   │   │   ├── jwide-section-8C-v3.webp
│   │   │   ├── jwide-section-9A-v1.webp
│   │   │   ├── jwide-section-9A-v2.webp
│   │   │   ├── jwide-section-9A-v3.webp
│   │   │   ├── jwide-section-9B-v1.webp
│   │   │   ├── jwide-section-9B-v2.webp
│   │   │   ├── jwide-section-9B-v3.webp
│   │   │   ├── jwide-section-9C-v1.webp
│   │   │   ├── jwide-section-9C-v2.webp
│   │   │   └── jwide-section-9C-v3.webp
│   │   ├── DESIGN_INSPO
│   │   │   ├── INSPO_DESIGN_1.png
│   │   │   ├── INSPO_DESIGN_2.png
│   │   │   ├── INSPO_DESIGN_3.png
│   │   │   ├── INSPO_DESIGN_4.png
│   │   │   └── INSPO_DESIGN_5.png
│   │   ├── NAV_INSPO.png
│   │   ├── NAV_INSPO.webp
│   │   ├── summer-lookbook
│   │   │   ├── SECTION_01
│   │   │   │   ├── 01-aries-new-2.webp
│   │   │   │   ├── 01-aries-new-3.webp
│   │   │   │   ├── 01-aries-new-4.webp
│   │   │   │   ├── w01-outfit-1A-v1.webp
│   │   │   │   ├── w01-outfit-1A-v2.webp
│   │   │   │   ├── w01-outfit-1B-v1.webp
│   │   │   │   ├── w01-outfit-1B-v2.webp
│   │   │   │   ├── w01-outfit-1B-v3.webp
│   │   │   │   ├── w01-outfit-1B-v4.webp
│   │   │   │   ├── w01-outfit-2A-v1.webp
│   │   │   │   ├── w01-outfit-2A-v2.webp
│   │   │   │   ├── w01-outfit-2A-v3.webp
│   │   │   │   ├── w01-outfit-2A-v4.webp
│   │   │   │   ├── w01-outfit-2B-v1.webp
│   │   │   │   ├── w01-outfit-2B-v2.webp
│   │   │   │   ├── w01-outfit-2B-v3.webp
│   │   │   │   └── w01-outfit-2B-v4.webp
│   │   │   ├── SECTION_02
│   │   │   │   ├── 02-taurus-new-1.webp
│   │   │   │   ├── 02-taurus-new-3.webp
│   │   │   │   ├── 02-taurus-new-4.webp
│   │   │   │   ├── w02-outfit-1A-v1.webp
│   │   │   │   ├── w02-outfit-1A-v2.webp
│   │   │   │   ├── w02-outfit-1A-v4.webp
│   │   │   │   ├── w02-outfit-1B-v1.webp
│   │   │   │   ├── w02-outfit-1B-v2.webp
│   │   │   │   ├── w02-outfit-1B-v3.webp
│   │   │   │   ├── w02-outfit-1B-v4.webp
│   │   │   │   ├── w02-outfit-2A-v1.webp
│   │   │   │   ├── w02-outfit-2A-v2.webp
│   │   │   │   ├── w02-outfit-2A-v3.webp
│   │   │   │   ├── w02-outfit-2A-v4.webp
│   │   │   │   ├── w02-outfit-2B-v1.webp
│   │   │   │   ├── w02-outfit-2B-v2.webp
│   │   │   │   ├── w02-outfit-2B-v3.webp
│   │   │   │   ├── WIDE-02-outfit-1A-v1.webp
│   │   │   │   └── WIDE-02-outfit-2B-v3.webp
│   │   │   ├── SECTION_03
│   │   │   │   ├── 03-gemini-new-1.webp
│   │   │   │   ├── 03-gemini-new-2.webp
│   │   │   │   ├── 03-gemini-new-3.webp
│   │   │   │   ├── 03-gemini-new-4.webp
│   │   │   │   ├── w03-outfit-1A-v1.webp
│   │   │   │   ├── w03-outfit-1A-v2.webp
│   │   │   │   ├── w03-outfit-1A-v3.webp
│   │   │   │   ├── w03-outfit-1A-v4.webp
│   │   │   │   ├── w03-outfit-1B-v1.webp
│   │   │   │   ├── w03-outfit-1B-v2.webp
│   │   │   │   ├── w03-outfit-1B-v3.webp
│   │   │   │   ├── w03-outfit-1B-v4.webp
│   │   │   │   ├── w03-outfit-2A-v1.webp
│   │   │   │   ├── w03-outfit-2A-v2.webp
│   │   │   │   ├── w03-outfit-2A-v4.webp
│   │   │   │   ├── w03-outfit-2B-v1.webp
│   │   │   │   ├── w03-outfit-2B-v2.webp
│   │   │   │   ├── w03-outfit-2B-v3.webp
│   │   │   │   ├── WIDE-03-outfit-2A-v2.webp
│   │   │   │   └── WIDE-03-outfit-2B-v1.webp
│   │   │   ├── SECTION_04
│   │   │   │   ├── 04-cancer-new-1.webp
│   │   │   │   ├── 04-cancer-new-2.webp
│   │   │   │   ├── 04-cancer-new-3.webp
│   │   │   │   ├── w04-outfit-1A-v1.webp
│   │   │   │   ├── w04-outfit-1A-v4.webp
│   │   │   │   ├── w04-outfit-1B-v2.webp
│   │   │   │   ├── w04-outfit-1B-v3.webp
│   │   │   │   ├── w04-outfit-1B-v4.webp
│   │   │   │   ├── w04-outfit-2A-v1.webp
│   │   │   │   ├── w04-outfit-2A-v2.webp
│   │   │   │   ├── w04-outfit-2A-v3.webp
│   │   │   │   ├── w04-outfit-2A-v4.webp
│   │   │   │   ├── w04-outfit-2B-v1.webp
│   │   │   │   ├── w04-outfit-2B-v2.webp
│   │   │   │   ├── w04-outfit-2B-v3.webp
│   │   │   │   ├── w04-outfit-2B-v4.webp
│   │   │   │   └── WIDE-04-outfit-1B-v2.webp
│   │   │   ├── SECTION_05
│   │   │   │   ├── 05-leo-new-1.webp
│   │   │   │   ├── 05-leo-new-2.webp
│   │   │   │   ├── 05-leo-new-3.webp
│   │   │   │   ├── w05-outfit-1A-v1.webp
│   │   │   │   ├── w05-outfit-1A-v2.webp
│   │   │   │   ├── w05-outfit-1A-v3.webp
│   │   │   │   ├── w05-outfit-1A-v4.webp
│   │   │   │   ├── w05-outfit-1B-v1.webp
│   │   │   │   ├── w05-outfit-1B-v2.webp
│   │   │   │   ├── w05-outfit-1B-v3.webp
│   │   │   │   ├── w05-outfit-1B-v4.webp
│   │   │   │   ├── w05-outfit-2A-v1.webp
│   │   │   │   ├── w05-outfit-2A-v2.webp
│   │   │   │   ├── w05-outfit-2A-v3.webp
│   │   │   │   ├── w05-outfit-2B-v1.webp
│   │   │   │   ├── w05-outfit-2B-v2.webp
│   │   │   │   ├── w05-outfit-2B-v3.webp
│   │   │   │   ├── WIDE-05-outfit-2A-v2.webp
│   │   │   │   └── WIDE-05-outfit-2B-v1.webp
│   │   │   ├── SECTION_06
│   │   │   │   ├── 06-virgo-new-1.webp
│   │   │   │   ├── 06-virgo-new-2.webp
│   │   │   │   ├── 06-virgo-new-3.webp
│   │   │   │   ├── 06-virgo-new-4.webp
│   │   │   │   ├── w06-outfit-1A-v1.webp
│   │   │   │   ├── w06-outfit-1A-v2.webp
│   │   │   │   ├── w06-outfit-1A-v3.webp
│   │   │   │   ├── w06-outfit-1A-v4.webp
│   │   │   │   ├── w06-outfit-1B-v1.webp
│   │   │   │   ├── w06-outfit-1B-v2.webp
│   │   │   │   ├── w06-outfit-1B-v3.webp
│   │   │   │   ├── w06-outfit-1B-v4.webp
│   │   │   │   ├── w06-outfit-2A-v1.webp
│   │   │   │   ├── w06-outfit-2A-v3.webp
│   │   │   │   ├── w06-outfit-2B-v1.webp
│   │   │   │   ├── w06-outfit-2B-v2.webp
│   │   │   │   ├── w06-outfit-2B-v3.webp
│   │   │   │   └── w06-outfit-2B-v4.webp
│   │   │   ├── SECTION_07
│   │   │   │   ├── 07-libra-new-1.webp
│   │   │   │   ├── 07-libra-new-2.webp
│   │   │   │   ├── 07-libra-new-3.webp
│   │   │   │   ├── 07-libra-new-4.webp
│   │   │   │   ├── w07-outfit-1A-v1.webp
│   │   │   │   ├── w07-outfit-1A-v2.webp
│   │   │   │   ├── w07-outfit-1A-v3.webp
│   │   │   │   ├── w07-outfit-1A-v4.webp
│   │   │   │   ├── w07-outfit-1B-v1.webp
│   │   │   │   ├── w07-outfit-1B-v2.webp
│   │   │   │   ├── w07-outfit-1B-v3.webp
│   │   │   │   ├── w07-outfit-1B-v4.webp
│   │   │   │   ├── w07-outfit-2A-v3.webp
│   │   │   │   ├── w07-outfit-2A-v4.webp
│   │   │   │   ├── w07-outfit-2B-v1.webp
│   │   │   │   └── w07-outfit-2B-v3.webp
│   │   │   ├── SECTION_08
│   │   │   │   ├── 08-scorpio-new-1.webp
│   │   │   │   ├── 08-scorpio-new-2.webp
│   │   │   │   ├── 08-scorpio-new-4.webp
│   │   │   │   ├── w08-outfit-1A-v1.webp
│   │   │   │   ├── w08-outfit-1A-v3.webp
│   │   │   │   ├── w08-outfit-1A-v4.webp
│   │   │   │   ├── w08-outfit-1B-v1.webp
│   │   │   │   ├── w08-outfit-1B-v3.webp
│   │   │   │   ├── w08-outfit-2A-v1.webp
│   │   │   │   ├── w08-outfit-2A-v2.webp
│   │   │   │   ├── w08-outfit-2A-v3.webp
│   │   │   │   ├── w08-outfit-2A-v4.webp
│   │   │   │   ├── w08-outfit-2B-v1.webp
│   │   │   │   ├── w08-outfit-2B-v2.webp
│   │   │   │   ├── w08-outfit-2B-v3.webp
│   │   │   │   ├── w08-outfit-2B-v4.webp
│   │   │   │   └── WIDE-08-outfit-1A-v3.webp
│   │   │   ├── SECTION_09
│   │   │   │   ├── 09-sagittarius-new-1.webp
│   │   │   │   ├── 09-sagittarius-new-2.webp
│   │   │   │   ├── 09-sagittarius-new-3.webp
│   │   │   │   ├── w09-outfit-1A-v1.webp
│   │   │   │   ├── w09-outfit-1A-v2.webp
│   │   │   │   ├── w09-outfit-1A-v3.webp
│   │   │   │   ├── w09-outfit-1A-v4.webp
│   │   │   │   ├── w09-outfit-1B-v1.webp
│   │   │   │   ├── w09-outfit-1B-v2.webp
│   │   │   │   ├── w09-outfit-1B-v3.webp
│   │   │   │   ├── w09-outfit-1B-v4.webp
│   │   │   │   ├── w09-outfit-2A-v1.webp
│   │   │   │   ├── w09-outfit-2A-v2.webp
│   │   │   │   ├── w09-outfit-2A-v3.webp
│   │   │   │   ├── w09-outfit-2B-v2.webp
│   │   │   │   ├── w09-outfit-2B-v3.webp
│   │   │   │   └── WIDE-09-outfit-2A-v2.webp
│   │   │   ├── SECTION_10
│   │   │   │   ├── 10-capricorn-new-2.webp
│   │   │   │   ├── 10-capricorn-new-3.webp
│   │   │   │   ├── 10-capricorn-new-4.webp
│   │   │   │   ├── w10-outfit-1A-v1.webp
│   │   │   │   ├── w10-outfit-1A-v3.webp
│   │   │   │   ├── w10-outfit-1B-v1.webp
│   │   │   │   ├── w10-outfit-1B-v2.webp
│   │   │   │   ├── w10-outfit-1B-v3.webp
│   │   │   │   ├── w10-outfit-2A-v1.webp
│   │   │   │   ├── w10-outfit-2A-v2.webp
│   │   │   │   ├── w10-outfit-2A-v3.webp
│   │   │   │   ├── w10-outfit-2A-v4.webp
│   │   │   │   ├── w10-outfit-2B-v1.webp
│   │   │   │   ├── w10-outfit-2B-v2.webp
│   │   │   │   ├── w10-outfit-2B-v3.webp
│   │   │   │   ├── w10-outfit-2B-v4.webp
│   │   │   │   ├── WIDE-10-outfit-1B-v1.webp
│   │   │   │   └── WIDE-10-outfit-2A-v2.webp
│   │   │   ├── SECTION_11
│   │   │   │   ├── 11-aquarius-new-1.webp
│   │   │   │   ├── 11-aquarius-new-2.webp
│   │   │   │   ├── 11-aquarius-new-3.webp
│   │   │   │   ├── 11-aquarius-new-4.webp
│   │   │   │   ├── w11-outfit-1A-v1.webp
│   │   │   │   ├── w11-outfit-1A-v2.webp
│   │   │   │   ├── w11-outfit-1A-v4.webp
│   │   │   │   ├── w11-outfit-1B-v1.webp
│   │   │   │   ├── w11-outfit-1B-v2.webp
│   │   │   │   ├── w11-outfit-1B-v3.webp
│   │   │   │   ├── w11-outfit-1B-v4.webp
│   │   │   │   ├── w11-outfit-2A-v1.webp
│   │   │   │   ├── w11-outfit-2A-v2.webp
│   │   │   │   ├── w11-outfit-2A-v3.webp
│   │   │   │   ├── w11-outfit-2A-v4.webp
│   │   │   │   ├── w11-outfit-2B-v1.webp
│   │   │   │   └── w11-outfit-2B-v2.webp
│   │   │   └── SECTION_12
│   │   │       ├── 12-pisces-new-1.webp
│   │   │       ├── 12-pisces-new-2.webp
│   │   │       ├── 12-pisces-new-3.webp
│   │   │       ├── w12-outfit-1A-v1.webp
│   │   │       ├── w12-outfit-1A-v2.webp
│   │   │       ├── w12-outfit-1A-v3.webp
│   │   │       ├── w12-outfit-1A-v4.webp
│   │   │       ├── w12-outfit-1B-v1.webp
│   │   │       ├── w12-outfit-1B-v2.webp
│   │   │       ├── w12-outfit-1B-v3.webp
│   │   │       ├── w12-outfit-2A-v1.webp
│   │   │       ├── w12-outfit-2A-v3.webp
│   │   │       ├── w12-outfit-2A-v4.webp
│   │   │       ├── w12-outfit-2B-v1.webp
│   │   │       ├── w12-outfit-2B-v2.webp
│   │   │       ├── w12-outfit-2B-v3.webp
│   │   │       ├── w12-outfit-2B-v4.webp
│   │   │       └── WIDE-12-outfit-1B-v3.webp
│   │   ├── webflow-print-series
│   │   │   ├── bauhaus-navbar-icon.webp
│   │   │   ├── MCMD-13001.webp
│   │   │   ├── MCMD-13002.webp
│   │   │   ├── MCMD-13003.webp
│   │   │   ├── MCMD-13004.webp
│   │   │   ├── MCMD-13005.webp
│   │   │   ├── MCMD-20001-24x18.webp
│   │   │   ├── MCMD-20002-24x18.webp
│   │   │   ├── MCMD-20003-24x18.webp
│   │   │   ├── MCMD-22001-12x16.webp
│   │   │   ├── MCMD-22002-18x24.webp
│   │   │   ├── MCMD-22003-18x24.webp
│   │   │   ├── MCMD-22004-24x18.webp
│   │   │   ├── MCMD-22005-24x18.webp
│   │   │   ├── MCMD-22006-18x24.webp
│   │   │   ├── MCMD-22007-18x24.webp
│   │   │   ├── MCMD-22008-18x24.webp
│   │   │   ├── MCMD-22010-18x24.webp
│   │   │   ├── MCMD-22011-20x16.webp
│   │   │   ├── MCMD-22012-24x18.webp
│   │   │   ├── MCMD-22013-24x18.webp
│   │   │   ├── MCMD-22014-24x18.webp
│   │   │   ├── MCMD-34001-18x18.webp
│   │   │   ├── MCMD-34002-18x18.webp
│   │   │   ├── MCMD-34003-18x18.webp
│   │   │   ├── MCMD-35001-24x18.webp
│   │   │   ├── MCMD-35002-24x18.webp
│   │   │   ├── MCMD-35003-24x18.webp
│   │   │   └── MCMD-35004-24x18.webp
│   │   └── webflow-product-page
│   │       ├── BRTM-16001-30x20.webp
│   │       ├── BRTM-16002-30x20.webp
│   │       ├── BRTM-16012-bg.webp
│   │       ├── fr-v1-VPWV-13701-20x16.webp
│   │       ├── fr-v1-VPWV-13702-18x18.webp
│   │       ├── fr-v1-VPWV-13703-30x20.webp
│   │       ├── fr-v2-VPWV-13701-20x16.webp
│   │       ├── fr-v2-VPWV-13702-18x18.webp
│   │       ├── fr-v2-VPWV-13703-30x20.webp
│   │       ├── jfr-BAHU-24001-30x20.jpg
│   │       ├── jfr-BAHU-28001-18x18.webp
│   │       ├── jfr-BAHU-31001-18x18.webp
│   │       ├── jfr-BAHU-32001-18x18.webp
│   │       ├── jfr-BAHU-33001-30x20.webp
│   │       ├── jfr-BRTM-16001-30x20.webp
│   │       ├── jfr-BRTM-16002-30x20.webp
│   │       ├── jfr-BRTM-16003-30x20.webp
│   │       ├── jfr-BRTM-16004-20x16.webp
│   │       ├── jfr-BRTM-16012-30x20.webp
│   │       ├── jfr-BRTM-16020-30x20.webp
│   │       ├── jfr-GTCH-11701-14x11.webp
│   │       ├── jfr-GTCH-11702-11x14.webp
│   │       ├── jfr-GTCH-12501-20x16.jpg
│   │       ├── jfr-GTCH-12502-20x16.jpg
│   │       ├── jfr-SNWV-14001-20x16.webp
│   │       ├── jfr-SNWV-14002-20x16.webp
│   │       ├── jfr-SNWV-14003-20x16.webp
│   │       ├── jfr-SURL-49001-20x16.webp
│   │       ├── jfr-SURL-49003-16x16.webp
│   │       ├── jfr-v1-BAHU-24001-30x20.webp
│   │       ├── jfr-v1-BAHU-28001-18x18.webp
│   │       ├── jfr-v1-BAHU-31001-18x18.webp
│   │       ├── jfr-v1-BAHU-32001-18x18.webp
│   │       ├── jfr-v1-BAHU-33001-30x20.webp
│   │       ├── jfr-v1-BRTM-16001-30x20.webp
│   │       ├── jfr-v1-BRTM-16002-30x20.webp
│   │       ├── jfr-v1-BRTM-16003-30x20.webp
│   │       ├── jfr-v1-BRTM-16004-20x16.webp
│   │       ├── jfr-v1-BRTM-16012-30x20.webp
│   │       ├── jfr-v1-BRTM-16020-30x20.webp
│   │       ├── jfr-v1-GTCH-11701-14x11.webp
│   │       ├── jfr-v1-GTCH-11702-11x14.webp
│   │       ├── jfr-v1-GTCH-12501-20x16.webp
│   │       ├── jfr-v1-GTCH-12502-20x16.webp
│   │       ├── jfr-v1-SNWV-14001-20x16.webp
│   │       ├── jfr-v1-SNWV-14002-20x16.webp
│   │       ├── jfr-v1-SNWV-14003-20x16.webp
│   │       ├── jfr-v1-SURL-49001-20x16.webp
│   │       ├── jfr-v1-SURL-49002-18x24..webp
│   │       ├── jfr-v1-SURL-49002-18x24.webp
│   │       ├── jfr-v1-SURL-49003-16x16.webp
│   │       ├── jfr-v2-BAHU-24001-30x20.webp
│   │       ├── jfr-v2-BAHU-28001-18x18.webp
│   │       ├── jfr-v2-BAHU-31001-18x18.webp
│   │       ├── jfr-v2-BAHU-32001-18x18.webp
│   │       ├── jfr-v2-BAHU-33001-30x20.webp
│   │       ├── jfr-v2-BRTM-16001-30x20.webp
│   │       ├── jfr-v2-BRTM-16002-30x20.webp
│   │       ├── jfr-v2-BRTM-16003-30x20.webp
│   │       ├── jfr-v2-BRTM-16004-20x16.webp
│   │       ├── jfr-v2-BRTM-16012-30x20.webp
│   │       ├── jfr-v2-BRTM-16020-30x20.webp
│   │       ├── jfr-v2-GTCH-11701-14x11.webp
│   │       ├── jfr-v2-GTCH-11702-11x14.webp
│   │       ├── jfr-v2-GTCH-12501-20x16.webp
│   │       ├── jfr-v2-GTCH-12502-20x16.webp
│   │       ├── jfr-v2-SNWV-14001-20x16.webp
│   │       ├── jfr-v2-SNWV-14002-20x16.webp
│   │       ├── jfr-v2-SNWV-14003-20x16.webp
│   │       ├── jfr-v2-SURL-49001-20x16.webp
│   │       ├── jfr-v2-SURL-49002-18x24.webp
│   │       └── jfr-v2-SURL-49003-16x16.webp
│   ├── js
│   │   └── wave-animation.js
│   └── setup-scripts
│       ├── convert_webp_to_jpg.py
│       ├── create_placeholders.py
│       ├── download-images.sh
│       ├── download-lookbook-images.sh
│       ├── download-more-images.sh
│       ├── download-more-product-images.sh
│       ├── download-product-images.sh
│       ├── extract_lookbook_images.py
│       ├── fix_image_paths.py
│       ├── fix_missing_images.py
│       ├── rip_framer_images.py
│       └── serve.py
├── CLAUDE.md
├── CNAME
└── README.md
```

Websites for the Projects Section --> `./assets/docs/PROJECT_SITES.md`