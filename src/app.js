async function fetchWeatherData(location) {
    const apiKey = 'JA4BM99882BW8TJF7AL5YERHB';
    const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
    const info = document.getElementById('weather-info');
    
    try {
        const response = await fetch(`${baseUrl}${location}?key=${apiKey}`);
        const data = await response.json();
        const temperature = data.currentConditions.temp;
        const conditions = data.currentConditions.conditions;
        const icon = data.currentConditions.icon
        console.log(`Temperature: ${temperature}
                    Conditions: ${conditions}
                    Day: ${icon}`);
        info.innerHTML = `
                    <div>Temperature: ${temperature}</div>
                    <div>Conditions: ${conditions}</div>
                    <div>Day: ${icon}</div>    
                    `;
    } catch (error) {
        console.log('Error: fetching weather data:', error);
    }
}

export default fetchWeatherData;
