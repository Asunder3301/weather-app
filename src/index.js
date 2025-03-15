import "./styles.css";
import fetchWeatherData from "./app.js";

const weatherInfo = document.getElementById('weather-info');
const button = document.getElementById('submit-button');
const locationInput = document.getElementById('location-input');

button.addEventListener('click', () => {
    const location = locationInput.value;

    if (location) {
        fetchWeatherData(location);
    } else {
        weatherInfo.innerHTML = 'Please enter a location';
    }
});
