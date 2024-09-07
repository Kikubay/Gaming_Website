// Button functionality and interactive elements

// Hover effect for game cards
function addGameCardHoverEffect() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
    });
}

// Pulsating effect for the main CTA button
function addPulsatingEffect() {
    const ctaButton = document.querySelector('#home button');
    if (ctaButton) {
        gsap.to(ctaButton, {
            scale: 1.1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }
}

// Interactive nav menu highlighting
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Form input animation
function animateFormInputs() {
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, { borderColor: '#00ff00', duration: 0.3 });
        });
        input.addEventListener('blur', () => {
            gsap.to(input, { borderColor: 'transparent', duration: 0.3 });
        });
    });
}

// Button click effect
function addButtonClickEffect() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                onComplete: () => gsap.to(button, { scale: 1, duration: 0.1 })
            });
        });
    });
}

// Easter egg: Konami code
function addKonamiCodeEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    alert('Congratulations! You've unlocked the secret gaming mode!');
    document.body.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        document.body.style.transform = 'none';
    }, 3000);
}

// Initialize all interactions
function initializeInteractions() {
    addGameCardHoverEffect();
    addPulsatingEffect();
    highlightCurrentSection();
    animateFormInputs();
    addButtonClickEffect();
    addKonamiCodeEasterEgg();
}

// Call this function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeInteractions);