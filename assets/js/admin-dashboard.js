// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Create morphing blobs
    createBlobs();
    
    // Initialize all visualizations
    initAllVisualizations();
    
    // Setup tab navigation
    setupTabNavigation();
    
    // Add real-time updates
    startRealTimeUpdates();
});

// Setup tab navigation
function setupTabNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items and panes
            navItems.forEach(nav => nav.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Show corresponding tab content
            const tabName = item.getAttribute('data-tab');
            const activePane = document.getElementById(`${tabName}-tab`);
            if (activePane) {
                activePane.classList.add('active');
                
                // Re-initialize charts when switching tabs (for proper sizing)
                if (tabName === 'analytics') {
                    setTimeout(() => {
                        initEngagementChart();
                        initSentimentGauge();
                        initNetworkGraph();
                    }, 100);
                }
            }
        });
    });
}

// Initialize all visualizations
function initAllVisualizations() {
    initMetricSparklines();
    initEngagementChart();
    initSentimentGauge();
    initHeatmap();
    initNetworkGraph();
    initTrendSparklines();
}

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

// Initialize metric sparklines
function initMetricSparklines() {
    const sparklines = document.querySelectorAll('.metric-sparkline svg');
    
    sparklines.forEach((svg, index) => {
        const width = 150;
        const height = 30;
        
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.setAttribute('preserveAspectRatio', 'none');
        
        // Generate random data points
        const points = [];
        for (let i = 0; i < 20; i++) {
            points.push({
                x: (width / 20) * i,
                y: Math.random() * height
            });
        }
        
        // Create path
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            path += ` L ${points[i].x} ${points[i].y}`;
        }
        
        // Add the path
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', path);
        pathElement.setAttribute('fill', 'none');
        pathElement.setAttribute('stroke', index % 2 === 0 ? '#00FEFF' : '#FF00A5');
        pathElement.setAttribute('stroke-width', '2');
        
        // Add gradient fill
        const pathFill = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathFill.setAttribute('d', path + ` L ${width} ${height} L 0 ${height} Z`);
        pathFill.setAttribute('fill', `url(#gradient${index})`);
        pathFill.setAttribute('opacity', '0.3');
        
        // Create gradient
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', `gradient${index}`);
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '0%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', index % 2 === 0 ? '#00FEFF' : '#FF00A5');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', 'transparent');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        
        svg.appendChild(defs);
        svg.appendChild(pathFill);
        svg.appendChild(pathElement);
    });
}

// Initialize engagement chart
function initEngagementChart() {
    const canvas = document.getElementById('engagementChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Add grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.setLineDash([5, 5]);
    
    // Horizontal grid lines and Y-axis labels
    ctx.font = '10px input-mono';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    const ySteps = 5;
    for (let i = 0; i <= ySteps; i++) {
        const y = padding + (chartHeight / ySteps) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        // Y-axis labels
        const value = Math.round((ySteps - i) * 20);
        ctx.fillText(`${value}k`, 5, y + 3);
    }
    
    // Vertical grid lines and X-axis labels
    const hours = 24;
    for (let i = 0; i <= hours; i += 4) {
        const x = padding + (chartWidth / hours) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
        
        // X-axis labels
        ctx.fillText(`${i}:00`, x - 15, height - padding + 20);
    }
    
    ctx.setLineDash([]);
    
    // Generate sample data points
    const points = [];
    for (let i = 0; i < 24; i++) {
        points.push({
            x: padding + (chartWidth / 24) * i,
            y: padding + chartHeight - (Math.random() * chartHeight * 0.7 + chartHeight * 0.2)
        });
    }
    
    // Draw smooth curve through points
    ctx.beginPath();
    ctx.strokeStyle = '#00FEFF';
    ctx.lineWidth = 3;
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    
    // Draw to last point
    ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
    ctx.stroke();
    
    // Add gradient fill
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(0, 254, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 254, 255, 0)');
    ctx.fillStyle = gradient;
    
    // Create fill path
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    
    ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.lineTo(points[0].x, height - padding);
    ctx.closePath();
    ctx.fill();
    
    // Add title
    ctx.font = '12px input-mono';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('Activity Over Time', padding, padding - 10);
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
    
    // Clear existing cells
    heatmapGrid.innerHTML = '';
    
    // Create grid cells (24 hours x 7 days)
    for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour++) {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            
            // Random intensity with some patterns
            let baseIntensity = Math.random();
            
            // Higher activity during business hours
            if (hour >= 9 && hour <= 17) baseIntensity += 0.3;
            
            // Higher activity on weekends
            if (day >= 5) baseIntensity += 0.2;
            
            // Lower activity late night
            if (hour < 6 || hour > 22) baseIntensity -= 0.3;
            
            const intensity = Math.max(0, Math.min(1, baseIntensity));
            let color;
            
            if (intensity > 0.8) {
                color = '#F0FF00'; // Yellow for high activity
            } else if (intensity > 0.6) {
                color = '#00FEFF'; // Cyan for medium-high
            } else if (intensity > 0.4) {
                color = '#FF00A5'; // Pink for medium
            } else {
                color = 'rgba(255, 255, 255, 0.05)'; // Very low
            }
            
            cell.style.background = color;
            cell.style.opacity = intensity;
            
            // Add tooltip
            cell.title = `${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day]} ${hour}:00 - Activity: ${Math.round(intensity * 100)}%`;
            
            heatmapGrid.appendChild(cell);
        }
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
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '300');
    container.appendChild(svg);
    
    const width = container.offsetWidth;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Create nodes and links
    const nodes = [];
    const links = [];
    
    // Create influence clusters
    const clusters = [
        { name: 'Influencers', color: '#FF00A5', x: centerX - 100, y: centerY - 50, count: 3 },
        { name: 'Active Users', color: '#00FEFF', x: centerX + 100, y: centerY - 50, count: 5 },
        { name: 'Regular Users', color: '#0B5964', x: centerX, y: centerY + 80, count: 7 }
    ];
    
    // Generate nodes with cluster positions
    let nodeId = 0;
    clusters.forEach((cluster, clusterIndex) => {
        for (let i = 0; i < cluster.count; i++) {
            const angle = (Math.PI * 2 / cluster.count) * i;
            const radius = 40 + Math.random() * 30;
            nodes.push({
                id: nodeId++,
                x: cluster.x + Math.cos(angle) * radius,
                y: cluster.y + Math.sin(angle) * radius,
                size: clusterIndex === 0 ? 15 + Math.random() * 10 : 8 + Math.random() * 7,
                color: cluster.color,
                cluster: clusterIndex,
                influence: 1 - clusterIndex * 0.3
            });
        }
    });
    
    // Create connections between clusters
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            // Connect nodes within same cluster
            if (nodes[i].cluster === nodes[j].cluster && Math.random() > 0.5) {
                links.push({ source: nodes[i], target: nodes[j], strength: 0.8 });
            }
            // Connect nodes between different clusters (less frequently)
            else if (nodes[i].cluster !== nodes[j].cluster && Math.random() > 0.85) {
                links.push({ source: nodes[i], target: nodes[j], strength: 0.3 });
            }
        }
    }
    
    // Draw links
    const linkGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    links.forEach(link => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', link.source.x);
        line.setAttribute('y1', link.source.y);
        line.setAttribute('x2', link.target.x);
        line.setAttribute('y2', link.target.y);
        line.setAttribute('stroke', 'rgba(255, 255, 255, 0.1)');
        line.setAttribute('stroke-width', link.strength * 2);
        linkGroup.appendChild(line);
    });
    svg.appendChild(linkGroup);
    
    // Draw nodes
    const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nodes.forEach(node => {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Outer glow
        const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glow.setAttribute('cx', node.x);
        glow.setAttribute('cy', node.y);
        glow.setAttribute('r', node.size * 1.5);
        glow.setAttribute('fill', node.color);
        glow.setAttribute('opacity', '0.2');
        glow.setAttribute('filter', 'blur(3px)');
        group.appendChild(glow);
        
        // Main circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', node.size);
        circle.setAttribute('fill', node.color);
        circle.setAttribute('opacity', '0.9');
        
        // Add hover effect
        circle.addEventListener('mouseenter', function() {
            circle.setAttribute('r', node.size * 1.3);
            glow.setAttribute('r', node.size * 2);
            circle.setAttribute('opacity', '1');
            
            // Show tooltip
            const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            tooltip.setAttribute('x', node.x);
            tooltip.setAttribute('y', node.y - node.size - 10);
            tooltip.setAttribute('text-anchor', 'middle');
            tooltip.setAttribute('fill', 'white');
            tooltip.setAttribute('font-family', 'input-mono');
            tooltip.setAttribute('font-size', '10');
            tooltip.textContent = `Influence: ${Math.round(node.influence * 100)}%`;
            tooltip.setAttribute('id', 'tooltip');
            svg.appendChild(tooltip);
        });
        
        circle.addEventListener('mouseleave', function() {
            circle.setAttribute('r', node.size);
            glow.setAttribute('r', node.size * 1.5);
            circle.setAttribute('opacity', '0.9');
            
            // Remove tooltip
            const tooltip = document.getElementById('tooltip');
            if (tooltip) tooltip.remove();
        });
        
        group.appendChild(circle);
        nodeGroup.appendChild(group);
    });
    svg.appendChild(nodeGroup);
    
    // Add cluster labels
    clusters.forEach(cluster => {
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', cluster.x);
        label.setAttribute('y', cluster.y - 60);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('fill', cluster.color);
        label.setAttribute('font-family', 'input-mono');
        label.setAttribute('font-size', '12');
        label.setAttribute('opacity', '0.8');
        label.textContent = cluster.name;
        svg.appendChild(label);
    });
}

// Initialize trend sparklines
function initTrendSparklines() {
    const sparklines = document.querySelectorAll('.trend-sparkline svg');
    
    sparklines.forEach((svg, index) => {
        const width = 60;
        const height = 20;
        
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.setAttribute('preserveAspectRatio', 'none');
        
        // Generate trending data (upward trend)
        const points = [];
        for (let i = 0; i < 10; i++) {
            points.push({
                x: (width / 10) * i,
                y: height - (i * 1.5 + Math.random() * 5)
            });
        }
        
        // Create path
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            path += ` L ${points[i].x} ${points[i].y}`;
        }
        
        // Add the path
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', path);
        pathElement.setAttribute('fill', 'none');
        pathElement.setAttribute('stroke', '#F0FF00');
        pathElement.setAttribute('stroke-width', '2');
        
        svg.appendChild(pathElement);
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
