var cityEL = "Chicago";

// funtion to save recent cities
$("#searchBtn").click(function(e) {
    e.preventDefault();

    cityEL = document.getElementById("searchCity").value;
    document.querySelector("#city") = cityEL;
    saveCity(); 

    fetchWeather();
});

// local storage function
function saveCity() {
    if (localStorage.getItem("city") == null) {
        localStorage.setItem("city", "[]");
    }

    var storedCity = JSON.parse(localStorage.getItem("city"));
    storedCity.push(cityEL);

    localStorage.setItem("city", JSON.stringify(cityEL));
};

// function to display data
function displayCity() {
    if (localStorage.getItem("city") != null) {
        $("#history").html = JSON.parse(localStorage.getItem("city"));
    }
}

// funtion to display current date
var currentDate = moment().format('L');
$( "h2#date").html("(" + currentDate + ")");

// funtion to display first date
var firstDate = moment().add(1, "days").format("L");
$("#firstDay").html("(" + firstDate + ")");
// funtion to display second date
var secondDate = moment().add(2, "days").format("L");
$("#secondDay").html("(" + secondDate + ")");
// funtion to display third date
var thirdDate = moment().add(3, "days").format("L");
$("#thirdDay").html("(" + thirdDate + ")");
// funtion to display fourth date
var fourthDate = moment().add(4, "days").format("L");
$("#fourthDay").html("(" + fourthDate + ")");
// funtion to display fifth date
var fifthDate = moment().add(5, "days").format("L");
$("#fifthDay").html("(" + fifthDate + ")");


lat =33.44;
lon =-94.04;

// weather api fetch
function fetchWeather() {
    var apiKey = "5b73c7b58353dc6f00e466e13a20a4a9"
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=" + apiKey;
    fetch(weatherApi)
        .then((response) => {
            if (!response.ok) {
                alert("No weather found.")
            }
            return response.json();
        })
        .then((data) => displayWeather(data));
};

function displayWeather(data) {
    // current weather
    var icon = object.current.weather[0];
    var temp = object.current.temp;
    var wind = object.current.wind_speed;
    var humidity = object.current.humidity;
    var index = object.current.uvi;

    document.querySelector("#temp").innerText = "Temp:" + temp + "°F";
    document.querySelector("#wind").innerText = "Wind:" + wind + "mph";
    document.querySelector("#humidity").innerText = "Humidity:" + humidity + "%";
    document.querySelector("#uvIndex").innerText = "UV Index:" + index;
    document.querySelector("#icon").src = "https://openweathermap.org/omg/wn/" + icon + ".png";

    // first day forecast
    var firstIcon = object.daily[0].weather[0];
    var firstTemp = object.daily[0].temp.day;
    var firstWind = object.daily[0].wind_speed;
    var firstHumidity = object.daily[0].humidity;

    document.querySelector("#firstTemp").innerText = "Temp:" + firstTemp + "°F";
    document.querySelector("#firstWind").innerText = "Wind:" + firstWind + "mph";
    document.querySelector("#firstHumidity").innerText = "Humidity:" + firstHumidity + "%";
    document.querySelector("#firstIcon").src = "https://openweathermap.org/omg/wn/" + firstIcon + ".png";

    // second day forecast
    var secondIcon = object.daily[1].weather[0];
    var secondTemp = object.daily[1].temp.day;
    var secondWind = object.daily[1].wind_speed;
    var secondHumidity = object.daily[1].humidity;

    document.querySelector("#secondTemp").innerText = "Temp:" + secondTemp + "°F";
    document.querySelector("#secondWind").innerText = "Wind:" + secondWind + "mph";
    document.querySelector("#secondHumidity").innerText = "Humidity:" + secondHumidity + "%";
    document.querySelector("#secondIcon").src = "https://openweathermap.org/omg/wn/" + secondIcon + ".png";

    // third day forecast
    var thirdIcon = object.daily[2].weather[0];
    var thirdTemp = object.daily[2].temp.day;
    var thirdWind = object.daily[2].wind_speed;
    var thirdHumidity = object.daily[2].humidity;

    document.querySelector("#thirdTemp").innerText = "Temp:" + thirdTemp + "°F";
    document.querySelector("#thirdWind").innerText = "Wind:" + thirdWind + "mph";
    document.querySelector("#thirdHumidity").innerText = "Humidity:" + thirdHumidity + "%";
    document.querySelector("#thirdIcon").src = "https://openweathermap.org/omg/wn/" + thirdIcon + ".png";

    // fourth day forecast
    var fourthIcon = object.daily[3].weather[0];
    var fourthTemp = object.daily[3].temp.day;
    var fourthWind = object.daily[3].wind_speed;
    var fourthHumidity = object.daily[3].humidity;

    document.querySelector("#fourthTemp").innerText = "Temp:" + fourthTemp + "°F";
    document.querySelector("#fourthWind").innerText = "Wind:" + fourthWind + "mph";
    document.querySelector("#fourthHumidity").innerText = "Humidity:" + fourthHumidity + "%";
    document.querySelector("#fourthIcon").src = "https://openweathermap.org/omg/wn/" + fourthIcon + ".png";

    // fifth day forecast
    var fifthIcon = object.daily[4].weather[0];
    var fifthTemp = object.daily[4].temp.day;
    var fifthWind = object.daily[4].wind_speed;
    var fifthHumidity = object.daily[4].humidity;

    document.querySelector("#fifthTemp").innerText = "Temp:" + fifthTemp + "°F";
    document.querySelector("#fifthWind").innerText = "Wind:" + fifthWind + "mph";
    document.querySelector("#fifthHumidity").innerText = "Humidity:" + fifthHumidity + "%";
    document.querySelector("#fifthIcon").src = "https://openweathermap.org/omg/wn/" + fifthIcon + ".png";
}

fetchWeather();