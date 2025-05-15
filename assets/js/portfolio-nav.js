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

// Icons for each project (using Font Awesome)
const projectIcons = [
    '<i class="fas fa-laptop-code"></i>',
    '<i class="fas fa-tshirt"></i>',
    '<i class="fas fa-store"></i>',
    '<i class="fas fa-book-open"></i>',
    '<i class="fas fa-spa"></i>',
    '<i class="fas fa-chart-bar"></i>'
];

// Initial page title that displays on load
const initialPageTitle = "Web Asset Showcase";
const initialPageSubtitle = "In-demand digital products your B2B/B2C needs.";

// State management
let currentProjectIndex = null;
let currentPageIndex = 0;
let navIsInOnState = true;

// Cache for DOM elements
let domCache = {};

// Initialize the navigation
function initPortfolioNav() {
    try {
        // Create the darkened overlay
        const shadeElement = document.createElement('div');
        shadeElement.className = 'portfolio-shade';
        document.body.appendChild(shadeElement);

        // Create initial title display that shows on page load
        const initialTitle = document.createElement('div');
        initialTitle.className = 'portfolio-initial-title';

        const initialTitleHeading = document.createElement('h1');
        initialTitleHeading.textContent = initialPageTitle;

        const initialSubtitle = document.createElement('p');
        initialSubtitle.textContent = initialPageSubtitle;

        initialTitle.appendChild(initialTitleHeading);
        initialTitle.appendChild(initialSubtitle);
        document.body.appendChild(initialTitle);

        // Create title display in the middle third (for hover)
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

        // Cache common DOM elements
        cacheDOMElements();

        // Create project navigation items
        portfolioProjects.forEach((project, index) => {
            createNavItem(project, index, titleDisplay, projectTitle, projectSubtitle);
        });

        // Set initial state based on URL
        determineStateFromURL();
        updateNavigationState();

        // Add nav-active class to body when navigation is active
        document.body.classList.add('nav-active');

        // Only prevent scrolling on the main projects page (where all project circles are visible)
        if (isOnRootPage()) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Listen for popstate events (browser back/forward)
        window.addEventListener('popstate', function () {
            determineStateFromURL();
            updateNavigationState();

            // Update overflow when navigation state changes
            if (isOnRootPage() && navIsInOnState) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    } catch (error) {
        console.error("Error initializing portfolio navigation:", error);
    }
}

// Cache frequently accessed DOM elements
function cacheDOMElements() {
    domCache = {
        navElement: document.querySelector('.portfolio-nav'),
        shadeElement: document.querySelector('.portfolio-shade'),
        titleDisplay: document.querySelector('.portfolio-title-display'),
        initialTitle: document.querySelector('.portfolio-initial-title'),
        projectTitle: document.querySelector('.portfolio-hover-title'),
        projectSubtitle: document.querySelector('.portfolio-hover-subtitle')
    };
}

// Create a single navigation item
function createNavItem(project, index, titleDisplay, projectTitle, projectSubtitle) {
    try {
        const navElement = document.querySelector('.portfolio-nav');
        if (!navElement) throw new Error("Navigation container not found");

        const navItem = document.createElement('div');
        navItem.className = 'portfolio-nav-item';
        navItem.dataset.index = index;
        navItem.dataset.id = project.id;

        // Add ARIA attributes for accessibility
        navItem.setAttribute('role', 'button');
        navItem.setAttribute('aria-label', project.title);
        navItem.tabIndex = 0; // Make focusable

        // Create the circular button
        const circle = document.createElement('div');
        circle.className = 'portfolio-nav-circle';

        // Add icon to the circle
        circle.innerHTML = projectIcons[index] || `<span>${index + 1}</span>`;

        // Create project title that appears above the circle
        const title = document.createElement('div');
        title.className = 'portfolio-nav-title';
        title.textContent = project.title;

        // Add page dots for multi-page projects
        if (project.pages && project.pages.length > 1) {
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'portfolio-nav-dots';

            for (let i = 0; i < project.pages.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'portfolio-nav-dot';
                dot.dataset.pageIndex = i;
                dotsContainer.appendChild(dot);
            }

            navItem.appendChild(dotsContainer);

            // Add page navigation controls (appearing on top of active circle)
            const pageNavContainer = document.createElement('div');
            pageNavContainer.className = 'page-nav-circles';

            // Previous page button
            const prevBtn = document.createElement('div');
            prevBtn.className = 'page-nav-circle';
            prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
            prevBtn.setAttribute('role', 'button');
            prevBtn.setAttribute('aria-label', 'Previous page');
            prevBtn.tabIndex = 0;

            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateToPrevPage();
            });

            // Keyboard support
            prevBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateToPrevPage();
                }
            });

            // Next page button
            const nextBtn = document.createElement('div');
            nextBtn.className = 'page-nav-circle';
            nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
            nextBtn.setAttribute('role', 'button');
            nextBtn.setAttribute('aria-label', 'Next page');
            nextBtn.tabIndex = 0;

            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateToNextPage();
            });

            // Keyboard support
            nextBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateToNextPage();
                }
            });

            pageNavContainer.appendChild(prevBtn);
            pageNavContainer.appendChild(nextBtn);
            navItem.appendChild(pageNavContainer);
        }

        // Add hover effects to show project title in the middle third
        navItem.addEventListener('mouseenter', () => {
            if (navIsInOnState) {
                const cachedTitleEl = domCache.projectTitle || document.querySelector('.portfolio-hover-title');
                const cachedSubtitleEl = domCache.projectSubtitle || document.querySelector('.portfolio-hover-subtitle');
                const cachedTitleDisplay = domCache.titleDisplay || document.querySelector('.portfolio-title-display');
                const cachedInitialTitle = domCache.initialTitle || document.querySelector('.portfolio-initial-title');

                if (cachedTitleEl && cachedSubtitleEl) {
                    cachedTitleEl.textContent = project.title;
                    cachedSubtitleEl.textContent = project.subtitle;
                }

                if (cachedTitleDisplay) {
                    cachedTitleDisplay.classList.add('visible');
                }

                if (cachedInitialTitle) {
                    cachedInitialTitle.style.opacity = 0;
                }
            }
        });

        navItem.addEventListener('mouseleave', () => {
            if (navIsInOnState) {
                const cachedTitleDisplay = domCache.titleDisplay || document.querySelector('.portfolio-title-display');
                const cachedInitialTitle = domCache.initialTitle || document.querySelector('.portfolio-initial-title');

                if (cachedTitleDisplay) {
                    cachedTitleDisplay.classList.remove('visible');
                }

                if (cachedInitialTitle) {
                    cachedInitialTitle.style.opacity = 1;
                }
            }
        });

        // Handle navigation click
        navItem.addEventListener('click', () => {
            handleNavClick(index);
        });

        // Keyboard support
        navItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavClick(index);
            }
        });

        navItem.appendChild(circle);
        navItem.appendChild(title);
        navElement.appendChild(navItem);
    } catch (error) {
        console.error("Error creating navigation item:", error);
    }
}

