
const apiKey = "1f609e6c71b704857aadb7a6662c7901";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");
const weatherData = document.querySelector(".weather");
const errorMsg = document.querySelector(".error"); 

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404 || response.status == 400){
        errorMsg.style.display = "block";
        weatherData.style.display = "none";
    }else{
        var data = await response.json() ;

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        weatherIcon.src = `icon/${data.weather[0].main}.png`;
    
        errorMsg.style.display = "none";
        weatherData.style.display = "block";
    }
}
