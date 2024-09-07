// Animations for the gaming website

// Animate header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Animate sections on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate game cards
function animateGameCards() {
    gsap.from('.game-card', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });
}

// Particle effect for the background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);

        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5
        });

        animateParticle(particle);
    }
}

function animateParticle(particle) {
    gsap.to(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 10 + 5,
        ease: 'none',
        onComplete: () => animateParticle(particle)
    });
}

// Glitch effect for headings
function addGlitchEffect() {
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            gsap.to(heading, {
                skewX: 20,
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: 'none',
                onComplete: () => gsap.set(heading, { skewX: 0 })
            });
        });
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateGameCards();
    addGlitchEffect();
});
