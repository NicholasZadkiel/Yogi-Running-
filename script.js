// script.js

// Form validation function
function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        // Example validation logic
        const name = document.querySelector('#name');
        if (name.value === '') {
            isValid = false;
            alert('Name is required.');
        }
        // Cancel form submission if not valid
        if (!isValid) {
            event.preventDefault();
        }
    });
}

// Animations function
function animateElement(element) {
    element.style.transition = 'transform 0.5s ease';
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 500);
}

// Interactive features
function setupInteractiveFeatures() {
    const button = document.querySelector('#myButton');
    button.addEventListener('click', function() {
        const box = document.querySelector('#box');
        animateElement(box);
    });
}

// Initialize functions on window load
window.onload = function() {
    validateForm();
    setupInteractiveFeatures();
};