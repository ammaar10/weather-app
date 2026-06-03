
async function GetWeather(){
     document.getElementById("temp").innerText = "Loading...";
     
    const city = document.getElementById("city").value;

    if (city.trim() === ""){
        alert("Please enter a city");
        document.getElementById("temp").innerText = "Temperature: --";
        document.getElementById("mood").innerText = "Weather: --";
        document.getElementById("humidity").innerText = "Humidity: --"
        document.getElementById("wind").innerText = "Wind: --"
        return;
    }

    const apiKey = "8791758cc9dd64414722ff12702de42a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data =  await response.json();

    document.getElementById("cityname").innerText = data.name;
    console.log(data);

    if (data.cod !== 200){
        alert("City not found");
        document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
        document.getElementById("mood").innerText = "Weather: " + data.weather[0].main;
        document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
        document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " m/s";
        return;
    }

    document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
    document.getElementById("mood").innerText = "Weather: " + data.weather[0].main;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " m/s";
}


document.getElementById("search").addEventListener("click",GetWeather);
document.getElementById("city").addEventListener("keydown",(event) => {
    if (event.key === "Enter"){
        GetWeather();
    }
});