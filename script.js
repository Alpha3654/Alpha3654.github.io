function getWeather() {
    var api_key = '4b3f9217acc11edc0b248da68a61ac6e';
    var user_input = document.getElementById('city-input').value;
    var weatherInfoElement = document.getElementById('weather-info');
    
    // Make the API request
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user_input}&units=metric&APPID=${api_key}`)
        .then(response => response.json())
        .then(data => {
            // Extract weather and temperature information
            var weather = data.weather[0].main;
            var temp_celsius = Math.round(data.main.temp);
            var temp_fahrenheit = Math.round(data.main.temp * 9/5 + 32);

            // Display the results
            weatherInfoElement.innerHTML = `
                <strong>Weather:</strong> ${weather}<br>
                <strong>Temperature:</strong> ${temp_celsius}ºC / ${temp_fahrenheit}ºF
            `;
            
            // Update styles based on weather
            if (weather.includes('Cloud')) {
                weatherInfoElement.style.backgroundColor = '#b3c6ff';
                weatherInfoElement.style.color = '#333';
            } else if (weather.includes('Rain')) {
                weatherInfoElement.style.backgroundColor = '#85a3ff';
                weatherInfoElement.style.color = '#fff';
            } else {
                weatherInfoElement.style.backgroundColor = '#f9f9f9';
                weatherInfoElement.style.color = '#333';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoElement.textContent = 'Error fetching weather data. Please try again later.';
        });
}
