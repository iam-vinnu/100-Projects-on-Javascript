const apiKey = '78bfd7791b52517e2047c7a4064c2d5b'

const weatherData = document.querySelector('.w-data')
const weatherLogo = document.querySelector('.w-logo')
const inputField = document.querySelector('#inputCity')
const submit = document.querySelector('#submit');
const temp = document.querySelector('.temp');
const condition = document.querySelector('.condition');
const feltTemp = document.querySelector('#feels');
const humidity = document.querySelector('#humid');
const windspeed = document.querySelector('#speed');
const form = document.querySelector('form');

submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    const cityValue = inputField.value;
    getWeatherData(cityValue);
})


const getWeatherData = async (cityValue) =>{
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new Error(' There is some Network Issue ');

        }
        const data = await response.json();
        console.log(data)
        const displayTemp = Math.round(data.main.temp)
        const condi = data.weather[0].main
        const feelsLike = Math.round(data.main.feels_like) 
        const humid =data.main.humidity;
        const windSpeed = data.wind.speed;
        const icon = data.weather.icon;
        console.log(condition)


        temp.textContent =`${displayTemp}°C`
        feltTemp.textContent = `${feelsLike}°C`
        humidity.textContent = humid
        condition.textContent = condi
        windspeed.textContent = `${windSpeed}K/h`
    } catch (error) {
    }
     
}