// Handle navigation item click
function handleNavClick(index) {
    try {
        if (navIsInOnState) {
            // Switch to OFF state and navigate to project
            currentProjectIndex = index;
            currentPageIndex = 0;
            navIsInOnState = false;

            // Allow scrolling on project pages
            document.body.style.overflow = 'auto';

            // Navigate to the project page
            const project = portfolioProjects[index];
            if (!project || !project.pages || project.pages.length === 0) {
                console.error("Invalid project or no pages defined");
                return;
            }

            const pageURL = isOnRootPage() ? 'projects/' + project.pages[0] : project.pages[0];

            // Apply state changes before navigation
            updateNavigationState();
            window.location.href = pageURL;
        } else if (index === currentProjectIndex) {
            // Clicked on active project, return to ON state
            navIsInOnState = true;

            // Prevent scrolling on main projects page
            if (isOnRootPage()) {
                document.body.style.overflow = 'hidden';
            }

            updateNavigationState();

            // Navigate back to projects page if not already there
            if (!isOnRootPage()) {
                window.location.href = '../projects.html';
            }
        } else {
            // Clicked on different project while in OFF state
            currentProjectIndex = index;
            currentPageIndex = 0;

            // Keep scrolling enabled
            document.body.style.overflow = 'auto';

            // Navigate to the new project
            const project = portfolioProjects[index];
            if (!project || !project.pages || project.pages.length === 0) {
                console.error("Invalid project or no pages defined");
                return;
            }

            const pageURL = isOnRootPage() ? 'projects/' + project.pages[0] : project.pages[0];

            // Apply state changes before navigation
            updateNavigationState();
            window.location.href = pageURL;
        }
    } catch (error) {
        console.error("Error handling navigation click:", error);
    }
}

