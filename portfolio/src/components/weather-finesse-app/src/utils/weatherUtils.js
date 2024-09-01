export const getTemperatureColor = (tempCelsius) => {
    if (tempCelsius < 0) return '#a5c5d9';
    if (tempCelsius <= 25) return '#4984B8';
    return '#FF3F00';
  };
  
  export const formatTemperature = (tempCelsius, isMetric) => {
    return isMetric
      ? `${tempCelsius.toFixed(1)}°C`
      : `${(tempCelsius * 9 / 5 + 32).toFixed(1)}°F`;
  };
  
  export const formatWindSpeed = (windKph, isMetric) => {
    return isMetric
      ? `${windKph.toFixed(1)} KPH`
      : `${(windKph * 0.621371).toFixed(1)} MPH`;
  };
  