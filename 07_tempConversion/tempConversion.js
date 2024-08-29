const convertToCelsius = function(temp) {
  let Celsius;
  Celsius = (temp-32)*5/9;

  roundCelsius = Math.round(Celsius*10)/10;
  return roundCelsius;
};

const convertToFahrenheit = function(temp) {
  let Fahrenheit;
  Fahrenheit = (temp*(9/5))+32;

  roundFahrenheit = Math.round(Fahrenheit*10)/10;
  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
