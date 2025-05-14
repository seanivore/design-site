// Portfolio Navigation - Add to all project pages
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
let portfolioScrollTimeout;

function initPortfolioNav() {
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
                    switchPortfolioPage(index, pageIndex);
                });
                dots.appendChild(dot);
            });
            
            navItem.appendChild(dots);
        }
        
        navItem.addEventListener('click', () => switchPortfolioProject(index));
        nav.appendChild(navItem);
    });
    
    document.body.appendChild(nav);
    parsePortfolioLocation();
}

function switchPortfolioProject(index) {
    if (index === portfolioCurrentProject) return;
    window.location.href = portfolioProjects[index].pages[0];
}

function switchPortfolioPage(projectIndex, pageIndex) {
    window.location.href = portfolioProjects[projectIndex].pages[pageIndex];
}

function parsePortfolioLocation() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    portfolioProjects.forEach((project, projectIndex) => {
        const pageIndex = project.pages.indexOf(filename);
        if (pageIndex !== -1) {
            portfolioCurrentProject = projectIndex;
            portfolioCurrentPage = pageIndex;
            
            // Update nav states
            const navItems = document.querySelectorAll('.portfolio-nav-item');
            navItems.forEach((item, i) => {
                item.classList.toggle('active', i === projectIndex);
            });
            
            updatePortfolioDots();
        }
    });
}

function updatePortfolioDots() {
    const navItem = document.querySelectorAll('.portfolio-nav-item')[portfolioCurrentProject];
    const dots = navItem.querySelectorAll('.portfolio-nav-dot');
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === portfolioCurrentPage);
    });
}

// Hide navigation on scroll
window.addEventListener('wheel', () => {
    document.body.classList.add('portfolio-scrolling');
    clearTimeout(portfolioScrollTimeout);
    portfolioScrollTimeout = setTimeout(() => {
        document.body.classList.remove('portfolio-scrolling');
    }, 1000);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPortfolioNav);