# About Design Portfolio Vision 
--> design.august.style/ 

## Prologue 

When I look at [my old, current portfolio](https://www.developer-technologist.august.style/), I see a few things. Ironically, they are all rules I learned to live by in marketing from years of creating viral social media content. In those days I was the one who the organization came to when they needed a visual story. I approved to denied posting of items people emailed daily, reply with "great ty" and nothing more because we knew we'd never post it. I was incredibly selective. That entire writing [guide about emotion-driven marketing copywriting](./assets/docs/emotion-driven-copywriting.md) came from this same selective process: The gut check. I was know for my high bar, it even took me a while to accept the perceived snobbery. 

**HIGH STANDARD SEAN IS BACK FOR THIS NEW PORTFOLIO** 

### The Inspiration

Or as we'd call it back in those social media days: DAILY INSPO. This is a portfolio from a [vibe developer on Twitter and AI influencer on YouTube](https://www.alex-moulinneuf.fr/about). Calls himself a 'Creative Developer' which is smart in-and-of-itself. The design is also very tech cutting-edge, but that is not the main point of my saving this example. 

The biggest takeaways are conceptual. They are about what it is to have a portfolio. It makes you question how much of a story it supposed to be told. We default to calling things 'Case Studies' but I'm not an agency. In the current landscape I need to be focused on selling myself. That means I need to use the same tactics that the emotion-driven marketing copywriting guide teaches. I need to go for a gut check. I need to only give them enough to want more. It seems counterintuitive not to explain everything about a project, but that's not the right approach for the kind of portfolio this needs to be. 

  - It is so simple, with almost nothing on the front page 
  - The front page is fully about the visual aspect; the beams of light coming through move as you scroll down 
  - The photo of image is in a circle reminiscent of social media profile pictures 
  - The only thing under his name is *"🇫🇷 Based in Paris, France"* and then *"💼 Open to full-time opportunities"* 
  - As you scroll down a few sentences of text appears, and they highlight themselves as you scroll down further 
  - *"I'm a French creative web developer with 6+ years of experience working with companies like Shadow.tech and TF1. I'm also a teacher and senior lecturer, passionate about experimenting and pushing the boundaries of web development."* 
  - Then after a few line breaks *"I appeared here"* 
  - Then a bit further down a few thumbnails of videos he was in fly into the screen lining themselves up in a row 
  - The last thing on the page, nothing else, are three button icons: LinkedIn, GitHub, and Email 
  - No other text or anything else, not even to get to the projects 

You get to the projects section via the fixed top navigation which has only two words: Projects | About. Then on the left side of the fixed top navigation is the current local time.

*I feel like it is important to pause an appreciate the simplicity of that page. The rest of the site is just as simple, but down to the time, using the 3D simple effect, and the scroll down forever trick. It is smart because it takes simple and does it right and nothing more.* 

On the project page, the entire viewport is a single project. There is a row of icons for each project across the top left of the screen. It all makes visual sense because he has been designing games that people love using three.js. Mario Kart and Super Mario Bros. are the two most popular. Those are the only two projects that you can click through to anything more, and it is a click through to play the game. Not to talk about the project or strategy and anything else. 

It employs what I always say when we redesign my resume. I pull out all the words like "exceptional" and say "Just let the work, or stats, speak for themselves. Well here is a big heads up that I need to do the same for my portfolio. And why not? It makes it easier to create. 

### The Upgrade 

This is the first time I've ever had all my previous website builds be made still available because we pulled them from Webflow and Framer, made them work locally, and then published them to GitHub Pages. 

I was initially picturing them as just large, portrait-oriented videos that scrolled horizontally, giving room to add other items below that section. While I know I don't want actual MP3 videos on the site to slow it down, I know I need to show the sites as they are scrolling. 

I didn't mind them clicking to the old site to see it, but that didn't solve the need for the motion on my portfolio. Coupled with that, is that not all of them are *perfect* recreations. The store site was just too big and the art deco site was missing some images. All fixable but I can only spend so long fixing them up. 

But then the idea clicked. 

**PULL A SINGLE PAGE FROM EACH SITE AND INTEGRATE THEM INTO THE NEW PORTFOLIO** 

The next day, still puzzling on how to pull that all together, I realized that we're already doing it on the new presentation decks that scroll horizontally. There's [this example](https://presenting.august.style/ai-voice-sales-development) and then there's [this example](https://presenting.august.style/implement-ai-voice-marketing). 

Now I don't think we'll do the same "just one wide page" approach if we can get the page changes to swipe like a video transition effect. Each their own new page makes sense for having each one be from a different website. The navigation system will need to remain sticky and *not* slide with the page content, which might be more challenging. And we need to consider the literal HOURS of troubleshooting using a component navigation system on that example site, because it was a nightmare that we only got rid of in the end, but here on a site that is multiple pages going horizontally instead of just one wide page, we might want to try it. 

The last bit of the puzzle came together from the magic that is the [simple perfection of this home page](https://presenting.august.style). The glass in front of a fully CSS animation is such a simple and effective way to make a website feel more interactive. So we'll do that again but with a new animation I think I have figured out. 

I'll describe the design of that, as well as the UI for the navigation, and everything else in the next section. 

> Presentation decks specifics found in this directory: `/Users/seanivore/Development/presentation-decks/` 