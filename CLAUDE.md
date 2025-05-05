# Development Map 
--> design.august.style/ 

## Overview 

I have all of my old websites for the first time ever meaning my 'HIRE ME' assets need to be updated. In hindsight, my first portfolio was a project in coding. It is comprehensive, but doesn't showcase work well for anyone not already digging. I forgot my forever rules. 

  - Visuals before everything --> they're always the real story 
  - Highest bar --> pass the gut check 

### The Inspiration

This website is simplistically powerful, for [Creative Developer](https://www.alex-moulinneuf.fr/about). 

Just pages, you start on ABOUT. 
  
  - Visual of beams of light passing in, fixed in your view, they move as you scroll down 
  - Trendy 3D interactive effect makes it look like the 2D image is facing your mouse 
  - Bio is short as a twitter or instagram bio: 
      > 🇫🇷 Based in Paris, France — 💼 Open to full-time opportunities. 
  - Two sentences highlight themselves as you scroll down: 
      > I'm a French creative web developer with 6+ years of experience working with companies like Shadow.tech and TF1. I'm also a teacher and senior lecturer, passionate about experimenting and pushing the boundaries of web development.
  - Nothing else except icon, no text, for LinkedIn, GitHub, and Email 

Then on PROJECTS. 

  - Each project is a full viewport visual 
  - The navigation is a row of small icons at the bottom left of the screen 
      > If you can't picture it, see the 6 screenshots: `./assets/images/DESIGN_INSPO/` 

## Design Briefing 

I need to show them moving without using videos. And after seeing some other portfolios, I'm must less focused on deep story telling, and more focused on created a gut check for the viewer. They should see the work and either feel like they need to know more, or the site is exactly what they need. 

This project started as a way to upgrade my portfolio. I have my old websites for the first time ever. My first portfolio was more of a project in coding a website than it was a showcase of work. I need to show them moving without using videos. And after seeing some other portfolios, I'm 



It still is on some level, as I still want to showcase the website design, but I would like to consider if any of them would serve me better adjusted to be a template, like a SaaS product landing page for a made-up product. This could help me show off my work but in a way that might seem more cohesive and professional. 

 After seeing that site, I'm even less concerned about the viewers need to click through if -- **PULL A SINGLE PAGE FROM EACH WEBSITE** -- let the viewer scroll up and down that page. Line those up with icons, and that is my portfolio. Those icons will be the navigation, fixed to stay with the viewport even as the next project page moves in from the right and the old one slides out to the left, just like video transition effects. 

Not all sites need to be literal. Let's make them into templates that hiring companies would be looking for when hiring a designer. 

### Projects Section 

- Each project is a full viewport width and height visual 
- A single web project is presented as a page from a website where the vertical scroll still works 
- When you go to the next project, it slides in from the right as the previous one slides out to the left 
- The portfolio navigation is a series small glass circles at the bottom left of the screen 

### Navigation UI 

The row of projects and ability to navigate through them is shown using a series of small glass-effect circles at the bottom left of the screen. When you click on one of the circles, it will take you to that project. The circle for the project you are viewing is enlarged. For some projects, above the enlarged circle is a series of very small circles representing how many visuals of that same project are available; a UI/UX design much like how Apple depicts how many pages are on the home screen of an iPhone, and which page you are currently on. Not every project has multiple visuals; this is only included on those that do. 

When viewing a project and not scrolling up and down to see the webpage content being displayed, the circles and a block of header and paragraph text are displayed telling you about the project. When you scroll up and down to see the webpage content being displayed, the circles and text are hidden. 

This entire navigation is fixed with the viewport no matter what project or where you are in viewing a project. When the circle to go to the next project is clicked, the project slides in from the right as the previous one slides out to the left, but the navigation is still fixed with the viewport. 

There is a visual example of this navigation UI here: `/Users/seanivore/Development/design-site/assets/images/NAV_INSPO.png` 

### Interactive Homepage  

Sean August Horvath 

Graphic Designer with 14 years experience in production, social media strategy, and user experience. I'm passionate about using design to make complexity accessible and engaging.

[LinkedIn Icon](https://linkedin.com/in/seanivore)
[GitHub Icon](https://github.com/seanivore)
[Envelope Icon](mailto:sean@august.style) 

The information about me above is written on in the middle of a 100vw x 100vh panel. Imagine a CSS animation on top that consists of a grid of small rectangles, 200 of them across and 100 of them tall. Click on one and they ripple outwards in a circle, moving like "The Wave" that people do sitting in a stadium. The cards "flip" 360º with them reaching 180º at wave peak. The illusion of it flipping can be created by the rectangle narrowing to a line, then expanding back out to a full rectangle, if each "side" is different' 

These cards are normally heavily blurred transparent with an inverted background filter. On the other side, they are closer to 100% opacity and have the trendy glass effect. The blur is set high. They shouldn't know what is behind the cards, but they can tell there is something there. When they click, if they click enough, they'll be able to see what it says. Button at bottom right says CLEAR; essentially the accessibility option to turn off the interactive visual animation, but when clicked a wave comes from the button that is of a magnitude bigger, more like a tsunami, and when they flip with this button the cards do not flip back. 

Only other elements on the page are the ABOUT and PROJECTS links at the top right. ABOUT is already depressed. PROJECTS, when clicked, shows the PROJECTS page, and it reacts just like the CLEAR button, but instead of showing what is behind the cards, it serves as the transition to the PROJECTS page. 

I was playing with some math and logic that should help define the pattern: `/Users/seanivore/Development/design-site/assets/docs/MATH_LOGIC_HOME_ANIM.md` 

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

## Design Sites 

### 1. CSS Animation Product Feature Landing Page 
`/Users/seanivore/Development/design-site/projects/animated-product-landing.html`
Love this homepage. Let's make it into a template for a SaaS product landing page. It includes: 
- JS animation: /Users/seanivore/Development/design-site/assets/js/wave-animation.js
- Page CSS: /Users/seanivore/Development/design-site/assets/css/animated-product-landing.css
- Animation CSS: /Users/seanivore/Development/design-site/assets/css/wave-animation.css 

### 2. MAYBE can turn these into some kind of template; need to be made vertically scrollable instead.  
1 — `https://presenting.august.style/ai-voice-sales-development` 
2 — `https://presenting.august.style/implement-ai-voice-marketing` 
I wasn't even thinking about adding these until I wrote the note above about adjusting the content to fit bigger picture sales stuff that hiring managers and companies and clients might want to see, might be better to see because some people can't imagine seeing something else when looking at sites. 
- This might help: `/Users/seanivore/Development/presentation-decks`
*Actually these are both horizontally scrolling site which would be sort of difficult to fit in with the planned UX of this actual site* 

### 3. Webflow 800+ Product Store 
I guess the homepage is the most comprehensive and impressive, as a place to start. `https://print-shop-fashion.august.style`
- Project directory: `/Users/seanivore/Development/webflow-store` 

1 — `https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/shop-prints-by-aesthetic/vintage.html`
2 — `https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/original-single-edition-prints/exhilarating-bauhaus-geometric-abstract-art-minimalist-mid-century-design.html`
3 — `https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/original-print-series/pattern-mash-mid-century-modern-emotive-geometric-abstract-grow-into-detailed-cities-art-history-print-shop.html`
Might want to downsize the images a bit more. There are so many prints and this is from 3 different sections of the site. I didn't do the actual store front because of load times. But This is one they probably can have the URL in the project description to click through to. 

### 4. Framer Autumn Lookbook AI Generated In-Painted Fashion Photos 
1 — `https://ai-generated-content.august.style/lookbook`
This is good for one long page. 
- This if we need: `/Users/seanivore/Development/framer-cms-lookbook`

### 5. Webflow Custom Art 200+ Blog/Week Automated 
1 — `https://generative-horoscopes.august.style/`
- Project directory: `/Users/seanivore/Development/astrofluenced`
This is one really long homepage. It has a lot to see. I could add other pages to this project as well, but I think I'll just add a different page as a different project. The site has so many custom drawn lottie animations that are really pretty. 

### 6. Webflow Summer Fashion Lookbook
`https://print-shop-fashion.august.style/fashion/lookbook/summer-2024-cover.html`
This is a book that you page through. We should either find a few pages to make into one page, or just have them in sequence. 

### 7. Webflow CMS AI Generated Weekend Horoscopes 
1 — `https://generative-horoscopes.august.style/astrology-reading/energy-planning/weekend-perfect.html`

Will need to edit it a bit because the date filtering is gone and I kept a few weeks in the CMS when we pulled it to local. 

### 8. Custom Hand Illustrated Client Site 
1 — `https://www.online-pt-trainer.august.style/`
- Project directory: `/Users/seanivore/Development/webflow-client-ckheals`
Small site and URL can be provided to probably good with just one page. 

### 9. Webflow Professional Portfolio 
1 — `https://www.visual-producer.august.style/`
Hand Illustrated, 3D Motion, NFTs; But this might be another one that could be made into more of a template. 
- Project directory: `/Users/seanivore/Development/webflow-2023`

### 10. Reference & Technical Documentation Website 
1 — `https://www.ai-philosophy.august.style/`
2 — `https://sfagent.august.style/ai-voice-marketing-case-study/index-section-site-map/` 

In the same vein as turning these into templates, making them more than just actual projects. This one and the one about SFA are both Markdown > HTML GitHub Pages Jekyll sites which illustrate the reference and technical documentation for the projects perfectly. 

### Additional Project Options 

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

## Project Directory Structure 

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
