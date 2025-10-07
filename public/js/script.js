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

// Mobile menu toggle with hamburger-to-X animation
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Quiz data
const questions = [
    {
        question: "What motivates you most in fitness?",
        options: [
            {text: "Personal growth", weight: {Explorer: 40, Fighter: 35, Connector: 15, Nurturer: 10}},
            {text: "Strength & Confidence", weight: {Explorer: 25, Fighter: 40, Connector: 20, Nurturer: 15}},
            {text: "Fun & Variety", weight: {Explorer: 30, Fighter: 20, Connector: 25, Nurturer: 25}},
            {text: "Community connection", weight: {Explorer: 12, Fighter: 17, Connector: 46, Nurturer: 25}},
            {text: "Stress relief", weight: {Explorer: 18, Fighter: 13, Connector: 19, Nurturer: 50}}
        ]
    },
    {
        question: "What you preferred workout vibe?",
        options: [
            {text: "Solo & Intense", weight: {Explorer: 33, Fighter: 41, Connector: 16, Nurturer: 10}},
            {text: "Structured & Goal-focused", weight: {Explorer: 38, Fighter: 36, Connector: 16, Nurturer: 10}},
            {text: "Flexible & Adaptable", weight: {Explorer: 28, Fighter: 21, Connector: 26, Nurturer: 25}},
            {text: "Group & Social", weight: {Explorer: 13, Fighter: 16, Connector: 46, Nurturer: 25}},
            {text: "Gentle & Supportive", weight: {Explorer: 13, Fighter: 11, Connector: 21, Nurturer: 55}}
        ]
    },
    {
        question: "How do you recharge mentally?",
        options: [
            {text: "Outdoor adventures", weight: {Explorer: 45, Fighter: 27, Connector: 20, Nurturer: 8}},
            {text: "Meditation & Reflection", weight: {Explorer: 20, Fighter: 32, Connector: 15, Nurturer: 33}},
            {text: "Creative hobbies", weight: {Explorer: 30, Fighter: 27, Connector: 25, Nurturer: 18}},
            {text: "Socializing", weight: {Explorer: 15, Fighter: 22, Connector: 45, Nurturer: 18}},
            {text: "Helping others", weight: {Explorer: 15, Fighter: 17, Connector: 20, Nurturer: 48}}
        ]
    },
    {
        question: "What's your natural vibe?",
        options: [
            {text: "The Trailblazer - I lead the way", weight: {Explorer: 42, Fighter: 24, Connector: 21, Nurturer: 13}},
            {text: "The Challenger - I push boundaries", weight: {Explorer: 27, Fighter: 44, Connector: 16, Nurturer: 13}},
            {text: "The Creative - I think outside the box", weight: {Explorer: 32, Fighter: 24, Connector: 21, Nurturer: 23}},
            {text: "The Connector - I bring people together", weight: {Explorer: 12, Fighter: 19, Connector: 46, Nurturer: 23}},
            {text: "The Supporter - I lift others up", weight: {Explorer: 12, Fighter: 14, Connector: 21, Nurturer: 53}}
        ]
    }
];

const personalityData = {
    Explorer: {
        quote: "Offline vibes, ready to manifest growth!",
        title: "The Explorer",
        description: "You thrive on new experiences and pushing your boundaries. Your main character energy is about discovering what your body and mind can achieve.",
        strengths: ["Adventurous", "Open-minded", "Growth-focused"],
        workoutStyle: "Varied routines, outdoor activities, functional fitness",
        bestMatch: "Connector or Nurturer"
    },
    Fighter: {
        quote: "No yikes, just growth and determination!",
        title: "The Fighter",
        description: "You're driven by challenge and competition. Your energy transforms obstacles into opportunities for strength building.",
        strengths: ["Determined", "Goal-oriented", "Resilient"],
        workoutStyle: "High-intensity training, strength building, competitive sports",
        bestMatch: "Connector or Nurturer"
    },
    Connector: {
        quote: "Main character energy through community!",
        title: "The Connector",
        description: "Your superpower is bringing people together. You believe fitness is better when shared with others who inspire and motivate.",
        strengths: ["Social", "Motivating", "Inclusive"],
        workoutStyle: "Group classes, partner workouts, team sports",
        bestMatch: "Explorer or Fighter"
    },
    Nurturer: {
        quote: "Flight to better health, lifting others up!",
        title: "The Nurturer",
        description: "You find fulfillment in supporting others' journeys. Your gentle strength creates safe spaces for growth and healing.",
        strengths: ["Supportive", "Empathetic", "Patient"],
        workoutStyle: "Mindful movement, yoga, rehabilitation-focused training",
        bestMatch: "Explorer or Fighter"
    }
};

// Quiz navigation
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const quizForm = document.getElementById('quiz-form');

