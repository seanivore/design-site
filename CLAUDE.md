# About Design Portfolio Vision 
--> design.august.style/ 

## Prologue 

Looking at my old, current [portfolio](https://www.developer-technologist.august.style/), I got lost in learning to build a website with code and forgot all my marketing rules. 

  - Visuals before everything --> they're always the real story 
  - Highest bar --> pass the gut check 

### The Inspiration

Reminders of the rules thanks to vibe developer, AI influencer, [Creative Developer](https://www.alex-moulinneuf.fr/about): Understand and do simple well. Sell yourself by making them need to know more, instead of 'Case Studies'. 

  - Front page is solely about light beams coming through that move as you scroll down
  - Subtle 3D effect for profile picture with very social media bio *"🇫🇷 Based in Paris, France"* and *"💼 Open to full-time opportunities"*
  - Two sentences highlight themselves as you scroll down *"I'm a French creative web developer with 6+ years of experience working with companies like Shadow.tech and TF1. I'm also a teacher and senior lecturer, passionate about experimenting and pushing the boundaries of web development."*
  - Nothing else except icon, no text, for LinkedIn, GitHub, and Email 
  - The entire navigation bar is PROJECTS and ABOUT, the page you're already on, and then the current time at the top right 

Project page is one entire viewport visual per project. Click an icon for the project, from a row of icons, and it slides in from the right. 

> 6 screenshots: `/Users/seanivore/Development/design-site/assets/images/DESIGN_INSPO/` 

### The Upgrade 

I have my old websites for the first time ever. I need to show them moving without using videos. After seeing that site, I'm even less concerned about the viewers need to click through if -- **PULL A SINGLE PAGE FROM EACH WEBSITE** -- let the viewer scroll up and down that page. Line those up with icons, and that is my portfolio. Those icons will be the navigation, fixed to stay with the viewport even as the next project page moves in from the right and the old one slides out to the left, just like video transition effects. 

## Visual Briefing 

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
│   │   ├── EMOTION_DRIVEN_COPYWRITING.md
│   │   ├── MATH_LOGIC_HOME_ANIM.md
│   │   ├── MY_PROFESSIONAL_EVOLUTION.md
│   │   ├── OLD_PORTFOLIO_PROJECTS.md
│   │   └── RESUME.md
│   ├── images
│   │   ├── DESIGN_INSPO
│   │   │   ├── INSPO_DESIGN_1.png
│   │   │   ├── INSPO_DESIGN_2.png
│   │   │   ├── INSPO_DESIGN_3.png
│   │   │   ├── INSPO_DESIGN_4.png
│   │   │   ├── INSPO_DESIGN_5.png
│   │   │   └── INSPO_DESIGN_6.png
│   │   └── NAV_INSPO.png
│   └── js
│       └── wave-animation.js
├── CNAME
└── README.md
```