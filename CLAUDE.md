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

## Directory Structure 

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
│   │   ├── 07-weekend-horoscopes         <-- *Temp. folder for project page prep.*
│   │   ├── 08-yoga-services              <-- *Temp. folder for project page prep.*
│   │   ├── 09-webflow-portfolio          <-- *Temp. folder for project page prep.*
│   │   ├── 10-technical-documentation    <-- *Temp. folder for project page prep.*
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

Websites for the Projects Section --> `./assets/docs/PROJECT_SITES.md`