// Portfolio Navigation System - Simplified Bar Approach
document.addEventListener('DOMContentLoaded', function () {
    // Project definitions
    const portfolioProjects = [
        {
            id: 'saas-landing',
            title: 'SaaS Product Sales',
            description: 'CSS Animation & Micro-Interactions with a Modular, Versatile Design',
            pages: [
                { id: 'landing', name: 'Landing', icon: 'fa-home', file: 'css-anim-saas-landing.html' },
                { id: 'signup', name: 'Signup', icon: 'fa-user-plus', file: 'saas-css-anim-signup.html' },
                { id: 'profile', name: 'Profile', icon: 'fa-user-gear', file: 'css-saas-profile-setup.html' }
            ]
        },
        {
            id: 'autumn-lookbook',
            title: 'AI Generated Fashion Magazine',
            description: 'Luxury Looks Pull From Historic Art Movements & Are Designed for Relatable Archetypes',
            pages: [
                { id: 'part1', name: 'Part 1', icon: 'fa-1', file: 'autumn-lookbook-part-1.html' },
                { id: 'part2', name: 'Part 2', icon: 'fa-2', file: 'autumn-lookbook-part-2.html' },
                { id: 'part3', name: 'Part 3', icon: 'fa-3', file: 'autumn-lookbook-part-3.html' }
            ]
        },
        {
            id: 'webflow-store',
            title: 'Webflow E-Commerce 500+ Product Store',
            description: 'Single-Edition Prints Showcasing 30+ Art Movements with AI Staged Photographs',
            pages: [
                { id: 'series', name: 'Series', icon: 'fa-images', file: 'webflow-print-series.html' },
                { id: 'product', name: 'Product', icon: 'fa-image', file: 'webflow-product-page.html' }
            ]
        },
        {
            id: 'summer-lookbook',
            title: 'Fashion Guide With Solution Oriented Styles',
            description: 'Google Lens API Integration Is Steps Away from Implementation',
            pages: [
                { id: 'part1', name: 'Part 1', icon: 'fa-1', file: 'summer-lookbook-part-1.html' },
                { id: 'part2', name: 'Part 2', icon: 'fa-2', file: 'summer-lookbook-part-2.html' },
                { id: 'part3', name: 'Part 3', icon: 'fa-3', file: 'summer-lookbook-part-3.html' },
                { id: 'part4', name: 'Part 4', icon: 'fa-4', file: 'summer-lookbook-part-4.html' }
            ]
        },
        {
            id: 'mindflow-app',
            title: 'AI-Guided Yoga & Meditation App',
            description: 'Interaction Is Handled By the AI & No Typing Required',
            pages: [
                { id: 'app', name: 'App', icon: 'fa-spa', file: 'mindflow-app.html' }
            ]
        },
        {
            id: 'admin-dashboard',
            title: 'AI-Data Visualization Dashboard',
            description: 'CSS Animated Charts For Rarely Captured Data Before AI-Led Teen Planning App',
            pages: [
                { id: 'dashboard', name: 'Dashboard', icon: 'fa-chart-bar', file: 'ai-admin-dashboard.html' }
            ]
        }
    ];

    // Home page information
    const homePage = {
        title: 'Web Asset Showcase',
        description: 'In-demand digital products your B2B/B2C needs.',
        icon: 'fa-house'
    };

    // Create navigation bar
    function createNavigationBar() {
        // Create container
        const navBar = document.createElement('div');
        navBar.className = 'portfolio-nav-bar';

        // Create project info section (left side)
        const projectInfo = document.createElement('div');
        projectInfo.className = 'nav-project-info';

        const projectTitle = document.createElement('div');
        projectTitle.className = 'nav-project-title';

        const projectDesc = document.createElement('div');
        projectDesc.className = 'nav-project-desc';

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectDesc);
        navBar.appendChild(projectInfo);

        // Create buttons container (right side)
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'nav-buttons';

        // Add home button
        const homeButton = createNavButton('../index.html', homePage.icon, 'Home');
        buttonsContainer.appendChild(homeButton);

        // Add all project buttons
        portfolioProjects.forEach(project => {
            const mainPage = project.pages[0];
            const mainButton = createNavButton(mainPage.file, mainPage.icon, project.title);
            mainButton.dataset.projectId = project.id;
            buttonsContainer.appendChild(mainButton);

            // Add sub-page buttons for multi-page projects
            if (project.pages.length > 1) {
                for (let i = 1; i < project.pages.length; i++) {
                    const page = project.pages[i];
                    const subButton = createNavButton(page.file, page.icon, `${project.title} - ${page.name}`);
                    subButton.classList.add('sub-page');
                    subButton.dataset.projectId = project.id;
                    buttonsContainer.appendChild(subButton);
                }
            }
        });

        navBar.appendChild(buttonsContainer);
        document.body.appendChild(navBar);

        // Set active page and update info
        setActivePage();
    }

    // Create a navigation button
    function createNavButton(href, iconName, title) {
        const button = document.createElement('a');
        button.className = 'nav-btn';
        button.href = href;
        button.innerHTML = `<i class="fas ${iconName}"></i>`;
        button.setAttribute('title', title);
        button.setAttribute('aria-label', title);
        return button;
    }

    // Set the active page in the navigation
    function setActivePage() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);

        // Find project and page that match the current file
        let currentProject = null;
        let currentPageInfo = null;

        // Check if we're on the home page
        if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
            // Set home info
            document.querySelector('.nav-project-title').textContent = homePage.title;
            document.querySelector('.nav-project-desc').textContent = homePage.description;

            // Mark home button as active
            const homeButton = document.querySelector('.nav-btn');
            if (homeButton) homeButton.classList.add('active');

            return;
        }

        // Find the current project and page
        for (const project of portfolioProjects) {
            for (const page of project.pages) {
                if (page.file === currentFile) {
                    currentProject = project;
                    currentPageInfo = page;
                    break;
                }
            }
            if (currentProject) break;
        }

        // Update project info if found
        if (currentProject) {
            document.querySelector('.nav-project-title').textContent = currentProject.title;
            document.querySelector('.nav-project-desc').textContent = currentProject.description;

            // Mark the active button
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(button => {
                const buttonHref = button.getAttribute('href');
                if (buttonHref && buttonHref.endsWith(currentFile)) {
                    button.classList.add('active');
                }
            });
        }
    }

    // Initialize navigation
    createNavigationBar();
}); 