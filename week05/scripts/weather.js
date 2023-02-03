const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

let q = "Trier"
let units = "imperial"
let apiKey = "bda1951e27ddc871956470be4f172289";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let desc = data.weather[0];
    const iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "weather icon");
    captionDesc.textContent = `${desc.main}`;
}

apiFetch();