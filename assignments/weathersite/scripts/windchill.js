function windchill (speed, temp) {
let result = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

document.getElementById('windchill').innerHTML = result.toFixed(1);
}