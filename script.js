const apiKey = "6165deb3e21cf833e379214250c3f8bd";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search input");
const searBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.visibility = "visible";
	var elements = document.querySelectorAll(
		".weather-icon, .temp, .city, .humadity, .speed, .wind"
	  );
  
	  elements.forEach(function (element) {
		element.style.visibility = "hidden";
	  });
	
  } else {
    let data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    var elements = document.querySelectorAll(
      ".weather-icon, .temp, .city, .humadity, .speed, .wind"
    );

    elements.forEach(function (element) {
      element.style.visibility = "visible";
    });
	document.querySelector(".error").style.visibility = "hidden";
  }
}

searBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
