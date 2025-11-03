// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scrolling for anchor links
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

// Form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    try {
        // Save message to JSON file (in a real app, this would be sent to a server)
        await saveMessage(formData);
        
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    } catch (error) {
        console.error('Error saving message:', error);
        alert('There was an error sending your message. Please try again.');
    }
});

// Save message to JSON (simulated - in a real app, this would be a server request)
async function saveMessage(messageData) {
    try {
        // In a real application, this would be a POST request to a server
        // For demonstration, we'll just log it and store in localStorage
        console.log('Message saved:', messageData);
        
        // Store in localStorage for demonstration
        let messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
        messages.push(messageData);
        localStorage.setItem('portfolioMessages', JSON.stringify(messages));
        
        return { success: true };
    } catch (error) {
        throw new Error('Failed to save message');
    }
}