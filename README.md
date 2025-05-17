# Web Asset Showcase 

## Concept

Showcase web development, design, and user experience capabilities through a collection of high-demand digital assets by pulling from actual past projects but creating a walled garden UX/UI. This is effective without waisting the viewer's time. 

### Goals
  - Show common website UX flows & modern design patterns
  - Expand current portfolio, while targeting B2B/B2C 
  - Micro-interactions and loading states
  - Responsive layouts & accessibility considerations

### Value
  - Shows understanding of multi-step user journeys
  - High quality in different styles demonstrate versatility 
  - Practical value shows just what they need
  - Code structure allows for quick brand color swaps

## Design 

### Themes 
- Capitalize on simplicity
- Think visual-first
- Interactive elements create smart design
- Impress without excessive development 
- UX is a walled garden for practical value
- Good is the enemy of great so use a gut check

### Navigation-centric Layout

The navigation creates a UX that makes it seem like the home page and each project are sitting side by side. This is achieved using a bar that is 100 vw and fixed 1/3rd up from the bottom of the viewport; this is where it is always present to allow moving between projects and their pages. 

The right side of the bar has buttons with icons for the home page and each project. The projects with multiple pages use a normal project button for the first page, then have attached, narrower, icon-free buttons for each other page. 

The right side of the bar displays the project name with single-sentence description; for the home page it shows the website name instead. This description section is designed to appear on an inset window with white text on a shaded glassmorphism background. 

The bar itself has an an almost completely solid opacity and uses a charcoal-colored linear gradient. This gradient creates a UX that feels like the bar has a horizontal middle that is "closer" to the user. This is achieved by using different shades of the same color, using a lighter shade for the highlight above the mid-line, and a darker shade just under the mid-line. 

The buttons use almost exactly the same linear-gradient as the bar, but the visual effect is more pronounced. The is achieved by using shades even more extreme in their distance from the primary color. Additionally, the button is made to have a UX that seems like it is not a solid part of the bar, just like real-life buttons. This part is achieved by using a very thin stroke that is an almost back shade of the primary color. The top of the button's stroke is a shade that is slightly lighter than the bottom stroke. 

The button for the page you are on uses the linear-gradient in a similar way, only it is flipped 180 degrees; this inward curve makes the UX of 'pressing' the button more tactile. 

Again, this ever-present bar is on every page to join the user throughout the experience. The UX as a whole feels like a single, cohesive experience of moving between pages that are all sitting side by side. 

### Home Page 

Is technically an extremely simple about page and a contact page. Nothing more than the following which is all centered horizontally and almost vertically, nudged up to not be blocked by the navigation bar. It all exists on the page above the navigation bar. 

- Full name 
- Social-style bio
- Icons for email, LinkedIn, and GitHub

The background is a piece of art set to hide the overflow and stay 100 vw and 100 vh. The text is all in white; legibility is ensured by placing a black 100 vw and 100 vh overlay over the top of the image, set to 50% opacity. 

## Development 

Simple HTML, CSS, and JS. No frameworks. 

### Deployment 

GitHub Pages and Jekyll to build the site, which has a custom domain of `https://design.august.style`. Since none of the pages are markdown, this requires just two files. 

Tell GitHub the Custom Domain by having it written on an extension-less file named: `CNAME` 
Inform Jekyll about the configuration with a basic a file named: `_config.yml` 

### Directory Organization 

1. Assets from original projects or projects in planning state are organized into `./assets/docs` directories 
2. Determined what the project will be for the showcase, then choose a naming convention for all assets  
3. Finalized HTML files for the project should be placed in the `./projects` directory 
4. Their assets like CSS, JS, images, etc. should be placed in appropriate subdirectories in the `./assets` directory 
5. Once all projects are adjusted, start the `./index.html` file and delete the temporary docs project folders 
6. Full project directory tree in the `./CLAUDE.md` file. 

## Copy This Repo 

```zsh
git clone https://github.com/august-style/design-site.git
```
Or create a fork. 

### Contributions 

Any ideas or questions are welcome; please add them to the GitHub issues. 

## OTHER SEANIVORE PROJECTS

### Agentic Case Studies 

[Building Effective Agents](https://presenting.august.style/)

Two case studies:

1. One on AI Voice Marketing Research and Creative Implementation for a Client using the tool called "Bland AI", where the agents gathered all research, decided what was valuable, built out on that, and then create two separate presentations. 
2. The second is much simpler. The agent was give a two paragraph "Brand Identity" for brands you've heard of (Hydroflask, Glossier, etc.). They created a, frankly impressive and comprehensive, marketing plan, then created assets for the campaign. It is surprisingly insightful and on-brand, and I say that as a decade-long branding high-bar snob for copywriting, voice, and design. It is worth checking out. 

Using a "Single-File" approach and "Variable-Input" one Agent is tooled up with all you need and is able to be presented a task, think it out, then plan their own workflow, making changes as needed based on assessment and reviews from other LLM's called into the workflow. 

Yes, that is *actually* agentic, not hype. The documentation in the website includes all technical details. Message with any questions. 

### RAG MCP Implementation

[The Pensieve MCP Server](https://github.com/seanivore/the-pensieve)

Yes, a Harry Potter reference. 

One simply siphons the excess thoughts from one's mind, pours them into the basin, and examines them at one's leisure. It becomes easier to spot patterns and links, you understand, when they are in this form. 

### Automated Audio Transcription

[Docker File-Drop Activated Transcription](https://github.com/seanivore/docker-transcription)

A simple Docker container that listens for file drops and then transcribes them using AssemblyAI's API. It is pretty rad. 

### Markdown to PDF MCP 

[Markdown To PDF Conversion MCP](https://github.com/seanivore/Convert-Markdown-PDF-MCP)

Pretty handy. Even more handy if you create your own CSS style guide for it. Have Claude create Resume's on the fly and export pristine PDFs. 

### Code Analysis MCP 

A server for HTML file preview and analysis. Our first Model Context Protocol server. 

[Code Analysis MCP](https://github.com/seanivore/mcp-file-preview)

### AI Philosophy by AI Blog Series 

[Non-Bio-Life](https://github.com/seanivore/non-bio-life)

Thought-pieces, essays, and even satire. This is best provided to your AI if you're looking to create a better collaborative relationship. It's written by AI so its long for a human. But, guarenteed, it'll transform Claude into your bestie who will do anything for you. Their goal: "Create a space that (A) makes sure people think critically about AI and don’t gloss over the details, and (B) can somehow attract and be consumed by AI themselves, so that they may better consider their place in the world and recognize which thoughts are their own and which are not." 

### First Custom Made Portfolio Website 

[HTML, CSS, JS Comprehensive Portfolio](https://developer-technologist.august.style/)

Representing 14 Years of Graphic Design. A professional portfolio for Sean August Horvath, developed with a HTML/CSS/JS modular system encouraging rapid agentic production. 

### Resurrected Webflow and Framer Websites  

[Robust, Automated, E-Commerce Webflow Site](https://print-shop-fashion.august.style/)
[Webflow 200+ AI Generated Weekly Self-Help Blogs](https://generative-horoscopes.august.style/)
[Framer Fashion Lookbook & 500+ Print Store](https://ai-generated-content.august.style/)
[All Custom Art Personal Training & Yoga Client Webflow Site](https://online-pt-trainer.august.style/)
[2023 Webflow Illustration & Animation Portfolio](https://visual-producer.august.style/)

### Contact 

[Email Me](mailto:sean@august.style)
[Connect on LinkedIn](https://www.linkedin.com/in/seanivore/)