// Check if we're on the main projects page
function isOnRootPage() {
    try {
        const path = window.location.pathname;
        // Remove query string and hash from the path
        const cleanPath = path.split(/[?#]/)[0];
        return cleanPath.endsWith('/projects.html') || cleanPath.endsWith('/projects') || cleanPath.endsWith('/projects/');
    } catch (error) {
        console.error("Error checking if on root page:", error);
        return false;
    }
}

// Update navigation visual state
function updateNavigationState() {
    try {
        const navElement = domCache.navElement || document.querySelector('.portfolio-nav');
        const shadeElement = domCache.shadeElement || document.querySelector('.portfolio-shade');
        const initialTitle = domCache.initialTitle || document.querySelector('.portfolio-initial-title');
        const titleDisplay = domCache.titleDisplay || document.querySelector('.portfolio-title-display');

        if (!navElement) {
            console.error("Navigation element not found");
            return;
        }

        // Update navigation container class
        if (navIsInOnState) {
            navElement.className = 'portfolio-nav nav-on';
            if (shadeElement) shadeElement.classList.remove('hidden');
            if (initialTitle) initialTitle.style.opacity = 1;

            // Only prevent scrolling on the main projects page when in ON state
            if (isOnRootPage()) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            navElement.className = 'portfolio-nav nav-off';
            if (shadeElement) shadeElement.classList.add('hidden');
            if (initialTitle) initialTitle.style.opacity = 0;

            // Always allow scrolling in OFF state (project pages)
            document.body.style.overflow = 'auto';
        }

        // Update active project and page indicators
        const navItems = document.querySelectorAll('.portfolio-nav-item');
        navItems.forEach((item, index) => {
            if (index === currentProjectIndex) {
                item.classList.add('active');
                item.setAttribute('aria-pressed', 'true');

                // Update page dots if this is the active project
                const dots = item.querySelectorAll('.portfolio-nav-dot');
                dots.forEach((dot, dotIndex) => {
                    dot.classList.toggle('active', dotIndex === currentPageIndex);
                    if (dotIndex === currentPageIndex) {
                        dot.setAttribute('aria-current', 'true');
                    } else {
                        dot.removeAttribute('aria-current');
                    }
                });
            } else {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            }
        });

        // Hide title display in OFF state
        if (titleDisplay) titleDisplay.classList.remove('visible');
    } catch (error) {
        console.error("Error updating navigation state:", error);
    }
}

// Determine initial state from URL
function determineStateFromURL() {
    try {
        const path = window.location.pathname;
        // Remove query string and hash
        const cleanPath = path.split(/[?#]/)[0];

        // If we're on the projects.html page, start in ON state
        if (isOnRootPage()) {
            navIsInOnState = true;
            currentProjectIndex = null;
            return;
        }

        // We're on a project page, find which one
        navIsInOnState = false;

        // Extract the filename from the path
        const filename = cleanPath.split('/').pop();

        // Find the project and page index
        let found = false;
        for (let i = 0; i < portfolioProjects.length; i++) {
            if (!portfolioProjects[i].pages) continue;

            const pageIndex = portfolioProjects[i].pages.indexOf(filename);
            if (pageIndex !== -1) {
                currentProjectIndex = i;
                currentPageIndex = pageIndex;
                found = true;
                break;
            }
        }

        // Default to first project if not found
        if (!found) {
            currentProjectIndex = 0;
            currentPageIndex = 0;
            console.warn(`Page "${filename}" not found in any project, defaulting to first project`);
        }
    } catch (error) {
        console.error("Error determining state from URL:", error);
        // Set safe defaults
        navIsInOnState = true;
        currentProjectIndex = null;
        currentPageIndex = 0;
    }
}

// Navigate to the next page within the current project
function navigateToNextPage() {
    try {
        if (currentProjectIndex === null || currentProjectIndex >= portfolioProjects.length) return;

        const project = portfolioProjects[currentProjectIndex];
        if (!project || !project.pages || !project.pages.length) return;

        const totalPages = project.pages.length;

        if (currentPageIndex < totalPages - 1) {
            currentPageIndex++;
            const pageURL = isOnRootPage() ?
                'projects/' + project.pages[currentPageIndex] :
                project.pages[currentPageIndex];

            window.location.href = pageURL;
        }
    } catch (error) {
        console.error("Error navigating to next page:", error);
    }
}

// Navigate to the previous page within the current project
function navigateToPrevPage() {
    try {
        if (currentProjectIndex === null || currentProjectIndex >= portfolioProjects.length) return;

        const project = portfolioProjects[currentProjectIndex];
        if (!project || !project.pages || !project.pages.length) return;

        if (currentPageIndex > 0) {
            currentPageIndex--;
            const pageURL = isOnRootPage() ?
                'projects/' + project.pages[currentPageIndex] :
                project.pages[currentPageIndex];

            window.location.href = pageURL;
        }
    } catch (error) {
        console.error("Error navigating to previous page:", error);
    }
}

// Initialize the navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolioNav);