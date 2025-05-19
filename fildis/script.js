// Mobile menu toggle
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.classList.remove('active');
    }
});
