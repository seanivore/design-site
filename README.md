# Web Asset Showcase 

## Overview

This is a simple web asset showcase intended to pull a select portion of a project, polish it up, and then include that only. It is a 'walled garden' approach that allows one to revamp portfolio sites to showcase the most in-demand web assets at that time. 

### Goal 
To create extremely high-value, polished, B2B/B2C web development designer's showcase. 
  - Show common website UX flows through series of instances of a project 
  - Expand my current design portfolio, while also narrowing it down to specific needs of B2B/B2C tech companies 
  - In at least one case, create high-fidelity product images for an iPhone app 
  - For app UX/UI, start with an existing app, recreate UX/UI flow, then adjust to fit needs of imaginary project 

### Projects Showcase:
  - Modern form design patterns
  - Micro-interactions and loading states
  - Responsive layouts
  - Accessibility considerations
  - Clean, conversion-focused UX

### Great Approach Because:
  - Shows progression - Hiring managers can see you understand multi-step user journeys
  - Demonstrates versatility - Two different animation styles, same high quality
  - Practical value - These are exactly the types of pages companies need
  - Easy to customize - The code structure allows for quick brand color swaps

### Design Theme 

Lean into "simple" to capitalize on making it impressive. Include interactive elements that wow because of smart design, not overly technical development demands. 

Show what they want to see. Think only visually. 

  - Visuals before everything --> they're always the real story 
  - Highest bar --> pass the gut check 

## Project Concept 

The goal is to create a super-polished collection of high-demand digital assets that showcase web development, design, and user experience capabilities. This professional web developer's portfolio features one-page versions of websites, carefully curated and adjusted to fulfill job marketing needs. Within the portfolio's horizontal navigation, pages scroll vertically in a "walled garden" environment where links and inputs are simulated for display purposes. The collection emphasizes commonly sought-after elements like SaaS product landing pages, high-fidelity iOS apps, and administrative dashboards. Each project entry presents either a complete UX flow or selected key pages from the digital project.

### Logic 

When you come across web design portfolios online, unless it is for an agency, there is always a common theme: They have been scrubbed and polished after the fact. They are not the real story. They are examples of the designer's ability to code and implement design, sure, but they are being used to create a new story. 

When going through my websites I'd like to do the same. Some just straight up do need some fixes, but we should look at them as themes that can be crafted into whatever type of websites will be most sought after by companies hiring designers. We might include a URL to see the full site for some of them, but in general I think I'd like to try to avoid needing to do that. The real URLs will be somewhere if someone is really digging, meaning this website can be nothing but perfect examples of work. Make up fictional companies to fill out the projects. 

### Projects Navigation 

Each project is one or more vertical scrolling pages that work in a series or user flow. These are presented as full viewport width and fit content height so that it can be experienced as usual. 

Hovering, fixed over the projects is a navigation bar with glassmorphism circular icons for each project entry. Clicking the icon on the right or left will move to the next or previous project much like a video cut transition. 

When a project is selected there is space to add details about the project, however the primary intention of this project is VISUAL FIRST, VISUAL ABOVE EVERYTHING ELSE. This helps with curation because if the project visual isn't enough on it's own then it should not be included. 

### Home & About Page 

The only other section is a very simple home page that provides little more than your name, a social media style bio, a couple sentences about you, and then just select, maybe three, social or contact links. 

The overall intention of this page is also visual. It should prepare the viewer for the experience without providing anything that could distract them from proceeding to convert as you would like; e.g. click to the project page. Just like Optimizely: Remove the exists and users can only go where you want. Add a gut check and they'll convert, guaranteed. 

## Design 

Specific to the project. The homepage in this case is an old school computer with nothing but a blinking cursor prompt, with a quirky AI concierge on the other side. 

## Development 

The intentional theme we stood by in building this was that simple can be better when simple is done perfectly. We didn't go beyond HTML, CSS, and JS for animations and transitions. We actually ended up nixing our original interactive CSS animation homepage because it was too laggy and trying to create it in a way that performed perfectly, while not overly complicated and totally achievable, it broke the mold of simple done best. It speaks to the largest demographic of users because, even non-visual users, can imagine their own branding on top of the projects. 

### Implementation and Deployment 

The project is deployed via GitHub Pages using Jekyll to build the site, which has a custom domain of `https://design.august.style`. Since none of the pages are markdown, this requires just two files. 

Tell GitHub the Custom Domain: `CNAME` 
Inform Jekyll about the configuration: `_config.yml` 

## Future 

There are a few little improvements for each of the projects to be made to make them more engaging. I'm also considering adding some of my actual client projects where all the art is custom made. We tried to repurpose the artwork for something B2B or B2C but it is art and probably took 12 hours to prefect the client's art site, so doing the same just didn't make sense for this particular type of showcase portfolio. 

## Project Directory Organization 

1. Assets from original projects or projects in planning state are organized into `./assets/docs` directories 
2. Determined what the project will be for the showcase, then choose a naming convention for all assets  
3. Finalized HTML files for the project should be placed in the `./projects` directory 
4. Their assets like CSS, JS, images, etc. should be placed in appropriate subdirectories in the `./assets` directory 
5. Once all projects are adjusted, start the `./index.html` file and delete the temporary docs project folders 

Find a full project directory tree in the `./CLAUDE.md` file where there are details on how to update the to main parts or the entire project as trends and styles change over time. 

## Copy This Repo 

```zsh
git clone https://github.com/august-style/design-site.git
```
Or create a fork. Any ideas or questions are welcome; please add them to the GitHub issues. 

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