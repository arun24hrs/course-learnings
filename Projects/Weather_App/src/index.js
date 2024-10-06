const apiKey = "43487c6199a6365ee9a70cd371f25058";

let location1 = document.getElementById("cityName");
let search = document.querySelector("#searchButton");
let weatherContainer = document.querySelector("#showWeather");
let forcastContainer = document.getElementById("5dayContainer");
let currentLocation = document.getElementById("currentLocationButton");


const getWeather = async() => {
    let location = location1.value;
    if(location != "" && location != undefined){
        weatherContainer.textContent = "Fetching Weather Data..."
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            let data = await response.json();
            showData(data);
            getForcast(data.name);
        } catch (error) {
            let heading = document.getElementById("cityNameHeading");
            heading.innerHTML="";
            weatherContainer.textContent = "Error fetching weather data!"

        }
    } else {
        alert("Enter a city name to get weather.")
    }
}
search.addEventListener("click", getWeather);

const showData = (data) => {
    // console.log(data);
    weatherContainer.innerHTML=null;
    let cityName = document.querySelector("#cityNameHeading");
    cityName.textContent = `Showing weather of ${data.name}`
    const main = data.main;
    const wind = data.wind;
    const sys = data.sys;

    // Appending Icon
    let weather = data.weather[0];
    let currentIcon = (weather.main);
    let imgageHolder = document.createElement("div");
    imgageHolder.setAttribute("id", "imgHolder");
    let weatherIcon = document.createElement("img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    weatherIcon.style.margin="auto";
    imgageHolder.append(weatherIcon);
    weatherContainer.append(imgageHolder)

    // Appending Weather Data
    let tempHolder = document.createElement("div");
    tempHolder.setAttribute("id", "tempHolder");
    let temp = document.createElement("span");
    let degree = document.createElement("img");
    degree.setAttribute("id", "degreeImg")
    let description = document.createElement("p");
    let trimmedTemp = main.temp
    temp.textContent = trimmedTemp.toFixed(1);
    temp.style.fontSize = "50px"
    degree.src = "https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-celsius-weather-justicon-lineal-color-justicon.png";
    description.textContent = `${weather.description}`;
    description.style.fontSize = "12px";
    temp.append(degree);
    tempHolder.append(temp, description);
    weatherContainer.append(tempHolder);

    // Detailed Weather Data
    let detailedDataHolder = document.createElement("div");
    detailedDataHolder.setAttribute("id", "detailedDataHolder");
    let feel = document.createElement("p");
    feel.innerHTML = `Currently Feels: <strong>${(main.feels_like).toFixed(1)}°C</strong>`;
    let minTemp = document.createElement("p");
    minTemp.innerHTML = `Today's Min.: <strong>${(main.temp_min).toFixed(1)}°C</strong>`;
    let maxTemp = document.createElement("p");
    maxTemp.innerHTML = `Today's Max.: <strong>${(main.temp_max).toFixed(1)}°C</strong>`;
    detailedDataHolder.append(feel,minTemp,maxTemp);
    weatherContainer.append(detailedDataHolder);

    // additional data
    let a = new Date(sys.sunrise * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    if(min<10){
        min = `0${min}`
    }
    let sec = a.getSeconds();
    if(sec<10){
        sec = `0${sec}`
    }

    let b = new Date(sys.sunset * 1000);
    let hr = b.getHours();
    let mi = b.getMinutes();
    if(mi<10){
        mi = `0${mi}`
    }
    let se = b.getSeconds();
    if(se<10){
        se = `0${se}`
    }
    let additionalDataHolder = document.createElement("div");
    additionalDataHolder.setAttribute("id", "additionalDataHolder");
    let windSpeed = document.createElement("p");
    windSpeed.innerHTML = `Wind Speed: <strong>${((wind.speed)*3.6).toFixed(1)}</strong> <span style="font-size: 14px">Km/h</span>`;
    let sunrise = document.createElement("p");
    sunrise.innerHTML = `Sunrise: <strong>${hour}:${min}:${sec} AM</strong> <img src="https://img.icons8.com/color/48/sunrise.png"/>`;
    let sunriseImg = document.createElement("img");
    sunriseImg.src = ""
    let sunset = document.createElement("p");
    sunset.innerHTML = `Sunset: <strong>${hr}:${mi}:${se} PM</strong> <img src="https://img.icons8.com/color/48/sunset.png"/>`;
    additionalDataHolder.append(windSpeed, sunrise, sunset);
    weatherContainer.append(additionalDataHolder);

    // map appending

    let mapContainer = document.getElementById("gmap_canvas");
    mapContainer.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


    // Saving Recent City to localStorage

    let recentCities = JSON.parse(localStorage.getItem('cities')) || [];
    if (!recentCities.includes(data.name)) {
        recentCities.push(data.name);
        if(recentCities.length>6){
            recentCities.shift();
        }
        localStorage.setItem('cities', JSON.stringify(recentCities));
    }

}


// Forcast

const getForcast = async(location) => {
    console.log(location);
    if(location != "" && location != undefined){
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`);
            let data = await response.json();
            forcastShow(data);
        } catch (error) {
            console.log(error);
        }
    }
    else {
        alert("Enter a city name to get weather.")
    }
}

const forcastShow = (data) => {
    forcastContainer.innerHTML = null;
    let cityName = data.city.name;
    data = data.list;
    let forcast = data.filter((el)=> el.dt_txt.includes("06:00:00") || el.dt_txt.includes("12:00:00"));
    // console.log("forcastttttt", forcast);
    let forcastHeading = document.createElement("h2");
    forcastHeading.innerText = `5 Day Forcast for ${cityName}`
    forcastHeading.setAttribute("id", "forecastHeading")
    // console.log("forcastttttt", forcast.length);
    let forcastCardContainer = document.createElement("div");
    forcastCardContainer.setAttribute("id", "forcastCardContainer");
    let maximumTemp = "";
    let minimumTemp = "";
    let count=0;
    forcast.forEach((el)=> {
        count++;
        let icon = el.weather[0].icon
        let card = document.createElement("div");
        card.setAttribute("class", "forcastCard");
        let iconImg = document.createElement("img");
        iconImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        let date = document.createElement("p");
        let weather = document.createElement("p");
        date.textContent = new Date(el.dt_txt.split(" ")[0]).toLocaleDateString();
        date.style.fontWeight = "bold"
        weather.textContent = el.weather[0].main;
        let maxTemp = document.createElement("p");
        let minTemp = document.createElement("p");
        if (el.dt_txt.includes("12:00:00")){
            maximumTemp+=el.main.temp_max;
        }else {
            minimumTemp+=el.main.temp_min;
        }
            
        if(count%2==0) {
            minTemp.innerHTML = `Min. <strong>${minimumTemp}°C</strong>`;
            maxTemp.innerHTML = `Max. <strong>${maximumTemp}°C</strong>`
        }
        let windSpeed = document.createElement("p");
        windSpeed.innerHTML = `Wind: <strong>${((el.wind.speed)*3.6).toFixed(1)} Km/h</strong>`;

        let humidity = document.createElement("p");
        humidity.innerHTML = `Humidity: <strong>${el.main.humidity}%</strong>`;
        if(count %2 == 0){
        card.append(iconImg,date, weather, maxTemp, minTemp, windSpeed, humidity);
        forcastCardContainer.append(card);
             maximumTemp = "";
         minimumTemp = "";
    }
    });
    // console.log(forcastContainer)
    forcastContainer.append(forcastHeading,forcastCardContainer);
}

const locationWeather = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      
      function showPosition(position) {
        let lat = position.coords.latitude
        let long = position.coords.longitude;
        fetchLocationData(lat, long)
      }
}

locationWeather();

currentLocation.addEventListener("click", locationWeather);

const fetchLocationData = async(lat, long) => {
    weatherContainer.textContent = "Fetching Weather Data..."
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
    let data = await response.json();
    showData(data);
    getForcast(data.name);
    } catch (error) {
        console.log(error);
    }
}

const recentCitiesDropdown = () => {
    const recentCities = JSON.parse(localStorage.getItem('cities')) || [];
    const dropdown = document.getElementById('recentCities');
    dropdown.innerHTML = '<option>Select a recent city</option>';
    recentCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        dropdown.appendChild(option);
    });
}

const recentCity = document.getElementById("recentCities");
console.log(recentCity);
recentCity.addEventListener("click", recentCitiesDropdown);


const showRecentCityWeather = () => {
    const cityName = recentCity.value;
    location1.value = cityName;
    getWeather(cityName);
}

recentCity.addEventListener("change", showRecentCityWeather);
