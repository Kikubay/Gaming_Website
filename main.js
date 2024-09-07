// Main JavaScript for the gaming website

// Sample game data
const games = [
    { title: 'Cyber Crusade', image: '/api/placeholder/250/150', description: 'An epic cyberpunk adventure' },
    { title: 'Stellar Siege', image: '/api/placeholder/250/150', description: 'Conquer the galaxy in this space strategy game' },
    { title: 'Neon Ninja', image: '/api/placeholder/250/150', description: 'Fast-paced action in a futuristic city' },
    { title: 'Quantum Quest', image: '/api/placeholder/250/150', description: 'Mind-bending puzzles in quantum realms' }
];

// Populate game grid
function populateGameGrid() {
    const gameGrid = document.querySelector('.game-grid');
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
        `;
        gameGrid.appendChild(gameCard);
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Close mobile menu if it's open
                document.querySelector('nav ul').classList.remove('show');

                // Calculate header height
                const headerHeight = document.querySelector('header').offsetHeight;

                // Scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });

                // Update URL without page reload
                history.pushState(null, null, `#${targetId}`);

                // Update active state in navigation
                updateActiveNavItem(targetId);
            }
        });
    });
}

// Update active state in navigation
function updateActiveNavItem(targetId) {
    document.querySelectorAll('nav a').forEach(navItem => {
        navItem.classList.remove('active');
        if (navItem.getAttribute('href') === `#${targetId}`) {
            navItem.classList.add('active');
        }
    });
}

// Form submission
function setupFormSubmission() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

// Menu toggle functionality
function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }
}

// Window resize handler
function handleResize() {
    const navUl = document.querySelector('nav ul');
    if (window.innerWidth > 768 && navUl) {
        navUl.classList.remove('show');
    }
}

// Highlight active section on scroll
function setupScrollSpy() {
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
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Initialize
function init() {
    populateGameGrid();
    setupSmoothScrolling();
    setupFormSubmission();
    setupMenuToggle();
    setupScrollSpy();
    window.addEventListener('resize', handleResize);
}

// Call init when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
