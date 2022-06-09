const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');

function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}



async function getWeather() {
  if(city.value) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=7f31b08538c3c49ca350d1f4f035e53f&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    if(data.cod === '404') {
      error.textContent = `Error! city not found for ${city.value}!`;
      temperature.textContent = '';
      weatherDescription.textContent = '';
      humidity.textContent = '';
      wind.textContent = '';
      weatherIcon.classList.remove(`owf-804`);
    } else {
      error.textContent = '';
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Wind speed ${data.wind.speed.toFixed(0)}m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
    
  } else {
    error.textContent = 'Error! Nothing to geocode for!';
  }
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

function onloadHandler() {
  getLocalStorage();
  getWeather();
}

// document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
window.addEventListener('load', onloadHandler);