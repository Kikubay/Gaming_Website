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
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Glitch effect on hover for headings
function addGlitchEffect() {
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.classList.add('glitch');
        });
        heading.addEventListener('mouseout', () => {
            heading.classList.remove('glitch');
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateGameGrid();
    addGlitchEffect();
});

// Responsive menu toggle
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.className = 'menu-toggle';
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Window resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('nav ul').classList.remove('show');
    }
});