if (nextBtn && prevBtn && quizForm) {
    let currentQuestion = 0;
    const totalQuestions = questions.length;
    let answers = [];
    let scores = {Explorer: 0, Fighter: 0, Connector: 0, Nurturer: 0};
    
    // Initialize quiz
    function renderQuestion() {
        const question = questions[currentQuestion];
        document.getElementById('question-text').textContent = question.question;
        
        // Clear form
        quizForm.innerHTML = '';
        
        // Render options
        question.options.forEach((option, index) => {
            const label = document.createElement('label');
            label.className = 'radio-option';
            label.innerHTML = `
                <input type="radio" name="answer" value="${index}" ${answers[currentQuestion] === index ? 'checked' : ''}>
                <span>${option.text}</span>
            `;
            quizForm.appendChild(label);
        });
        
        updateProgress();
    }
    
    function updateProgress() {
        const progressText = document.getElementById('progress-text');
        const progressFill = document.getElementById('progress-fill');
        
        progressText.textContent = `${currentQuestion + 1} of ${totalQuestions}`;
        const percentage = ((currentQuestion + 1) / totalQuestions) * 100;
        progressFill.style.width = `${percentage}%`;
        
        // Update button visibility
        prevBtn.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
        
        // Update next button text
        if (currentQuestion === totalQuestions - 1) {
            nextBtn.innerHTML = 'Submit <i class="fas fa-arrow-right"></i>';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
    }
    
    function saveAnswer() {
        const selected = quizForm.querySelector('input[name="answer"]:checked');
        if (selected) {
            answers[currentQuestion] = parseInt(selected.value);
            return true;
        }
        return false;
    }
    
    function calculateResults() {
        // Reset scores
        scores = {Explorer: 0, Fighter: 0, Connector: 0, Nurturer: 0};
        
        // Calculate scores based on answers
        answers.forEach((answerIndex, questionIndex) => {
            const weights = questions[questionIndex].options[answerIndex].weight;
            Object.keys(weights).forEach(personality => {
                scores[personality] += weights[personality];
            });
        });
        
        // Find highest score
        let maxScore = 0;
        let topPersonality = '';
        Object.keys(scores).forEach(personality => {
            if (scores[personality] > maxScore) {
                maxScore = scores[personality];
                topPersonality = personality;
            }
        });
        
        return topPersonality;
    }
    
    function showResults(personality) {
        const data = personalityData[personality];
        
        // Store result in localStorage for signup form
        localStorage.setItem('quizPersonality', personality);
        localStorage.setItem('quizPersonalityTitle', data.title);
        
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('results-section').style.display = 'block';
        
        document.getElementById('result-quote').textContent = data.quote;
        document.getElementById('result-title').textContent = data.title;
        document.getElementById('result-description').textContent = data.description;
        document.getElementById('result-workout').textContent = data.workoutStyle;
        document.getElementById('result-match').textContent = data.bestMatch;
        
        const strengthsList = document.getElementById('result-strengths');
        strengthsList.innerHTML = '';
        data.strengths.forEach(strength => {
            const li = document.createElement('li');
            li.textContent = strength;
            strengthsList.appendChild(li);
        });
    }
    
    nextBtn.addEventListener('click', () => {
        if (!saveAnswer()) {
            alert('Please select an answer before continuing.');
            return;
        }
        
        if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            // Calculate and show results
            const result = calculateResults();
            showResults(result);
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            saveAnswer();
            currentQuestion--;
            renderQuestion();
        }
    });
    
    // Initialize first question
    renderQuestion();
}

// Signup form with validation
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    // Auto-populate hidden personality field if user took the quiz
    const savedPersonality = localStorage.getItem('quizPersonalityTitle');
    if (savedPersonality) {
        const personalityInput = document.getElementById('personality');
        if (personalityInput) {
            personalityInput.value = savedPersonality;
        }
    }
    
    // Form validation with regex
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        document.getElementById('name-error').textContent = '';
        document.getElementById('email-error').textContent = '';
        document.getElementById('consent-error').textContent = '';
        
        let isValid = true;
        
        // Validate name (at least 2 characters, letters, spaces, hyphens, apostrophes)
        const name = document.getElementById('name').value.trim();
        const nameRegex = /^[a-zA-Z\s'-]{2,}$/;
        if (!name || !nameRegex.test(name)) {
            document.getElementById('name-error').textContent = 'Please enter a valid name (at least 2 characters, letters only)';
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        // Validate required consent checkbox
        const consentAcknowledgment = document.getElementById('consent-acknowledgment');
        if (!consentAcknowledgment.checked) {
            document.getElementById('consent-error').textContent = 'You must acknowledge the data handling terms to continue';
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid, submit it
            signupForm.submit();
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#contact' || href === '#privacy' || href === '#terms') {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
