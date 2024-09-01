const apiKey = '78bfd7791b52517e2047c7a4064c2d5b'

const weatherData = document.querySelector('.w-data')
const weatherLogo = document.querySelector('.w-logo')
const inputField = document.querySelector('#inputCity')
const submit = document.querySelector('#submit');
const temp = document.querySelector('.temp');
const consdition = document.querySelector('.condition');
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

        const displayTemp = Math.round(data.main.temp)
        temp.textContent =`${displayTemp}°C`
    } catch (error) {
    }
     
}

