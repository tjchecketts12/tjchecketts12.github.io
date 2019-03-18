let weatherRequest = new XMLHttpRequest();
let apiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bb4509ecac6b78adefbfa471450e41df";
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML=weatherData.main.temp;
    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('ct-img').setAttribute('src', icon);
    document.getElementById('ct-img').setAttribute('alt', desc);

}