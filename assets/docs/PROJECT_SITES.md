# Project Sites 

```plaintext
so i guess #1 is what i was imagining too, but i just assumed that having HTML and all the linked assets would be a head start and that we'd just need to tweak some thing to make it prettier lol.   

I guess the only thing i'm getting stuck over with donig this route is that the nav for this site was the only other wow part other than the images. because it was so compact but that little oval there are so many menus lol  

okay let's just do it. the background on this ressurected site is blah anyway -- just FYI this is def the worst of them all because it was so big and hard to put back togther. 

but i think to pull of showing off this section and being all Webflow Ecommerce Shop Legit, we should try to do an aesthetic page and a product page as well. I attached images and they both have a TON of related photos but we can just not do that many lol. 

But so I added the URL and HTML absolute path for that print series page, a print product page, and an aesthetic page all to the PROJECT_SITES.md -- But we can start with one and see how it goes. 
``` 

1. Choose which to do next and have Sean take screenshots of the page so that we can decide how to adjust it to be showcased. 
2. Gather assets for the project page entry pulling from the live site or old directory
3. Place unadjusted assets into their own directory in the `./assets/docs` directory listed below 
4. Adjust entry for project page, placing their assets in the appropriate assets subdirectory, named to match the HTML files
5. Place the adjusted HTML file into the `./projects` directory, again matching the name of the project 
6. Once all projects are adjusted, start the `./index.html` file and delete the temporary docs project folders 

## 1. CSS Animation Product Feature Landing Page 
`./projects/animated-product-landing.html`: This was a HTML/CSS/JS project created recently. I love the home page with it's glass buttons and CSS motion background. Let's make it into a template for a SaaS product landing page or something similar. I've already moved the essentials for the page to function in this directory. It includes: 

**Are in this directory, ready to be adjusted**

- JS animation: `./assets/js/wave-animation.js`
- Page CSS: `./assets/css/animated-product-landing.css`
- Animation CSS: `./assets/css/wave-animation.css` 

## 2. Scrolling Presentations
This could be turned into some kind of template. We would need to adjust them so that they are vertically scrollable instead, but the design and slide panels are all there. 

**Two that are ready to be adjusted and have been moved into this directory**

- Charcoal: `https://presenting.august.style/ai-voice-sales-development` 
- Blue: `https://presenting.august.style/implement-ai-voice-marketing`

- Project: `./assets/docs/02-scrolling-presentations`

## 3. Webflow Store 
Goal with showing these off would be that this was a massive store built on Webflow. I have below a Print Series page, a single Product Page, and a Shop by Aesthetic page. I made a copy of each of the HTML files and noted the path below. 

1. Create a new, clean HTML file in the projects directory
2. Extract just the images needed using a script to find all image paths
3. Build a simplified version of the page that focuses on the visual aesthetics

  **'Retro Futurism Realized' Mid-Century Modern Print Series**
  - 03-webflow-store-print-series.html
    - `./assets/docs/03-webflow-store/print-series/03-webflow-store-print-series.html`
    - [Live webpage](https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/original-print-series/iconic-2-dimensional-geometric-abstraction-mid-century-prints.html)
    - `/Users/seanivore/Development/webflow-store/understand-trends/buy-historic-artwork/original-print-series/iconic-2-dimensional-geometric-abstraction-mid-century-prints.html`

  **'Speed Limits Enforced By Aircraft' Print Product Page**
  - 03-webflow-store-product-page.html
    - `./assets/docs/03-webflow-store/product-page/03-webflow-store-product-page.html`
    - [Live webpage](https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/original-single-edition-prints/visionary-surreal-abstract-futurism-monochrome-geometry-architectural-sculpture.html)
    - `/Users/seanivore/Development/webflow-store/understand-trends/buy-historic-artwork/original-single-edition-prints/visionary-surreal-abstract-futurism-monochrome-geometry-architectural-sculpture.html`

  **Shop By Vintage Aesthetic**
  - 03-webflow-store-aesthetic.html
    - `./assets/docs/03-webflow-store/aesthetic/03-webflow-store-aesthetic.html`
    - [Live webpage](https://print-shop-fashion.august.style/understand-trends/buy-historic-artwork/shop-prints-by-aesthetic/vintage.html)
    - `/Users/seanivore/Development/webflow-store/understand-trends/buy-historic-artwork/shop-prints-by-aesthetic/vintage.html`

## 4. Autumn Lookbook 
Framer Autumn Fashion Lookbook, AI Generated In-Painted Photos; This is a long page but it is probably almost perfect as it is, once separated from the rest of the site. We could add more robust descriptions and pricing information next to each image. Wow, so I copied the HTML file to this project directory and it is all self-contained; CSS and everything. Ah, but I see, the images are still on the framer CDN server, but at least they're all there. 

  **Autumn Fashion Lookbook** 
  - 04-autumn-lookbook.html
    - `./assets/docs/04-autumn-lookbook/04-autumn-lookbook.html`
    - [Live webpage](https://ai-generated-content.august.style/lookbook)
    - `/Users/seanivore/Development/framer-cms-lookbook/lookbook.html`

## 5. Webflow Blog 
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

## 6. Summer Lookbook 
Webflow Summer Fashion Lookbook, AI Generated In-Painted Photos; This is a book that you page through. It would work best if we pull a few pages and combine them into one new longer page, sort of like the earlier lookbook but maybe this one could be an online store instead of a magazine. 

  **Art Nouveau Outfit Elegance** 
  - 06-summer-lookbook-art-nouveau.html
    - `./assets/docs/06-summer-lookbook/art-nouveau/06-summer-lookbook-art-nouveau.html`
    - [Live webpage](https://print-shop-fashion.august.style/fashion/lookbook/flowy-wide-leg-trousers-botanical-prints-linen-drawstring-pants-corset-inspired-lacework-lightweight-duster.html)
    - `/Users/seanivore/Development/webflow-store/fashion/lookbook/flowy-wide-leg-trousers-botanical-prints-linen-drawstring-pants-corset-inspired-lacework-lightweight-duster.html`

  **Tranquil Impressionist Garments** 
  - 06-summer-lookbook-impressionist.html
    - `./assets/docs/06-summer-lookbook/impressionist/06-summer-lookbook-impressionist.html`
    - [Live webpage](https://print-shop-fashion.august.style/fashion/lookbook/futurism-propelling-fashion-into-the-future.html)
    - `/Users/seanivore/Development/webflow-store/fashion/lookbook/futurism-propelling-fashion-into-the-future.html`

  **Flowing Romanticism Looks**
  - 06-summer-lookbook-romanticism.html
    - `./assets/docs/06-summer-lookbook/romanticism/06-summer-lookbook-romanticism.html`
    - [Live webpage](https://print-shop-fashion.august.style/fashion/lookbook/soft-flowing-styles-pisces-spirit-nurturing.html)
    - `/Users/seanivore/Development/webflow-store/fashion/lookbook/soft-flowing-styles-pisces-spirit-nurturing.html`

## 7. Yoga Services 
Custom Hand Illustrated Client Site; Small site and URL can be provided to probably good with just one page. We'll probably just want to make it look more like a feature page for signing up for the online PT service. 

**Yoga Services**
- 07-yoga-services.html
  - `./assets/docs/07-yoga-services/07-yoga-services.html`
  - [Live webpage](https://online-pt-trainer.august.style/)
  - `/Users/seanivore/Development/webflow-client-ckheals/index.html`

----

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