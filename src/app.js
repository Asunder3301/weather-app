async function fetchWeatherData(location) {
    const apiKey = 'JA4BM99882BW8TJF7AL5YERHB';
    const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
    
    try {
        const response = await fetch(`${baseUrl}${location}?key=${apiKey}`);
        const data = await response.json();
        const weatherData = data.currentConditions
        console.log(weatherData);
    } catch (error) {
        console.log('Error: fetching weather data:', error);
    }
}

export default fetchWeatherData;