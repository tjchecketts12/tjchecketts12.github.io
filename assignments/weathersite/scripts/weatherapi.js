let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bb4509ecac6b78adefbfa471450e41df";
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("currently").innerHTML=weatherData.weather[0].description;
    document.getElementById("temp").innerHTML=weatherData.main.temp_max;
    document.getElementById("humidity").innerHTML=weatherData.main.humidity;
    document.getElementById("speed").innerHTML=weatherData.wind.speed;

    let speed = parseInt(weatherData.wind.speed, 10);
    let temp = parseInt(weatherData.main.temp_max, 10);
    
    windchill(speed, temp);
}