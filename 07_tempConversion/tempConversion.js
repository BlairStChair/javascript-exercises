const convertToCelsius = function(temperature1=0.0) {
  temperature1 = (temperature1 - 32) * (5/9);
  let rounded1 = Math.round(temperature1 * 10) / 10;
  return rounded1;
};

const convertToFahrenheit = function(temperature2=0.0) {
  temperature2 = (temperature2 * (9/5)) + 32;
  let rounded2 = Math.round(temperature2 * 10) / 10;
  return rounded2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
