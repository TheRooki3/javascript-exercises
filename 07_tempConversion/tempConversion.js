const convertToCelsius = function(temp) {
  let cel = (temp - 32) * (5/9);
  if(cel % 1 === 0){
    return cel;
  }else{
    return parseFloat(cel.toFixed(1));
  }
  
};

const convertToFahrenheit = function(temp) {
  let faren = temp * (9/5) + 32;
  if(faren % 1 === 0){
    return faren;
  }else{
    return parseFloat(faren.toFixed(1));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
