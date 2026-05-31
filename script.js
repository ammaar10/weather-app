document.getElementById("search").addEventListener("click",async () =>{
    const city = document.getElementById("city").value;

    const apiKey = "8791758cc9dd64414722ff12702de42a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const response = await  fetch(url);

    const data =  await response.json();
    console.log(data);
    document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
    document.getElementById("mood").innerText = "Weather: " + data.weather[0].main;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " m/s";
})

