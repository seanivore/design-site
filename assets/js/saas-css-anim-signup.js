document.addEventListener('DOMContentLoaded', function() {
    // Password validation
    const passwordInput = document.getElementById('password');
    const requirements = document.querySelectorAll('.requirement');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            
            // Check length
            requirements[0].dataset.valid = password.length >= 8;
            
            // Check uppercase
            requirements[1].dataset.valid = /[A-Z]/.test(password);
            
            // Check number
            requirements[2].dataset.valid = /\d/.test(password);
            
            // Update icons
            requirements.forEach(req => {
                const icon = req.querySelector('i');
                if (req.dataset.valid === 'true') {
                    icon.className = 'fas fa-check-circle';
                } else {
                    icon.className = 'fas fa-circle';
                }
            });
        });
    }
    
    // Form submission
    const form = document.querySelector('.signup-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const terms = form.querySelector('input[name="terms"]').checked;
            
            if (!email || !password || !terms) {
                alert('Please fill in all fields and accept the terms.');
                return;
            }
            
            // Check if all password requirements are met
            const allValid = Array.from(requirements).every(req => req.dataset.valid === 'true');
            if (!allValid) {
                alert('Please ensure your password meets all requirements.');
                return;
            }
            
            // Simulate form submission
            console.log('Form submitted:', { email, password });
            
            // Redirect to profile setup
            window.location.href = 'css-saas-profile-setup.html';
        });
    }
    
    // Social auth buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 
                           this.classList.contains('github-btn') ? 'GitHub' : 'Passkey';
            
            console.log(`Authenticating with ${provider}`);
            // In a real app, this would initiate OAuth flow or Passkey authentication
        });
    });
    
    // Add passkey support detection
    const passkeyBtn = document.querySelector('.passkey-btn');
    if (passkeyBtn && 'credentials' in navigator && 'preventSilentAccess' in navigator.credentials) {
        passkeyBtn.addEventListener('click', async function() {
            try {
                // Check if platform authenticator is available
                const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
                if (available) {
                    console.log('Passkey authentication available');
                    // In a real app, this would start the WebAuthn flow
                } else {
                    alert('Passkey authentication is not available on this device.');
                }
            } catch (error) {
                console.error('Passkey error:', error);
                alert('Passkey authentication is not supported in this browser.');
            }
        });
    } else if (passkeyBtn) {
        passkeyBtn.style.display = 'none';
    }
    
    // Create wave bands dynamically (reused from main wave animation)
    const waveContainer = document.getElementById('waveContainer');
    if (waveContainer) {
        // Create 8 wave bands
        for (let i = 0; i < 8; i++) {
            const waveBand = document.createElement('div');
            waveBand.className = 'wave-band';
            waveContainer.appendChild(waveBand);
        }
    }
});