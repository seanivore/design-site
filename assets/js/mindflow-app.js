// Mindflow AI - App JavaScript
// Pixelated luxury wellness companion

class MindflowApp {
    constructor() {
        this.currentScreen = 'chat';
        this.isRecording = false;
        this.breathPhase = 'inhale';
        this.sessionActive = false;
        this.contributionData = this.generateContributionData();
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupVoiceInput();
        this.setupBreathingAnimation();
        this.renderContributionGraph();
        this.animateMessages();
    }
    
    setupEventListeners() {
        // Tab navigation
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleTabChange(e.currentTarget);
            });
        });
        
        // Quick options in chat
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleOptionSelect(e.currentTarget);
            });
        });
        
        // Start session button
        const startBtn = document.querySelector('.primary-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.startSession();
            });
        }
        
        // Session controls
        const pauseBtn = document.querySelector('.pause-btn');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => {
                this.toggleSession();
            });
        }
        
        // Close session
        const closeBtn = document.querySelector('.close-session');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.endSession();
            });
        }
        
        // Mood selection
        const moodButtons = document.querySelectorAll('.mood-btn');
        moodButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectMood(e.currentTarget);
            });
        });
        
        // Voice journal
        const voiceJournalBtn = document.querySelector('.voice-record-btn');
        if (voiceJournalBtn) {
            voiceJournalBtn.addEventListener('mousedown', () => {
                this.startVoiceJournal();
            });
            voiceJournalBtn.addEventListener('mouseup', () => {
                this.stopVoiceJournal();
            });
            voiceJournalBtn.addEventListener('touchstart', () => {
                this.startVoiceJournal();
            });
            voiceJournalBtn.addEventListener('touchend', () => {
                this.stopVoiceJournal();
            });
        }
    }
    
    setupVoiceInput() {
        const voiceBtn = document.querySelector('.voice-btn');
        const textInput = document.querySelector('.text-input');
        
        if (voiceBtn) {
            voiceBtn.addEventListener('click', () => {
                this.toggleVoiceInput();
            });
        }
        
        if (textInput) {
            textInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage(e.target.value);
                    e.target.value = '';
                }
            });
        }
    }
    
    setupBreathingAnimation() {
        if (this.sessionActive) {
            this.breathingInterval = setInterval(() => {
                this.animateBreathing();
            }, 4000);
        }
    }
    
    animateBreathing() {
        const breathText = document.querySelector('.breath-text');
        if (breathText) {
            if (this.breathPhase === 'inhale') {
                breathText.textContent = 'Breathe In';
                this.breathPhase = 'exhale';
            } else {
                breathText.textContent = 'Breathe Out';
                this.breathPhase = 'inhale';
            }
        }
    }
    
    generateContributionData() {
        // Generate realistic meditation habit data
        const data = [];
        const today = new Date();
        const daysToShow = 364; // About a year
        
        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            
            // Create realistic pattern - more likely to meditate on weekdays
            const dayOfWeek = date.getDay();
            let probability = 0.4; // Base probability
            
            if (dayOfWeek >= 1 && dayOfWeek <= 5) {
                probability = 0.6; // Higher on weekdays
            }
            
            // Add some streaks
            if (i > 50 && i < 70) probability = 0.8; // Good streak
            if (i > 150 && i < 165) probability = 0.9; // Another streak
            
            const practiced = Math.random() < probability;
            const intensity = practiced ? Math.floor(Math.random() * 4) + 1 : 0;
            
            data.push({
                date: date,
                intensity: intensity
            });
        }
        
        return data;
    }
    
    renderContributionGraph() {
        const grid = document.querySelector('.contribution-grid');
        if (!grid) return;
        
        // Clear existing cells
        grid.innerHTML = '';
        
        // Create cells for each day
        this.contributionData.forEach(day => {
            const cell = document.createElement('div');
            cell.className = `cell level-${day.intensity}`;
            cell.title = `${day.date.toLocaleDateString()}: ${day.intensity} sessions`;
            grid.appendChild(cell);
        });
    }
    
    animateMessages() {
        const messages = document.querySelectorAll('.message');
        messages.forEach((msg, index) => {
            setTimeout(() => {
                msg.style.animation = 'messageSlide 0.3s ease forwards';
            }, index * 100);
        });
    }
    
    handleTabChange(tab) {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Handle screen changes
        const tabText = tab.querySelector('span').textContent.toLowerCase();
        this.changeScreen(`${tabText}-screen`);
    }
    
    changeScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show selected screen
        const targetScreen = document.querySelector(`.${screenId}`);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
        
        this.currentScreen = screenId;
    }
    
    handleOptionSelect(option) {
        const optionText = option.querySelector('span').textContent;
        
        // Add user message
        this.addMessage(optionText, 'user');
        
        // Simulate AI response
        setTimeout(() => {
            if (optionText === 'Meditation') {
                this.addMessage("Perfect choice. I'll prepare a personalized session for you.", 'ai');
                
                // Switch to activity screen after delay
                setTimeout(() => {
                    this.changeScreen('activity-screen');
                }, 1000);
            } else {
                this.addMessage("Let's energize your body with a gentle flow.", 'ai');
            }
        }, 500);
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = sender === 'ai' ? 'message-content glass-card' : 'message-content';
        contentDiv.innerHTML = `<p>${text}</p>`;
        
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeDiv);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Animate new message
        messageDiv.style.animation = 'messageSlide 0.3s ease forwards';
    }
    
    startSession() {
        this.sessionActive = true;
        this.changeScreen('session-screen');
        this.setupBreathingAnimation();
        this.startSessionTimer();
        this.animateVoiceVisualizer();
    }
    
    toggleSession() {
        if (this.sessionActive) {
            this.pauseSession();
        } else {
            this.resumeSession();
        }
    }
    
    pauseSession() {
        this.sessionActive = false;
        const pauseBtn = document.querySelector('.pause-btn i');
        pauseBtn.classList.remove('fa-pause');
        pauseBtn.classList.add('fa-play');
        clearInterval(this.breathingInterval);
        clearInterval(this.timerInterval);
    }
    
    resumeSession() {
        this.sessionActive = true;
        const pauseBtn = document.querySelector('.pause-btn i');
        pauseBtn.classList.remove('fa-play');
        pauseBtn.classList.add('fa-pause');
        this.setupBreathingAnimation();
        this.startSessionTimer();
    }
    
    endSession() {
        this.sessionActive = false;
        clearInterval(this.breathingInterval);
        clearInterval(this.timerInterval);
        this.changeScreen('reflection-screen');
        this.updateContributionGraph();
    }
    
    startSessionTimer() {
        let seconds = 0;
        const timerDisplay = document.querySelector('.session-timer');
        
        this.timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }
    
    animateVoiceVisualizer() {
        const bars = document.querySelectorAll('.frequency-bar');
        
        if (this.sessionActive) {
            this.visualizerInterval = setInterval(() => {
                bars.forEach(bar => {
                    const height = Math.random() * 20 + 15;
                    bar.style.height = `${height}px`;
                });
            }, 200);
        }
    }
    
    selectMood(button) {
        // Remove active class from all mood buttons
        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to selected button
        button.classList.add('active');
        
        // Update mood indicator
        const moodValue = button.dataset.mood;
        this.updateMoodIndicator(moodValue);
    }
    
    updateMoodIndicator(value) {
        const moodCells = document.querySelectorAll('.mood-cell');
        moodCells.forEach((cell, index) => {
            if (index < value) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });
    }
    
    updateContributionGraph() {
        // Add today's practice
        this.contributionData.unshift({
            date: new Date(),
            intensity: 4 // High intensity for completed session
        });
        
        // Re-render graph
        this.renderContributionGraph();
    }
    
    toggleVoiceInput() {
        if (!this.isRecording) {
            this.startRecording();
        } else {
            this.stopRecording();
        }
    }
    
    startRecording() {
        this.isRecording = true;
        const voiceBtn = document.querySelector('.voice-btn');
        voiceBtn.classList.add('recording');
        
        // Show voice waves animation
        const waves = document.querySelectorAll('.wave');
        waves.forEach(wave => {
            wave.style.animation = 'wave 1s ease-in-out infinite';
        });
    }
    
    stopRecording() {
        this.isRecording = false;
        const voiceBtn = document.querySelector('.voice-btn');
        voiceBtn.classList.remove('recording');
        
        // Stop voice waves animation
        const waves = document.querySelectorAll('.wave');
        waves.forEach(wave => {
            wave.style.animation = 'none';
        });
        
        // Simulate transcription
        setTimeout(() => {
            this.addMessage("I need to release some stress", 'user');
            
            setTimeout(() => {
                this.addMessage("I understand. Let's help you find calm. Would you prefer meditation or movement?", 'ai');
            }, 500);
        }, 300);
    }
    
    startVoiceJournal() {
        const journalBtn = document.querySelector('.voice-record-btn');
        journalBtn.classList.add('recording');
        journalBtn.querySelector('span').textContent = 'Recording...';
    }
    
    stopVoiceJournal() {
        const journalBtn = document.querySelector('.voice-record-btn');
        journalBtn.classList.remove('recording');
        journalBtn.querySelector('span').textContent = 'Hold to Record';
        
        // Simulate saving reflection
        setTimeout(() => {
            journalBtn.innerHTML = '<i class="fas fa-check"></i><span>Reflection Saved</span>';
            journalBtn.style.background = 'var(--primary-gradient)';
            journalBtn.style.color = 'white';
        }, 500);
    }
    
    sendMessage(text) {
        if (!text.trim()) return;
        
        this.addMessage(text, 'user');
        
        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "That's a great insight. How does that make you feel?",
                "I understand. Let's explore that further in your next session.",
                "Thank you for sharing. Would you like to try a breathing exercise?"
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            this.addMessage(randomResponse, 'ai');
        }, 1000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new MindflowApp();
    
    // Add some CSS classes for animations
    const style = document.createElement('style');
    style.textContent = `
        .voice-btn.recording {
            background: var(--primary-gradient);
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        .voice-record-btn.recording {
            background: rgba(255, 59, 48, 0.1);
            border-color: #ff3b30;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});