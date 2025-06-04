document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
  
    if (email) {
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('email').value = ''; // Clear email input
    }
  });
  