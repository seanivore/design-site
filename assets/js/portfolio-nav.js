// Portfolio Navigation - Complete fresh rewrite
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

let portfolioCurrentProject = null;
let portfolioCurrentPage = 0;
let portfolioNavCollapsed = false;

function initPortfolioNav() {
    // Create shade overlay
    const shade = document.createElement('div');
    shade.className = 'portfolio-shade';
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
                dots.appendChild(dot);
            });
            
            navItem.appendChild(dots);
            
            // Add navigation arrows
            const arrows = document.createElement('div');
            arrows.className = 'portfolio-nav-arrows';
            
            const leftArrow = document.createElement('div');
            leftArrow.className = 'portfolio-nav-arrow';
            leftArrow.innerHTML = '←';
            leftArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                navigatePage(-1);
            });
            
            const rightArrow = document.createElement('div');
            rightArrow.className = 'portfolio-nav-arrow';
            rightArrow.innerHTML = '→';
            rightArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                navigatePage(1);
            });
            
            arrows.appendChild(leftArrow);
            arrows.appendChild(rightArrow);
            navItem.appendChild(arrows);
        }
        
        navItem.addEventListener('click', () => handleNavClick(index));
        nav.appendChild(navItem);
    });
    
    document.body.appendChild(nav);
    parsePortfolioLocation();
}

function handleNavClick(index) {
    const nav = document.querySelector('.portfolio-nav');
    const shade = document.querySelector('.portfolio-shade');
    
    if (!portfolioNavCollapsed) {
        // Nav is ON, clicking any project collapses nav and goes to that project
        portfolioCurrentProject = index;
        portfolioCurrentPage = 0;
        portfolioNavCollapsed = true;
        nav.classList.add('collapsed');
        shade.classList.add('hidden');
        
        // Update active states
        updateActiveStates();
        
        // Navigate to project
        const project = portfolioProjects[index];
        window.location.href = `projects/${project.pages[0]}`;
    } else if (index === portfolioCurrentProject) {
        // Nav is OFF, clicking the giant circle turns nav back ON
        portfolioNavCollapsed = false;
        nav.classList.remove('collapsed');
        shade.classList.remove('hidden');
    }
}

function navigatePage(direction) {
    const project = portfolioProjects[portfolioCurrentProject];
    const arrows = document.querySelectorAll('.portfolio-nav-arrow');
    
    if (project.pages.length > 1) {
        const newPage = portfolioCurrentPage + direction;
        
        // Check boundaries
        if (newPage < 0) {
            // At beginning, bounce left arrow
            arrows[0].classList.add('bounce-left');
            setTimeout(() => arrows[0].classList.remove('bounce-left'), 400);
            return;
        } else if (newPage >= project.pages.length) {
            // At end, bounce right arrow
            arrows[1].classList.add('bounce-right');
            setTimeout(() => arrows[1].classList.remove('bounce-right'), 400);
            return;
        }
        
        // Navigate to valid page
        portfolioCurrentPage = newPage;
        window.location.href = `projects/${project.pages[newPage]}`;
    }
}

function parsePortfolioLocation() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    portfolioProjects.forEach((project, projectIndex) => {
        const pageIndex = project.pages.indexOf(filename);
        if (pageIndex !== -1) {
            portfolioCurrentProject = projectIndex;
            portfolioCurrentPage = pageIndex;
            
            // Set collapsed state on page load
            portfolioNavCollapsed = true;
            const nav = document.querySelector('.portfolio-nav');
            const shade = document.querySelector('.portfolio-shade');
            nav.classList.add('collapsed');
            shade.classList.add('hidden');
            
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
    updatePortfolioDots();
}

function updatePortfolioDots() {
    if (portfolioCurrentProject !== null) {
        const navItem = document.querySelectorAll('.portfolio-nav-item')[portfolioCurrentProject];
        const dots = navItem.querySelectorAll('.portfolio-nav-dot');
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === portfolioCurrentPage);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPortfolioNav);