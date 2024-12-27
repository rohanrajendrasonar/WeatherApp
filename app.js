const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const error = document.querySelector('.Error');
const weatherBody = document.querySelector('.weather-body');




async function showeather(city){

    const key = 'f2d796a33f951eb55a5d483651a28b3e';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const weather_data = await fetch(`${url}`).then( x => x.json());
    console.log(weather_data);

    if(weather_data.cod === '404'){
        console.log('error');
        error.style.display = 'flex';
        weatherBody.style.display = 'none';
        return;
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup><sup>o</sup>C</sup>`;

    description.innerHTML= `${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main)
    {
        case 'Snow':
            weatherImg.src = '/Assets/snow.png';
            break;
        case 'Clouds':
            weatherImg.src = '/Assets/cloud.png';
            break;
        case 'Clear':
            weatherImg.src = '/Assets/clear.png';
            break;
        case 'Rain':
            weatherImg.src = '/Assets/rain.png';
            break;
        case 'Mist':
            weatherImg.src = '/Assets/mist.png';
            break;
    }

}

searchBtn.addEventListener( 'click', () => {
    showeather(inputBox.value);
});
