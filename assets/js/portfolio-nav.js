// Portfolio Navigation System
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

// Initialize the navigation
function initPortfolioNav() {
    // Create the darkened overlay
    const shadeElement = document.createElement('div');
    shadeElement.className = 'portfolio-shade';
    document.body.appendChild(shadeElement);

    // Create title display in the middle third
    const titleDisplay = document.createElement('div');
    titleDisplay.className = 'portfolio-title-display';

    const projectTitle = document.createElement('h2');
    projectTitle.className = 'portfolio-hover-title';

    const projectSubtitle = document.createElement('p');
    projectSubtitle.className = 'portfolio-hover-subtitle';

    titleDisplay.appendChild(projectTitle);
    titleDisplay.appendChild(projectSubtitle);
    document.body.appendChild(titleDisplay);

    // Create the main navigation container in the bottom third
    const navElement = document.createElement('nav');
    navElement.className = 'portfolio-nav nav-on';
    document.body.appendChild(navElement);

    // Create project navigation items
    portfolioProjects.forEach((project, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'portfolio-nav-item';
        navItem.dataset.index = index;
        navItem.dataset.id = project.id;

        // Create the circular button
        const circle = document.createElement('div');
        circle.className = 'portfolio-nav-circle';

        // Create project title that appears above the circle
        const title = document.createElement('div');
        title.className = 'portfolio-nav-title';
        title.textContent = project.title;

        // Add page dots for multi-page projects
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

            // Add page navigation controls
            const pageNavContainer = document.createElement('div');
            pageNavContainer.className = 'page-nav-circles';

            // Previous page button
            const prevBtn = document.createElement('div');
            prevBtn.className = 'page-nav-circle';
            prevBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateToPrevPage();
            });

            // Next page button
            const nextBtn = document.createElement('div');
            nextBtn.className = 'page-nav-circle';
            nextBtn.innerHTML = '<i class="fas fa-arrow-down"></i>';
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateToNextPage();
            });

            pageNavContainer.appendChild(prevBtn);
            pageNavContainer.appendChild(nextBtn);
            navItem.appendChild(pageNavContainer);
        }

        // Add hover effects to show project title in the middle third
        navItem.addEventListener('mouseenter', () => {
            if (navIsInOnState) {
                projectTitle.textContent = project.title;
                projectSubtitle.textContent = project.subtitle;
                titleDisplay.classList.add('visible');
            }
        });

        navItem.addEventListener('mouseleave', () => {
            if (navIsInOnState) {
                titleDisplay.classList.remove('visible');
            }
        });

        // Handle navigation click
        navItem.addEventListener('click', () => {
            handleNavClick(index);
        });

        navItem.appendChild(circle);
        navItem.appendChild(title);
        navElement.appendChild(navItem);
    });

    // Set initial state based on URL
    determineStateFromURL();
    updateNavigationState();

    // Add nav-active class to body when navigation is active
    document.body.classList.add('nav-active');
}

// Handle navigation item click
function handleNavClick(index) {
    if (navIsInOnState) {
        // Switch to OFF state and navigate to project
        currentProjectIndex = index;
        currentPageIndex = 0;
        navIsInOnState = false;
        updateNavigationState();

        // Navigate to the project page
        const project = portfolioProjects[index];
        const pageURL = isOnRootPage() ? 'projects/' + project.pages[0] : project.pages[0];
        window.location.href = pageURL;
    } else if (index === currentProjectIndex) {
        // Clicked on active project, return to ON state
        navIsInOnState = true;
        updateNavigationState();

        // Navigate back to projects page if not already there
        if (!isOnRootPage()) {
            window.location.href = '../projects.html';
        }
    } else {
        // Clicked on different project while in OFF state
        currentProjectIndex = index;
        currentPageIndex = 0;
        updateNavigationState();

        // Navigate to the new project
        const project = portfolioProjects[index];
        const pageURL = isOnRootPage() ? 'projects/' + project.pages[0] : project.pages[0];
        window.location.href = pageURL;
    }
}

// Check if we're on the main projects page
function isOnRootPage() {
    const path = window.location.pathname;
    return path.endsWith('/projects.html') || path.endsWith('/projects');
}

// Update navigation visual state
function updateNavigationState() {
    const navElement = document.querySelector('.portfolio-nav');
    const navItems = document.querySelectorAll('.portfolio-nav-item');
    const shadeElement = document.querySelector('.portfolio-shade');

    // Update navigation container class
    if (navIsInOnState) {
        navElement.className = 'portfolio-nav nav-on';
        shadeElement.classList.remove('hidden');
    } else {
        navElement.className = 'portfolio-nav nav-off';
        shadeElement.classList.add('hidden');
    }

    // Update active project and page indicators
    navItems.forEach((item, index) => {
        if (index === currentProjectIndex) {
            item.classList.add('active');

            // Update page dots if this is the active project
            const dots = item.querySelectorAll('.portfolio-nav-dot');
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === currentPageIndex);
            });
        } else {
            item.classList.remove('active');
        }
    });

    // Hide title display in OFF state
    document.querySelector('.portfolio-title-display').classList.remove('visible');
}

// Determine initial state from URL
function determineStateFromURL() {
    const path = window.location.pathname;

    // If we're on the projects.html page, start in ON state
    if (isOnRootPage()) {
        navIsInOnState = true;
        currentProjectIndex = null;
        return;
    }

    // We're on a project page, find which one
    navIsInOnState = false;

    // Extract the filename from the path
    const filename = path.split('/').pop();

    // Find the project and page index
    for (let i = 0; i < portfolioProjects.length; i++) {
        const pageIndex = portfolioProjects[i].pages.indexOf(filename);
        if (pageIndex !== -1) {
            currentProjectIndex = i;
            currentPageIndex = pageIndex;
            return;
        }
    }

    // Default to first project if not found
    currentProjectIndex = 0;
    currentPageIndex = 0;
}

// Navigate to the next page within the current project
function navigateToNextPage() {
    if (currentProjectIndex === null) return;

    const project = portfolioProjects[currentProjectIndex];
    const totalPages = project.pages.length;

    if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        const pageURL = isOnRootPage() ? 'projects/' + project.pages[currentPageIndex] : project.pages[currentPageIndex];
        window.location.href = pageURL;
    }
}

// Navigate to the previous page within the current project
function navigateToPrevPage() {
    if (currentProjectIndex === null) return;

    if (currentPageIndex > 0) {
        currentPageIndex--;
        const pageURL = isOnRootPage() ? 'projects/' + project.pages[currentPageIndex] : project.pages[currentPageIndex];
        window.location.href = pageURL;
    }
}

// Initialize the navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolioNav);