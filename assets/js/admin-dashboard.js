// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Create morphing blobs
    createBlobs();
    
    // Initialize charts
    initEngagementChart();
    initSentimentGauge();
    initHeatmap();
    initNetworkGraph();
    
    // Add real-time updates
    startRealTimeUpdates();
});

// Create morphing blob animation
function createBlobs() {
    const blobContainer = document.getElementById('blobContainer');
    
    // Create 3 blobs
    for (let i = 0; i < 3; i++) {
        const blob = document.createElement('div');
        blob.className = 'blob';
        blob.style.borderRadius = generateBlobShape();
        blobContainer.appendChild(blob);
    }
    
    // Continuously morph blobs
    setInterval(() => {
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach(blob => {
            blob.style.borderRadius = generateBlobShape();
        });
    }, 4000);
}

// Generate random blob shape
function generateBlobShape() {
    const randomValues = [];
    for (let i = 0; i < 8; i++) {
        randomValues.push(Math.floor(Math.random() * 50) + 25);
    }
    return `${randomValues[0]}% ${randomValues[1]}% ${randomValues[2]}% ${randomValues[3]}% / ${randomValues[4]}% ${randomValues[5]}% ${randomValues[6]}% ${randomValues[7]}%`;
}

// Initialize engagement chart
function initEngagementChart() {
    const canvas = document.getElementById('engagementChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    // Create simple line chart
    ctx.strokeStyle = '#00FEFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    // Generate sample data points
    const points = [];
    for (let i = 0; i < 24; i++) {
        points.push({
            x: (width / 24) * i,
            y: height - (Math.random() * height * 0.8 + height * 0.1)
        });
    }
    
    // Draw smooth curve through points
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        const xc = (points[i].x + points[i - 1].x) / 2;
        const yc = (points[i].y + points[i - 1].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
    }
    ctx.stroke();
    
    // Add gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 254, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 254, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Add grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    // Horizontal lines
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const y = (height / 5) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

// Initialize sentiment gauge
function initSentimentGauge() {
    const canvas = document.getElementById('sentimentGauge');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Clear canvas
    canvas.width = 200;
    canvas.height = 200;
    
    // Draw gauge background
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI * 0.7, Math.PI * 2.3);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 20;
    ctx.stroke();
    
    // Draw gauge progress
    const percentage = 0.92; // 92%
    const endAngle = Math.PI * 0.7 + (Math.PI * 1.6 * percentage);
    
    // Create gradient for gauge
    const gradient = ctx.createLinearGradient(centerX - radius, centerY, centerX + radius, centerY);
    gradient.addColorStop(0, '#FF005A');
    gradient.addColorStop(0.5, '#F0FF00');
    gradient.addColorStop(1, '#00FEFF');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI * 0.7, endAngle);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    // Draw pointer
    const pointerAngle = endAngle;
    const pointerLength = radius - 30;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
        centerX + Math.cos(pointerAngle) * pointerLength,
        centerY + Math.sin(pointerAngle) * pointerLength
    );
    ctx.strokeStyle = '#00FEFF';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Draw center dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#00FEFF';
    ctx.fill();
}

// Initialize heatmap
function initHeatmap() {
    const heatmapGrid = document.getElementById('activityHeatmap');
    if (!heatmapGrid) return;
    
    // Create grid cells
    for (let i = 0; i < 200; i++) {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        
        // Random intensity
        const intensity = Math.random();
        let color;
        
        if (intensity > 0.8) {
            color = '#F0FF00'; // Yellow for high activity
        } else if (intensity > 0.6) {
            color = '#00FEFF'; // Cyan for medium-high
        } else if (intensity > 0.4) {
            color = '#0B5964'; // Teal for medium
        } else {
            color = 'rgba(255, 255, 255, 0.05)'; // Very low
        }
        
        cell.style.background = color;
        cell.style.opacity = intensity;
        heatmapGrid.appendChild(cell);
    }
    
    // Add hover effect
    const cells = heatmapGrid.querySelectorAll('.heatmap-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.zIndex = '1';
        });
        
        cell.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '0';
        });
    });
}

// Initialize network graph
function initNetworkGraph() {
    const container = document.getElementById('networkGraph');
    if (!container) return;
    
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '300');
    container.appendChild(svg);
    
    // Create nodes and links
    const nodes = [];
    const links = [];
    
    // Generate random nodes
    for (let i = 0; i < 15; i++) {
        nodes.push({
            id: i,
            x: Math.random() * container.offsetWidth,
            y: Math.random() * 300,
            size: Math.random() * 20 + 10,
            influence: Math.random()
        });
    }
    
    // Create random connections
    for (let i = 0; i < 20; i++) {
        const source = Math.floor(Math.random() * nodes.length);
        const target = Math.floor(Math.random() * nodes.length);
        if (source !== target) {
            links.push({ source: nodes[source], target: nodes[target] });
        }
    }
    
    // Draw links
    links.forEach(link => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', link.source.x);
        line.setAttribute('y1', link.source.y);
        line.setAttribute('x2', link.target.x);
        line.setAttribute('y2', link.target.y);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
    });
    
    // Draw nodes
    nodes.forEach(node => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', node.size);
        
        // Color based on influence
        const color = node.influence > 0.7 ? '#FF00A5' : 
                     node.influence > 0.4 ? '#00FEFF' : '#0B5964';
        
        circle.setAttribute('fill', color);
        circle.setAttribute('opacity', '0.8');
        
        // Add hover effect
        circle.addEventListener('mouseenter', function() {
            this.setAttribute('r', node.size * 1.5);
            this.setAttribute('opacity', '1');
        });
        
        circle.addEventListener('mouseleave', function() {
            this.setAttribute('r', node.size);
            this.setAttribute('opacity', '0.8');
        });
        
        svg.appendChild(circle);
    });
}

// Start real-time updates
function startRealTimeUpdates() {
    // Update metrics every 5 seconds
    setInterval(() => {
        updateMetrics();
    }, 5000);
    
    // Update charts every 10 seconds
    setInterval(() => {
        updateCharts();
    }, 10000);
}

// Update metric values
function updateMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const currentValue = parseInt(metric.textContent.replace(/[^0-9]/g, ''));
        const change = Math.random() * 10 - 5; // Random change between -5 and +5
        const newValue = Math.max(0, currentValue + Math.floor(change));
        
        // Animate the change
        metric.style.transition = 'color 0.5s ease';
        metric.style.color = change > 0 ? '#F0FF00' : '#FF005A';
        
        setTimeout(() => {
            metric.textContent = newValue.toLocaleString();
            metric.style.color = '#00FEFF';
        }, 500);
    });
}

// Update charts with new data
function updateCharts() {
    // Re-initialize charts with new data
    initEngagementChart();
    initSentimentGauge();
    
    // Animate heatmap changes
    const cells = document.querySelectorAll('.heatmap-cell');
    cells.forEach(cell => {
        if (Math.random() > 0.8) {
            const intensity = Math.random();
            let color;
            
            if (intensity > 0.8) {
                color = '#F0FF00';
            } else if (intensity > 0.6) {
                color = '#00FEFF';
            } else if (intensity > 0.4) {
                color = '#0B5964';
            } else {
                color = 'rgba(255, 255, 255, 0.05)';
            }
            
            cell.style.transition = 'all 1s ease';
            cell.style.background = color;
            cell.style.opacity = intensity;
        }
    });
}

// Handle chart control buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('control-btn')) {
        const buttons = e.target.parentElement.querySelectorAll('.control-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Re-render chart with new timeframe
        initEngagementChart();
    }
});

// Initialize resize handler
window.addEventListener('resize', function() {
    initEngagementChart();
    initSentimentGauge();
    initNetworkGraph();
});
