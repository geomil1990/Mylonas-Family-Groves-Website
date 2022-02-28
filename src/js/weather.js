/* Fetch weather data from a public API */
const generateWeather = () => {
  const Kyparissia = document.getElementById("Kyparissia");
  const liveTemp = document.getElementById("live-temperature");
  const weatherDescription = document.getElementById("weather-description-text");
  const dateTime = document.getElementById("date-time");
  const maxTemp = document.getElementById("feels");
  const minTemp = document.getElementById("humidity");
  const weatherIcon = document.getElementById("weather-icon");

  if (true) {
    // Fetch weather data
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyparissia%20Greece?unitGroup=metric&key=SD5AUAVN42CMY9C8YH75VZF83&contentType=json"
    )
      .then((response) => response.json())
      .then((data) => {
        Kyparissia.innerHTML = data.address;
        liveTemp.innerHTML = data.currentConditions.temp + "℃";
        weatherDescription.innerHTML = data.currentConditions.conditions;
        dateTime.innerHTML = "Last update " + data.currentConditions.datetime;
        maxTemp.innerHTML = "Feels like: " + data.currentConditions.feelslike + "℃";
        minTemp.innerHTML = "Humidity " + data.currentConditions.humidity;
        weatherIcon.src = data.currentConditions.icon + ".png";
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    // Show error message
  }
};

// Generate content on start
generateWeather();
