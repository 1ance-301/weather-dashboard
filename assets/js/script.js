var cityEL = "Chicago";

// funtion to save recent cities
$("#searchBtn").click(function(e) {
    e.preventDefault();

    // document.getElementById("searchCity").value;
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
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + apiKey;
    fetch(weatherApi)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Network Error");
            }
        })
        .then(data => {
            console.log(data);
            displayWeather(data)
        })
        .catch((error) => console.error(error));
};

function displayWeather(data) {
    // current weather
    var temp = data.current.temp;
    var wind = data.current.wind_speed;
    var humidity = data.current.humidity;
    var index = data.current.uvi;

    var icon = data.current.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#icon").attr("src", iconUrl);

    document.querySelector("#temp").innerText = "Temp: " + temp + "°F";
    document.querySelector("#wind").innerText = "Wind: " + wind + " mph";
    document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
    
    var indexEL = document.querySelector("#uvIndex")
    indexEL.innerText = "UV Index: " + index;
    if (index < "3") {
        indexEL.style.backgroundColor = "green";
    } else if (index >= "3" && index <= "7") {
        indexEL.style.backgroundColor = "yellow";
    } else if (index > "7") {
        indexEL.style.backgroundColor = "red";
    }
    
    // first day forecast
    var firstTemp = data.daily[0].temp.day;
    var firstWind = data.daily[0].wind_speed;
    var firstHumidity = data.daily[0].humidity;

    document.querySelector("#firstTemp").innerText = "Temp: " + firstTemp + "°F";
    document.querySelector("#firstWind").innerText = "Wind: " + firstWind + " mph";
    document.querySelector("#firstHumidity").innerText = "Humidity: " + firstHumidity + "%";
    
    icon = data.daily[0].weather[0].icon;
    iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#firstIcon").attr("src", iconUrl);

    // second day forecast
    var secondTemp = data.daily[1].temp.day;
    var secondWind = data.daily[1].wind_speed;
    var secondHumidity = data.daily[1].humidity;

    document.querySelector("#secondTemp").innerText = "Temp: " + secondTemp + "°F";
    document.querySelector("#secondWind").innerText = "Wind: " + secondWind + " mph";
    document.querySelector("#secondHumidity").innerText = "Humidity: " + secondHumidity + "%";

    icon = data.daily[1].weather[0].icon;
    iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#secondIcon").attr("src", iconUrl);

    // third day forecast
    var thirdTemp = data.daily[2].temp.day;
    var thirdWind = data.daily[2].wind_speed;
    var thirdHumidity = data.daily[2].humidity;

    document.querySelector("#thirdTemp").innerText = "Temp: " + thirdTemp + "°F";
    document.querySelector("#thirdWind").innerText = "Wind: " + thirdWind + " mph";
    document.querySelector("#thirdHumidity").innerText = "Humidity: " + thirdHumidity + "%";
    
    icon = data.daily[2].weather[0].icon;
    iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#thirdIcon").attr("src", iconUrl);

    // fourth day forecast
    var fourthTemp = data.daily[3].temp.day;
    var fourthWind = data.daily[3].wind_speed;
    var fourthHumidity = data.daily[3].humidity;

    document.querySelector("#fourthTemp").innerText = "Temp: " + fourthTemp + "°F";
    document.querySelector("#fourthWind").innerText = "Wind: " + fourthWind + " mph";
    document.querySelector("#fourthHumidity").innerText = "Humidity: " + fourthHumidity + "%";
    
    icon = data.daily[3].weather[0].icon;
    iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#fourthIcon").attr("src", iconUrl);

    // fifth day forecast
    var fifthTemp = data.daily[4].temp.day;
    var fifthWind = data.daily[4].wind_speed;
    var fifthHumidity = data.daily[4].humidity;

    document.querySelector("#fifthTemp").innerText = "Temp: " + fifthTemp + "°F";
    document.querySelector("#fifthWind").innerText = "Wind: " + fifthWind + " mph";
    document.querySelector("#fifthHumidity").innerText = "Humidity: " + fifthHumidity + "%";
    
    icon = data.daily[4].weather[0].icon;
    iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#fifthIcon").attr("src", iconUrl);
}

fetchWeather();