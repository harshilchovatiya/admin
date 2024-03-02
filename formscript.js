document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('createUserForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const userData = {};

    formData.forEach((value, key) => {
      userData[key] = value;
    });
    console.log(JSON.stringify(userData));

    // Convert dates to ISO format
    userData.subscriptionStart = new Date(userData.subscriptionStart).toISOString();
    userData.subscriptionEnd = new Date(userData.subscriptionEnd).toISOString();

    // Post data to API endpoint
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('User created successfully:', data);
      // Optionally, you can redirect to another page or show a success message
    })
    .catch(error => {
      console.error('Error creating user:', error);
      console.log('Response Text:', error.text()); // Log the response text for debugging
      // Handle error (e.g., show error message to the user)
    });
  });
});
