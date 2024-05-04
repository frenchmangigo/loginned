document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'user' && password === 'user') {
        // Redirect to Google in incognito mode
        var googleURL = 'https://www.pornhub.com';
        var googleIncognitoURL = googleURL + '?utm_source=your_site&utm_medium=login&utm_campaign=incognito';
        var link = document.createElement('a');
        link.setAttribute('href', googleIncognitoURL);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noreferrer noopener');
        link.click();
    } else {
        // Display error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});