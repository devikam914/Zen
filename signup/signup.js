// signup.js

document.querySelector('.signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic form validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Check if user already exists (optional, based on email)
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUser.some(user => user.email === email)) {
        alert('This email is already registered. Please log in.');
        return;
    }

    // Save user to localStorage (simulating a database)
    const newUser = { name, email, password };
    existingUser.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUser));

    alert('Account created successfully!');
    window.location.href = "index.html"; // Redirect to login page after successful signup
});
