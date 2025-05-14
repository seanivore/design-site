// Portfolio Navigation - Fresh implementation
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

// State management
let currentProjectIndex = null;
let currentPageIndex = 0;
let navIsInOnState = true;

// DOM elements
let navElement;
let shadeElement;
let navItems = [];
let projectTitle;
let projectSubtitle;

// Initialize the navigation
function initPortfolioNav() {
    // Create the overlay shade
    shadeElement = document.createElement('div');
    shadeElement.className = 'portfolio-shade';
    document.body.appendChild(shadeElement);

    // Create title display elements for the ON state
    const titleDisplay = document.createElement('div');
    titleDisplay.className = 'portfolio-title-display';

    projectTitle = document.createElement('h2');
    projectTitle.className = 'portfolio-hover-title';

    projectSubtitle = document.createElement('p');
    projectSubtitle.className = 'portfolio-hover-subtitle';

    titleDisplay.appendChild(projectTitle);
    titleDisplay.appendChild(projectSubtitle);
    document.body.appendChild(titleDisplay);

    // Create the main navigation container
    navElement = document.createElement('nav');
    navElement.className = 'portfolio-nav nav-on';
    document.body.appendChild(navElement);

    // Create project nav items
    portfolioProjects.forEach((project, index) => {
        createNavItem(project, index);
    });

    // Check URL to determine current page and state
    determineStateFromURL();

    // Set initial state
    updateNavState();
}

// Create a single nav item
function createNavItem(project, index) {
    const navItem = document.createElement('div');
    navItem.className = 'portfolio-nav-item';
    navItem.dataset.index = index;

    // The circular button
    const circle = document.createElement('div');
    circle.className = 'portfolio-nav-circle';

    // Small title above circle in OFF state
    const title = document.createElement('div');
    title.className = 'portfolio-nav-title';
    title.textContent = project.title;

    // Page dots for multi-page projects
    if (project.pages.length > 1) {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'portfolio-nav-dots';

        for (let i = 0; i < project.pages.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'portfolio-nav-dot';
            dot.dataset.pageIndex = i;
            dotsContainer.appendChild(dot);
        }

        navItem.appendChild(dotsContainer);

        // Page navigation arrows
        const pageNavContainer = document.createElement('div');
        pageNavContainer.className = 'page-nav-circles';

        // Left arrow
        const prevBtn = document.createElement('div');
        prevBtn.className = 'page-nav-circle';
        prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateToPrevPage();
        });

        // Right arrow
        const nextBtn = document.createElement('div');
        nextBtn.className = 'page-nav-circle';
        nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateToNextPage();
        });

        pageNavContainer.appendChild(prevBtn);
        pageNavContainer.appendChild(nextBtn);
        navItem.appendChild(pageNavContainer);
    }

    // Hover event for the ON state
    navItem.addEventListener('mouseenter', () => {
        if (navIsInOnState) {
            projectTitle.textContent = project.title;
            projectSubtitle.textContent = project.subtitle;
            document.querySelector('.portfolio-title-display').classList.add('visible');
        }
    });

    navItem.addEventListener('mouseleave', () => {
        if (navIsInOnState) {
            document.querySelector('.portfolio-title-display').classList.remove('visible');
        }
    });

    // Click event
    navItem.addEventListener('click', () => {
        handleNavItemClick(index);
    });

    navItem.appendChild(circle);
    navItem.appendChild(title);
    navElement.appendChild(navItem);
    navItems.push(navItem);
}

// Handle nav item click
function handleNavItemClick(index) {
    if (navIsInOnState) {
        // We're in the ON state - switch to OFF and navigate to project
        currentProjectIndex = index;
        currentPageIndex = 0;
        navIsInOnState = false;

        // Update visual state immediately to prevent incorrect state
        updateNavState();

        // Navigate to the first page of the selected project
        const project = portfolioProjects[index];
        window.location.href = project.pages[0];
    } else if (index === currentProjectIndex) {
        // We're in the OFF state and clicked the currently active project
        // Switch back to ON state
        navIsInOnState = true;
        updateNavState();
    }
}

// Update navigation visual state based on internal state
function updateNavState() {
    // Update navigation container class
    navElement.className = navIsInOnState ? 'portfolio-nav nav-on' : 'portfolio-nav nav-off';

    // Update shade visibility
    if (navIsInOnState) {
        shadeElement.classList.remove('hidden');
    } else {
        shadeElement.classList.add('hidden');
    }

    // Update active project and page indicators
    navItems.forEach((item, index) => {
        const isActive = index === currentProjectIndex;
        item.classList.toggle('active', isActive);

        // Update page dots if this is the active project
        if (isActive && currentProjectIndex !== null) {
            const dots = item.querySelectorAll('.portfolio-nav-dot');
            dots.forEach((dot, pageIndex) => {
                dot.classList.toggle('active', pageIndex === currentPageIndex);
            });
        }
    });

    // Hide title display in OFF state
    document.querySelector('.portfolio-title-display').classList.toggle('visible', false);
}

// Determine state from current URL
function determineStateFromURL() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();

    // If we're on the projects.html page, force ON state
    if (filename === 'projects.html') {
        navIsInOnState = true;
        currentProjectIndex = null;
        return;
    }

    // Check if we're on a specific project page
    let foundPage = false;

    portfolioProjects.forEach((project, projectIndex) => {
        const pageIndex = project.pages.indexOf(filename);
        if (pageIndex !== -1) {
            currentProjectIndex = projectIndex;
            currentPageIndex = pageIndex;
            navIsInOnState = false;
            foundPage = true;
        }
    });

    // If not on a project page, default to ON state
    if (!foundPage) {
        navIsInOnState = true;
        currentProjectIndex = null;
    }
}

// Navigate to the next page in the current project
function navigateToNextPage() {
    if (currentProjectIndex === null) return;

    const project = portfolioProjects[currentProjectIndex];
    currentPageIndex = (currentPageIndex + 1) % project.pages.length;
    window.location.href = project.pages[currentPageIndex];
}

// Navigate to the previous page in the current project
function navigateToPrevPage() {
    if (currentProjectIndex === null) return;

    const project = portfolioProjects[currentProjectIndex];
    currentPageIndex = (currentPageIndex - 1 + project.pages.length) % project.pages.length;
    window.location.href = project.pages[currentPageIndex];
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', initPortfolioNav);