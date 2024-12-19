const apiKey = 'YOUR_API_KEY';
const city = 'Madrid';

async function getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            
            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('weather-description').textContent = `Clima: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humedad: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Viento: ${data.wind.speed} m/s`;
        } else {
            alert('Error al obtener los datos del clima');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('No se pudo obtener la información del clima.');
    }
}

getWeather();