const weather = document.getElementById("weather");
const h2 = document.querySelector("#weather h2");

const currentWeather = document.createElement("section");
const childImg = document.createElement("img");

const lat = 39.14346;
const lon = -77.201606;
const units = "imperial";
const apiKey = "bda1951e27ddc871956470be4f172289";
const cnt = 32;

const todaysDate = new Date();
const tomorrowsDate = new Date(todaysDate);
const twoDaysDate = new Date(todaysDate);
const threeDaysDate = new Date(todaysDate);
tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);
twoDaysDate.setDate(twoDaysDate.getDate() + 2);
threeDaysDate.setDate(threeDaysDate.getDate() + 3);

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&cnt=${cnt}&appid=${apiKey}`;

async function getWeather() {
    
    // Request data
    let response = await fetch(url);
    let responseForecast = await fetch(urlForecast);

    let data = await response.json();
    let dataForecast = await responseForecast.json();

    

    displayData(data, dataForecast);
}

function displayData(data, dataForecast) {
    let temp = data.main.temp;
    let desc = data.weather[0];
    let iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;

    // Current weather block
    currentWeather.innerHTML = "Current Weather<br>" + temp.toFixed(1) + "&deg;F " + desc.description + "<br>" + weather.innerHTML;
    childImg.src = iconsrc;
    childImg.alt = "weather icon";
    currentWeather.appendChild(childImg);
    weather.appendChild(currentWeather);

    // Forecasted 3 days
    forecastDay(dataForecast);
}

function forecastDay(dataForecast) {
    let daysAhead = 1;
    let today = new Date();
    let tomorrow = new Date(today.getTime() + daysAhead * 24 * 60 * 60 * 1000);
    daysAhead = 2;
    let twoDaysAhead = new Date(today.getTime() + daysAhead * 24 * 60 * 60 * 1000);
    daysAhead = 3;
    let threeDaysAhead = new Date(today.getTime() + daysAhead * 24 * 60 * 60 * 1000);
    
    let tomorrowSection = document.createElement("section");
    let tomorrowForecastText = document.createElement("div");
    let twoDaysSection = document.createElement("section");
    let twoDaysForecastText = document.createElement("div");
    let threeDaysSection = document.createElement("section");
    let threeDaysForecastText = document.createElement("div");



    // Extract temperature data
    let tomorrowsTempList = dataForecast["list"].filter(function(timestamp) {
        timestamp["dt"] = new Date(timestamp["dt"] * 1000); // only do this once
        return timestamp["dt"].getDate() === tomorrowsDate.getDate();
    })
    let tomorrowTemps = new Array();
    tomorrowsTempList.forEach((timestamp) => {
        tomorrowTemps.push(timestamp.main.temp);
    })

    let twoDaysTempList = dataForecast["list"].filter(function(timestamp) {
        return timestamp["dt"].getDate() === twoDaysDate.getDate();
    })
    let twoDaysTemps = new Array();
    twoDaysTempList.forEach((timestamp) => {
        twoDaysTemps.push(timestamp.main.temp);
    })

    let threeDaysTempList = dataForecast["list"].filter(function(timestamp) {
        return timestamp["dt"].getDate() === threeDaysDate.getDate();
    })
    let threeDaysTemps = new Array();
    threeDaysTempList.forEach((timestamp) => {
        threeDaysTemps.push(timestamp.main.temp);
    })



    // create text and image, print next 3 days to the DOM
    let desc = tomorrowsTempList[4].weather[0];
    let iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;
    let childImg = document.createElement("img");
    tomorrowForecastText.innerHTML = "Forecast " + tomorrow.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    }) + "<br>" + Math.round(Math.max(...tomorrowTemps)) + "&deg;F " + desc.description + "<br>";
    childImg.src = iconsrc;
    childImg.alt = "weather icon";
    tomorrowForecastText.appendChild(childImg);

    desc = twoDaysTempList[4].weather[0];
    iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;
    let childImg2 = document.createElement("img");
    twoDaysForecastText.innerHTML = "Forecast " + twoDaysAhead.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    }) + "<br>" + Math.round(Math.max(...twoDaysTemps)) + "&deg;F " + desc.description + "<br>";
    childImg2.src = iconsrc;
    childImg2.alt = "weather icon";
    twoDaysForecastText.appendChild(childImg2);

    desc = threeDaysTempList[4].weather[0];
    iconsrc = `https://openweathermap.org/img/w/${desc.icon}.png`;
    let childImg3 = document.createElement("img");
    threeDaysForecastText.innerHTML = "Forecast " + threeDaysAhead.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    }) + "<br>" + Math.round(Math.max(...threeDaysTemps)) + "&deg;F " + desc.description + "<br>";
    childImg3.src = iconsrc;
    childImg3.alt = "weather icon";
    threeDaysForecastText.appendChild(childImg3);

    tomorrowSection.appendChild(tomorrowForecastText);
    weather.appendChild(tomorrowSection);
    twoDaysSection.appendChild(twoDaysForecastText);
    weather.appendChild(twoDaysSection);
    threeDaysSection.appendChild(threeDaysForecastText);
    weather.appendChild(threeDaysSection);
}

getWeather();