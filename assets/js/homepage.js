// Homepage JavaScript - Ripple Animation
const GRID_COLS = 200;
const GRID_ROWS = 100;
const WAVE_SPEED = 3; // milliseconds per unit distance
const WAVE_RADIUS = 6; // how many cards wide the wave is

class RippleGrid {
    constructor() {
        this.gridOverlay = document.getElementById('gridOverlay');
        this.clearBtn = document.getElementById('clearBtn');
        this.projectsBtn = document.getElementById('projectsBtn');
        this.aboutBtn = document.getElementById('aboutBtn');
        
        this.cards = [];
        this.isClearing = false;
        
        this.init();
    }
    
    init() {
        this.createGrid();
        this.attachEventListeners();
    }
    
    createGrid() {
        // Create all the grid cards
        for (let row = 0; row < GRID_ROWS; row++) {
            for (let col = 0; col < GRID_COLS; col++) {
                const card = document.createElement('div');
                card.className = 'grid-card';
                card.dataset.row = row;
                card.dataset.col = col;
                
                this.gridOverlay.appendChild(card);
                this.cards.push({
                    element: card,
                    row: row,
                    col: col,
                    isFlipped: false
                });
            }
        }
    }
    
    attachEventListeners() {
        // Grid click for ripple effect
        this.gridOverlay.addEventListener('click', (e) => {
            if (this.isClearing) return;
            
            const rect = this.gridOverlay.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const col = Math.floor(x / (rect.width / GRID_COLS));
            const row = Math.floor(y / (rect.height / GRID_ROWS));
            
            this.createRipple(row, col);
        });
        
        // Clear button
        this.clearBtn.addEventListener('click', () => {
            this.clearGrid();
        });
        
        // Projects button  
        this.projectsBtn.addEventListener('click', () => {
            this.showProjects();
        });
    }
    
    createRipple(centerRow, centerCol) {
        this.cards.forEach(card => {
            const distance = this.calculateDistance(
                card.row, card.col, 
                centerRow, centerCol
            );
            
            // Only animate cards within the wave
            if (distance <= WAVE_RADIUS) {
                const delay = distance * WAVE_SPEED;
                
                setTimeout(() => {
                    this.flipCard(card);
                }, delay);
            }
        });
    }
    
    calculateDistance(row1, col1, row2, col2) {
        const dx = col2 - col1;
        const dy = row2 - row1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    flipCard(card) {
        if (card.isFlipped) return;
        
        card.element.classList.add('flipping');
        card.isFlipped = true;
        
        // Reset after animation completes
        setTimeout(() => {
            card.element.classList.remove('flipping');
            card.isFlipped = false;
        }, 600);
    }
    
    clearGrid() {
        this.isClearing = true;
        
        // Create tsunami effect from bottom right
        const startRow = GRID_ROWS - 1;
        const startCol = GRID_COLS - 1;
        
        this.cards.forEach(card => {
            const distance = this.calculateDistance(
                card.row, card.col,
                startRow, startCol
            );
            
            const delay = (GRID_ROWS + GRID_COLS - distance) * WAVE_SPEED;
            
            setTimeout(() => {
                card.element.classList.add('clearing');
                
                // Actually hide after animation
                setTimeout(() => {
                    card.element.style.display = 'none';
                }, 600);
            }, delay);
        });
    }
    
    showProjects() {
        this.isClearing = true;
        
        // Create tsunami effect from top left
        const startRow = 0;
        const startCol = 0;
        
        this.cards.forEach(card => {
            const distance = this.calculateDistance(
                card.row, card.col,
                startRow, startCol
            );
            
            const delay = distance * WAVE_SPEED;
            
            setTimeout(() => {
                card.element.classList.add('clearing');
                
                // After animation, show projects section
                setTimeout(() => {
                    card.element.style.display = 'none';
                }, 600);
            }, delay);
        });
        
        // Load projects section after animation
        setTimeout(() => {
            window.location.href = '#projects';
        }, (GRID_ROWS + GRID_COLS) * WAVE_SPEED + 600);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RippleGrid();
});
