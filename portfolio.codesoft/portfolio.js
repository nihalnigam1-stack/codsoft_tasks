// Create Meteors
function createMeteors() {
    const container = document.getElementById('meteor-container');
    const meteorCount = 20;

    for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = Math.random() * 100 + '%';
        meteor.style.top = Math.random() * 100 + '%';
        meteor.style.animationDuration = (Math.random() * 3 + 2) + 's';
        meteor.style.animationDelay = Math.random() * 5 + 's';
        meteor.style.width = (Math.random() * 2 + 1) + 'px';
        meteor.style.height = (Math.random() * 50 + 30) + 'px';
        container.appendChild(meteor);
    }
}

// Create Stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.width = (Math.random() * 2 + 1) + 'px';
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}

// Create Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// Add mouse move effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 20;
        const yOffset = (y - 0.5) * speed * 20;
        card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    createMeteors();
    createStars();
    createParticles();
});
