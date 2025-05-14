// Portfolio Navigation - Simplified
const portfolioProjects = [
    {
        id: 'saas-landing',
        title: 'SaaS Product Landing',
        pages: [
            'css-anim-saas-landing.html',
            'saas-css-anim-signup.html',
            'css-saas-profile-setup.html'
        ]
    },
    {
        id: 'autumn-lookbook',
        title: 'Fashion Lookbook Fall',
        pages: [
            'autumn-lookbook-part-1.html',
            'autumn-lookbook-part-2.html',
            'autumn-lookbook-part-3.html'
        ]
    },
    {
        id: 'webflow-store',
        title: 'E-Commerce Platform',
        pages: [
            'webflow-print-series.html',
            'webflow-product-page.html'
        ]
    },
    {
        id: 'summer-lookbook',
        title: 'Fashion Lookbook Summer',
        pages: [
            'summer-lookbook-part-1.html',
            'summer-lookbook-part-2.html',
            'summer-lookbook-part-3.html',
            'summer-lookbook-part-4.html'
        ]
    },
    {
        id: 'mindflow-app',
        title: 'AI Wellness App',
        pages: ['mindflow-app.html']
    },
    {
        id: 'admin-dashboard',
        title: 'Analytics Dashboard',
        pages: ['ai-admin-dashboard.html']
    }
];

let portfolioCurrentProject = 0;
let portfolioCurrentPage = 0;

function initPortfolioNav() {
    // Create shade overlay
    const shade = document.createElement('div');
    shade.className = 'portfolio-shade';
    shade.addEventListener('click', () => {
        shade.classList.add('hidden');
    });
    document.body.appendChild(shade);
    
    // Create navigation container
    const nav = document.createElement('nav');
    nav.className = 'portfolio-nav';
    
    portfolioProjects.forEach((project, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'portfolio-nav-item';
        
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
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    switchToPage(index, pageIndex);
                });
                dots.appendChild(dot);
            });
            
            navItem.appendChild(dots);
        }
        
        navItem.addEventListener('click', () => handleNavClick(index));
        nav.appendChild(navItem);
    });
    
    document.body.appendChild(nav);
    parsePortfolioLocation();
}

function handleNavClick(index) {
    const shade = document.querySelector('.portfolio-shade');
    shade.classList.add('hidden');
    
    if (index !== portfolioCurrentProject) {
        switchToProject(index);
    }
}

function switchToProject(index) {
    portfolioCurrentProject = index;
    portfolioCurrentPage = 0;
    const project = portfolioProjects[index];
    window.location.href = project.pages[0];
}

function switchToPage(projectIndex, pageIndex) {
    portfolioCurrentProject = projectIndex;
    portfolioCurrentPage = pageIndex;
    const project = portfolioProjects[projectIndex];
    window.location.href = project.pages[pageIndex];
}

function parsePortfolioLocation() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    portfolioProjects.forEach((project, projectIndex) => {
        const pageIndex = project.pages.indexOf(filename);
        if (pageIndex !== -1) {
            portfolioCurrentProject = projectIndex;
            portfolioCurrentPage = pageIndex;
            updateActiveStates();
        }
    });
}

function updateActiveStates() {
    // Update nav item active states
    const navItems = document.querySelectorAll('.portfolio-nav-item');
    navItems.forEach((item, i) => {
        item.classList.toggle('active', i === portfolioCurrentProject);
    });
    
    // Update dots for active project
    const navItem = navItems[portfolioCurrentProject];
    const dots = navItem.querySelectorAll('.portfolio-nav-dot');
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === portfolioCurrentPage);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPortfolioNav);