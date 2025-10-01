// Initialize Vanta.js HALO animation on homepage
if (document.getElementById('hero-background')) {
    window.addEventListener('DOMContentLoaded', () => {
        if (typeof VANTA !== 'undefined' && VANTA.HALO) {
            VANTA.HALO({
                el: "#hero-background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                baseColor: 0x6f1224,
                backgroundColor: 0x141424,
                amplitudeFactor: 1.60,
                xOffset: -0.42,
                size: 2.70
            });
        }
    });
}

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in-scroll class to all animated elements
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in-scroll');
        observer.observe(el);
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Quiz navigation
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const quizForm = document.getElementById('quiz-form');

if (nextBtn && prevBtn && quizForm) {
    let currentQuestion = 1;
    const totalQuestions = 5;
    
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < totalQuestions) {
            currentQuestion++;
            updateQuizProgress();
        } else {
            // On last question, go to signup
            window.location.href = 'signup.html';
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 1) {
            currentQuestion--;
            updateQuizProgress();
        }
    });
    
    function updateQuizProgress() {
        const progressText = document.querySelector('.quiz-progress');
        const progressFill = document.querySelector('.progress-fill');
        
        if (progressText) {
            progressText.textContent = `${currentQuestion} of ${totalQuestions}`;
        }
        
        if (progressFill) {
            const percentage = (currentQuestion / totalQuestions) * 100;
            progressFill.style.width = `${percentage}%`;
        }
        
        // Update button text on last question
        if (currentQuestion === totalQuestions) {
            nextBtn.innerHTML = 'Submit <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4"/></svg>';
        } else {
            nextBtn.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4"/></svg>';
        }
    }
}

// Signup form submission
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // In a real app, this would submit to a server
        console.log('Form submitted:', { name, email });
        
        // Show success message
        alert('Thank you for signing up! We\'ll be in touch soon.');
        
        // Redirect to homepage
        window.location.href = 'homepage.html';
    });
}

// Smooth scroll for anchor links
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