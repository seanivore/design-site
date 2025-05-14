# Web Asset Showcase 

## Overview

This is a simple web asset showcase intended to pull a select portion of a project, polish it up, and then include that only. It is a 'walled garden' approach that allows one to revamp portfolio sites to showcase the most in-demand web assets at that time. 

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

## Important Files 

ALL PROJECTS ARE IN THE FOLDER: `./projects`
All PROJECT CSS IS IN THE FOLDER: `./assets/css`
All PROJECT JS IS IN THE FOLDER: `./assets/js`
All PROJECT IMAGES ARE IN THE FOLDER: `./assets/images`

PROJECT PREPARATION WAS KEPT ORGANIZED IN THE FOLDER: `./assets/docs`

Find a full project directory tree in the `./CLAUDE.md` file where there are details on how to update the to main parts or the entire project as trends and styles change over time. 

## Copy This Repo 

```zsh
git clone https://github.com/august-style/design-site.git
```
Or create a fork. Any ideas or questions are welcome; please add them to the GitHub issues. 