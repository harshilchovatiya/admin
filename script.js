// Fetch data from your API
fetch('http://localhost:3000/api/users', { mode: 'cors' })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const userTableBody = document.querySelector('#userTable tbody');

    data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.subscriptionStart}</td>
        <td>${user.subscriptionEnd}</td>
        <td>${user.status}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="editUser('${user._id}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser('${user._id}')">Delete</button>
        </td>
      `;

      userTableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to handle edit user action
function editUser(userId) {
  // Implement your logic to edit user data
  console.log('Edit user:', userId);
}

// Function to handle delete user action
function deleteUser(userId) {
  // Implement your logic to delete user data
  console.log('Delete user:', userId);
}
