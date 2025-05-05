# Design Portfolio 

## Project Overview 

Fresh website highlighting a collection of my design work that this developed thinking visuals-first and curated with a more selective approach. **More Story, Less Words** - this is how the idea was born: `/Users/seanivore/Development/design-site/assets/docs/ABOUT_SITE_INSPO.md` 

The site will be designed HTML/CSS/JS and then published using GitHub Pages and Jekyll with a custom domain --> design.august.style/

## Homepage Overview 

### Contact & Bio 

Sean August Horvath 

Graphic Designer with 14 years experience in production, social media strategy, and user experience. I'm passionate about using design to make complexity accessible and engaging.

[LinkedIn Icon](https://linkedin.com/in/seanivore)
[GitHub Icon](https://github.com/seanivore)
[Envelope Icon](mailto:sean@august.style) 

### Interactive Visual 

Just a few words, as written above, on a fixed full-viewport background. On top is an interactive CSS animation created by 200 wide, 100 high small rectangles. When you click on them, they ripple outwards in a circle, moving like the wave that a crowd does sitting in a stadium. The cards flip over as the wave passes, and on the other side of the wave the card is 100% opacity. 

The normal rectangle is transparent with the inverted filter for anything that is behind it; the blur is set high. They shouldn't know what is behind the cards, but they can tell there is something there. When they click, if they click enough, they'll be able to see what it says. 

There will be a button at the bottom right that just says CLEAR. When they click that, there is a wave coming from that button, but this wave is of a magnitude bigger, more like a tsunami, and when they flip they do not flip back. This button is essentially the accessibility option to turn off the interactive visual animation. 

At the top right there are two other "buttons"; buttons in quotes because they are just the word "PROJECTS" and "ABOUT" with a stroke around them and an 11px radius curved edges. The "ABOUT" button is clearly already depressed. Clicking the "PROJECTS" button reacts just like the "CLEAR" button, but instead of showing the current ABOUT page, it doubles as the page transition to the PROJECTS page and main section. 

There is no other navigation or information on the ABOUT homepage. 

The mathematical logic of the interactive visual is detailed here: `/Users/seanivore/Development/design-site/assets/docs/MATH_LOGIC_HOME_ANIM.md` 

## Projects Section Overview 

### Basic Summary 

- Each project is a full viewport width and height visual 
- A single web project is presented as a page from a website where the vertical scroll still works 
- When you go to the next project, it slides in from the right as the previous one slides out to the left 
- The portfolio navigation is a series small glass circles at the bottom left of the screen 
- Clicking on one of the circles will take you to that project, and the circle for the project you are viewing is enlarged 

### Navigation UI 

The row of projects and ability to navigate through them is shown using a series of small glass-effect circles at the bottom left of the screen. When you click on one of the circles, it will take you to that project, and the circle for the project you are viewing is enlarged. Above the selected circle will be a series of very small circle representing how many visuals of that same project are available; this is much like how Apple depicts how many pages are on the home screen of an iPhone, and which page you are currently on. Not every project has multiple visuals; this is only included on those that do. 

When viewing a project and not scrolling up and down to see the webpage content being displayed, the circles and a block of header and paragraph text are displayed telling you about the project. When you scroll up and down to see the webpage content being displayed, the circles and text are hidden. Otherwise, this entire navigation is fixed with the viewport no matter what project or where you are in viewing a project. When the circle to go to the next project is clicked, the project slides in from the right as the previous one slides out to the left, but the navigation is still fixed with the viewport. 

Note that most of the projects will be pages from a website, but it is not necessary for them to be for a project to still be displayed in this manner. 

There is a visual example of this navigation UI here: `/Users/seanivore/Development/design-site/assets/images/NAV_INSPO.png` 

## Projects 

### 1. CSS Animation Product Feature Landing Page 
`/Users/seanivore/Development/design-site/projects/animated-product-landing.html`
Love this homepage. Let's make it into a template for a SaaS product landing page. 

### 2. MAYBE can turn these into some kind of template; need to be made vertically scrollable instead.  
1 — `https://presenting.august.style/ai-voice-sales-development` 
2 — `https://presenting.august.style/implement-ai-voice-marketing` 
I wasn't even thinking about adding these until I wrote the note above about adjusting the content to fit bigger picture sales stuff that hiring managers and companies and clients might want to see, might be better to see because some people can't imagine seeing something else when looking at sites. 
- This might help: `/Users/seanivore/Development/presentation-decks`
*Actually these are both horizontally scrolling site which would be sort of difficult to fit in with the planned UX of this actual site* 

### 3. Webflow 800+ Product Store 
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
This is one really long homepage. It has a lot to see. I could add other pages to this project as well, but I think I'll just add a different page as a different project. The site has so many custom drawn lottie animations that are really pretty. 

### 6. Webflow Summer Fashion Lookbook
`https://print-shop-fashion.august.style/`
Maybe for context: `https://github.com/seanivore/webflow-store/blob/webflow-store/README.md`

### 7. Webflow CMS AI Generated Weekend Horoscopes 
1 — `https://generative-horoscopes.august.style/astrology-reading/energy-planning/weekend-perfect.html`

Will need to edit it a bit because the date filtering is gone and I kept a few weeks in the CMS when we pulled it to local. 

### 8. Custom Hand Illustrated Client Site 
1 — `https://www.online-pt-trainer.august.style/`

Small site and URL can be provided to probably good with just one page. 
This is here in case we need: `/Users/seanivore/Development/webflow-client-ckheals` 

### 9. Webflow Professional Portfolio 
1 — `https://www.visual-producer.august.style/`
Hand Illustrated, 3D Motion, NFTs; But this might be another one that could be made into more of a template. 

All the stuff is here: `/Users/seanivore/Development/webflow-2023`

### 10. Reference & Technical Documentation Website 
1 — `https://www.ai-philosophy.august.style/`
2 — `https://sfagent.august.style/ai-voice-marketing-case-study/index-section-site-map/` 

In the same vein as turning these into templates, making them more than just actual projects. This one and the one about SFA are both Markdown > HTML GitHub Pages Jekyll sites which illustrate the reference and technical documentation for the projects perfectly. 

All the stuff is here: `/Users/seanivore/Development/non-bio-life`

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
.
├── CLAUDE.md        <-- You are here 
├── projects
│   └── animated-product-landing.html
├── _config.yml
├── assets
│   ├── css
│   │   ├── animated-product-landing.css
│   │   └── wave-animation.css
│   ├── docs
│   │   ├── ABOUT_SITE_INSPO.md
│   │   ├── EMOTION_DRIVEN_COPYWRITING.md
│   │   ├── MATH_LOGIC_HOME_ANIM.md
│   │   ├── MY_PROFESSIONAL_EVOLUTION.md
│   │   ├── OLD_PORTFOLIO_PROJECTS.md
│   │   └── RESUME.md
│   ├── images
│   │   ├── DESIGN_INSPO
│   │   │   ├── INSPO_DESIGN_1.png
│   │   │   ├── INSPO_DESIGN_10.png
│   │   │   ├── INSPO_DESIGN_2.png
│   │   │   ├── INSPO_DESIGN_3.png
│   │   │   ├── INSPO_DESIGN_4.png
│   │   │   ├── INSPO_DESIGN_5.png
│   │   │   ├── INSPO_DESIGN_6.png
│   │   │   ├── INSPO_DESIGN_7.png
│   │   │   ├── INSPO_DESIGN_8.png
│   │   │   └── INSPO_DESIGN_9.png
│   │   └── NAV_INSPO.png
│   └── js
│       └── wave-animation.js
├── CNAME
└── README.md
```