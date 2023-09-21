document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const locationInput = document.getElementById('location-input');
    const temperature = document.getElementById('temperature');
    const conditions = document.getElementById('conditions');

    searchButton.addEventListener('click', function () {
        const location = locationInput.value;

        // Replace with your weather API endpoint and API key
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.example.com/weather?location=${location}&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                temperature.textContent = `Temperature: ${data.temperature}°C`;
                conditions.textContent = `Conditions: ${data.conditions}`;
                // Add more weather data as needed
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    });
});
