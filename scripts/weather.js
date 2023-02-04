const weather = document.getElementById("weather");

const childImg = document.createElement("img");

const lat = 40;
const lon = -111.7;
const units = "imperial";
const apiKey = "bda1951e27ddc871956470be4f172289";

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            console.log("you fail");
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    let temp = data.main.temp;
    let desc = data.weather[0];
    let iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;

    weather.innerHTML = temp.toFixed(1) + "&deg;F " + desc.description + weather.innerHTML;
    childImg.src = iconsrc;
    childImg.alt = "weather icon";
    weather.appendChild(childImg);
    console.log(weather);
}

getWeather();