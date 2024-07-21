
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const responseMessage = document.getElementById('response');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'sendEmail.php'); // Replace with your server-side script URL

    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successful request
        responseMessage.textContent = 'Message sent successfully!';
        responseMessage.style.color = '#00cc00'; // Green color for success
        form.reset(); // Reset the form
      } else {
        // Request failed
        responseMessage.textContent = 'Failed to send message. Please try again later.';
        responseMessage.style.color = '#cc0000'; // Red color for error
      }
    };

    xhr.onerror = function() {
      // Network errors
      responseMessage.textContent = 'Network error occurred. Please try again later.';
      responseMessage.style.color = '#cc0000'; // Red color for error
    };

    xhr.send(formData);
  });
});
