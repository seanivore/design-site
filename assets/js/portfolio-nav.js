// Portfolio Navigation
const portfolioProjects = [
    {
        id: 'saas-landing',
        title: 'SaaS Product Sales',
        subtitle: 'CSS Animation & Micro-Interactions with a Modular, Versatile Design',
        pages: [
            'css-anim-saas-landing.html',
            'saas-css-anim-signup.html',
            'css-saas-profile-setup.html'
        ]
    },
    {
        id: 'autumn-lookbook',
        title: 'AI Generated Fashion Magazine',
        subtitle: 'Luxury Looks Pull From Historic Art Movements & Are Designed for Relatable Archetypes',
        pages: [
            'autumn-lookbook-part-1.html',
            'autumn-lookbook-part-2.html',
            'autumn-lookbook-part-3.html'
        ]
    },
    {
        id: 'webflow-store',
        title: 'Webflow E-Commerce 500+ Product Store',
        subtitle: 'Single-Edition Prints Showcasing 30+ Art Movements with AI Staged Photographs',
        pages: [
            'webflow-print-series.html',
            'webflow-product-page.html'
        ]
    },
    {
        id: 'summer-lookbook',
        title: 'Fashion Guide With Solution Oriented Styles',
        subtitle: 'Google Lens API Integration Is Steps Away from Implementation',
        pages: [
            'summer-lookbook-part-1.html',
            'summer-lookbook-part-2.html',
            'summer-lookbook-part-3.html',
            'summer-lookbook-part-4.html'
        ]
    },
    {
        id: 'mindflow-app',
        title: 'AI-Guided Yoga & Meditation App',
        subtitle: 'Interaction Is Handled By the AI & No Typing Required',
        pages: ['mindflow-app.html']
    },
    {
        id: 'admin-dashboard',
        title: 'AI-Data Visualization Dashboard',
        subtitle: 'CSS Animated Charts For Rarely Captured Data Before AI-Led Teen Planning App',
        pages: ['ai-admin-dashboard.html']
    }
];

let portfolioCurrentProject = 0;
let portfolioCurrentPage = 0;
let navStateIsOn = true; // Track the nav state

function initPortfolioNav() {
    // Create shade overlay
    const shade = document.createElement('div');
    shade.className = 'portfolio-shade';
    document.body.appendChild(shade);

    // Create navigation container
    const nav = document.createElement('nav');
    nav.className = 'portfolio-nav nav-on'; // Start in ON state

    portfolioProjects.forEach((project, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'portfolio-nav-item';
        navItem.dataset.project = index;

        const circle = document.createElement('div');
        circle.className = 'portfolio-nav-circle';

        const title = document.createElement('div');
        title.className = 'portfolio-nav-title';
        title.textContent = project.title;

        navItem.appendChild(circle);
        navItem.appendChild(title);

        // Add page dots for multi-page projects
        if (project.pages.length > 1) {
            const dots = document.createElement('div');
            dots.className = 'portfolio-nav-dots';

            project.pages.forEach((_, pageIndex) => {
                const dot = document.createElement('div');
                dot.className = 'portfolio-nav-dot';
                dot.dataset.page = pageIndex;
                dots.appendChild(dot);
            });

            navItem.appendChild(dots);

            // Add page navigation circles (left/right)
            const pageNavCircles = document.createElement('div');
            pageNavCircles.className = 'page-nav-circles';

            // Left arrow
            const leftNav = document.createElement('div');
            leftNav.className = 'page-nav-circle prev-page';
            leftNav.innerHTML = '<i class="fas fa-arrow-left"></i>';
            leftNav.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateToPrevPage();
            });

            // Right arrow
            const rightNav = document.createElement('div');
            rightNav.className = 'page-nav-circle next-page';
            rightNav.innerHTML = '<i class="fas fa-arrow-right"></i>';
            rightNav.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateToNextPage();
            });

            pageNavCircles.appendChild(leftNav);
            pageNavCircles.appendChild(rightNav);
            navItem.appendChild(pageNavCircles);
        }

        // Main click handler for project navigation
        navItem.addEventListener('click', () => handleNavClick(index));
        nav.appendChild(navItem);
    });

    document.body.appendChild(nav);
    parsePortfolioLocation();
    updateActiveStates();
    setNavigationState();
}

function handleNavClick(index) {
    if (navStateIsOn) {
        // We're in the ON state and selecting a project
        portfolioCurrentProject = index;
        portfolioCurrentPage = 0;
        const project = portfolioProjects[index];

        // Switch to OFF state and navigate to the first page
        navStateIsOn = false;
        setNavigationState();
        window.location.href = project.pages[0];
    } else {
        // We're in the OFF state and clicking the active project
        // to go back to the ON state
        navStateIsOn = true;
        setNavigationState();
    }
}

function setNavigationState() {
    const nav = document.querySelector('.portfolio-nav');
    const shade = document.querySelector('.portfolio-shade');

    if (navStateIsOn) {
        // ON state: show all projects, show shade
        nav.className = 'portfolio-nav nav-on';
        shade.classList.remove('hidden');
    } else {
        // OFF state: show only active project, hide shade
        nav.className = 'portfolio-nav nav-off';
        shade.classList.add('hidden');
    }

    updateActiveStates();
}

function navigateToNextPage() {
    const project = portfolioProjects[portfolioCurrentProject];
    let nextPage = portfolioCurrentPage + 1;

    if (nextPage >= project.pages.length) {
        nextPage = 0; // Loop back to first page
    }

    portfolioCurrentPage = nextPage;
    window.location.href = project.pages[nextPage];
}

function navigateToPrevPage() {
    const project = portfolioProjects[portfolioCurrentProject];
    let prevPage = portfolioCurrentPage - 1;

    if (prevPage < 0) {
        prevPage = project.pages.length - 1; // Loop to last page
    }

    portfolioCurrentPage = prevPage;
    window.location.href = project.pages[prevPage];
}

function parsePortfolioLocation() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();

    portfolioProjects.forEach((project, projectIndex) => {
        const pageIndex = project.pages.indexOf(filename);
        if (pageIndex !== -1) {
            portfolioCurrentProject = projectIndex;
            portfolioCurrentPage = pageIndex;
            navStateIsOn = false; // If viewing a project, nav should be in OFF state
        }
    });
}

function updateActiveStates() {
    // Update nav item active states
    const navItems = document.querySelectorAll('.portfolio-nav-item');
    navItems.forEach((item, i) => {
        item.classList.toggle('active', i === portfolioCurrentProject);
    });

    // Update the current project's page dots
    const activeItem = navItems[portfolioCurrentProject];
    if (activeItem) {
        const dots = activeItem.querySelectorAll('.portfolio-nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === portfolioCurrentPage);
        });

        // Update title to include subtitle in OFF state
        if (!navStateIsOn) {
            const titleElement = activeItem.querySelector('.portfolio-nav-title');
            const project = portfolioProjects[portfolioCurrentProject];
            if (titleElement && project.subtitle) {
                titleElement.textContent = project.title;
            }
        }

        // Update visibility of page navigation based on page count
        const pageNavCircles = activeItem.querySelector('.page-nav-circles');
        if (pageNavCircles) {
            const project = portfolioProjects[portfolioCurrentProject];
            pageNavCircles.style.display = project.pages.length > 1 ? 'flex' : 'none';
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPortfolioNav);