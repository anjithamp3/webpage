document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.querySelector('.form');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const loginButton = form.querySelector('.btnn');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Interactive menu
    const menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`You clicked on ${item.textContent}`);
        });
    });

    // Dynamic content update
    const joinUsButton = document.querySelector('.cn a');
    const contentSection = document.querySelector('.content .par');

    joinUsButton.addEventListener('click', (e) => {
        e.preventDefault();
        contentSection.innerHTML = 'Thank you for joining us! Stay tuned for updates.';
    });
});
