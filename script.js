let weather = {
    apiKey: "9489463a218a766a2d92a506b5d7a350",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {description, icon} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C"; 
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/hr";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }   
};

document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Kolkata");