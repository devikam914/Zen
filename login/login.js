// login.js

// Example of basic validation or event handling for the login form
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to the server for now

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // You can later add a backend API call here to authenticate users
    console.log('User Email:', email);
    console.log('User Password:', password);
    
    // Example redirect after successful login (you can replace with actual authentication)
    window.location.href = "../dashboard/dash.html"; // Redirect to the main dashboard page
});
