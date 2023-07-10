const apiKey = '41d1d7f5c2475b3a16167b30bc4f265c';
const cityID = 3846869;

async function fetchWeatherData() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon;

    document.getElementById('temperature').textContent = `${temperature} °C`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}.png`;
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchWeatherData();