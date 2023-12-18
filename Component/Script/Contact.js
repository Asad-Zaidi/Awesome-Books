document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name,
        email,
        message
    };

    const storedData = localStorage.getItem('contactFormData') || '[]';
    const data = JSON.parse(storedData);
    data.push(formData);
    localStorage.setItem('contactFormData', JSON.stringify(data));

    displayStoredData();
});

function deleteEntry(index) {
    const storedData = localStorage.getItem('contactFormData') || '[]';
    const data = JSON.parse(storedData);
    data.splice(index, 1);
    localStorage.setItem('contactFormData', JSON.stringify(data));
    displayStoredData();
}

function displayStoredData() {
    const responseContainer = document.getElementById('responseContainer');
    const storedData = localStorage.getItem('contactFormData');
    const data = JSON.parse(storedData) || [];

    responseContainer.innerHTML = '<h2>Stored Form Data</h2>';

    if (data.length === 0) {
        responseContainer.innerHTML += '<p>No data available.</p>';
    } else {
        data.forEach((formData, index) => {
            responseContainer.innerHTML += `
                <div>
                    <strong>${index + 1}. Name:</strong> ${formData.name}<br>
                    <strong>Email:</strong> ${formData.email}<br>
                    <strong>Message:</strong> ${formData.message}<br>
                    <button onclick="deleteEntry(${index})">Delete</button>
                </div>
            `;
        });
    }
}

// Display stored data on page load
displayStoredData();
