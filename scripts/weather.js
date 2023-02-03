const weather = document.getElementById("weather");
const weatherIcon = document.querySelector("#weather-icon");
const lat = 40;
const lon = -111.7;
const units = "imperial";
const apiKey = "bda1951e27ddc871956470be4f172289";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    let temp = data.main.temp;
    let desc = data.weather[0];
    weather.innerHTML = temp.toFixed(1) + "&deg;F " + desc.description;
    const iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;
    console.log(iconsrc)
    weatherIcon.setAttribute("src", iconsrc);
}

getWeather();