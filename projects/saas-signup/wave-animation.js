document.addEventListener('DOMContentLoaded', function() {
    // Create wave bands dynamically
    const waveContainer = document.getElementById('waveContainer');
    
    // Create 8 wave bands
    for (let i = 0; i < 8; i++) {
        const waveBand = document.createElement('div');
        waveBand.className = 'wave-band';
        waveContainer.appendChild(waveBand);
    }
    
    // Scroll-based animation effect
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateWaves() {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > lastScrollY ? 1 : -1;
        const scrollSpeed = Math.min(Math.abs(scrollY - lastScrollY) / 8, 10);
        
        // Apply different height changes to each wave band based on scroll
        document.querySelectorAll('.wave-band').forEach((band, index) => {
            // Skip first and last (black) bands
            if (index === 0 || index === 7) return;
            
            // Base height for each band (approx 14%)
            const baseHeight = parseFloat(getComputedStyle(band).getPropertyValue('--band-height') || '14%');
            
            // Calculate new height based on scroll
            let newHeight;
            
            if (scrollDirection > 0) {
                // When scrolling down, compress bands
                newHeight = Math.max(baseHeight - (scrollSpeed * 0.5), 3);
            } else {
                // When scrolling up, expand bands
                newHeight = Math.min(baseHeight + (scrollSpeed * 0.5), 20);
            }
            
            // Apply with sequential timing for wave-like effect
            setTimeout(() => {
                band.style.height = `${newHeight}%`;
            }, index * 30);
        });
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateWaves);
            ticking = true;
        }
    });
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add subtle animation to pricing cards on hover
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});