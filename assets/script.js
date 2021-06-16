var searchBtn = document.getElementById("search");
var searchBar = document.getElementById("query");
var currentName = document.getElementById("cityName");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var uvIndex = document.getElementById("uv-index");
var apiKey = "46f8a581aecba0a10edf6ad835a9e447";
console.log(searchBtn);

searchBtn.addEventListener("click", function () {
  //   alert("I have been clicked");
  console.log(searchBar.value);
  var currentWeatherApi =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchBar.value +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(currentWeatherApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.name);
      currentName.innerText = data.name;
      console.log(data.main.temp);
      temperature.innerText = data.main.temp;
      console.log(data.main.humidity);
      humidity.innerText = data.main.humidity;
      wind.innerText = data.wind.speed;
      //   uvIndex.innerText =
    });
});
