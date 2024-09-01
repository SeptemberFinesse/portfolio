import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import FavoriteCities from './FavoriteCities';
import WeatherDetails from './WeatherDetails';
import ThingsToDo from './ThingsToDo';
import { getTemperatureColor, formatTemperature, formatWindSpeed } from '../utils/weatherUtils';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [isMetric, setIsMetric] = useState(true);
  const [buttonColor, setButtonColor] = useState('#4984B8');
  const [opacity, setOpacity] = useState(1); // State to manage opacity for fade effect
  const [displayedValues, setDisplayedValues] = useState({}); // State to manage displayed values
  const [favorites, setFavorites] = useState([]); // State to manage favorite cities
  const [showThingsToDo, setShowThingsToDo] = useState(false); // State to control ThingsToDo component visibility
  const [searchCity, setSearchCity] = useState(''); // State to control search city for ThingsToDo

  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    if (weather.data) {
      const tempCelsius = weather.data.current.temp_c;
      const newColor = getTemperatureColor(tempCelsius);

      setButtonColor(newColor);

      const newValues = {
        cityName: weather.data.location.name,
        temperature: formatTemperature(tempCelsius, isMetric),
        windSpeed: formatWindSpeed(weather.data.current.wind_kph, isMetric),
        condition: weather.data.current.condition.text,
        humidity: `${weather.data.current.humidity.toFixed(1)}%`,
      };

      setDisplayedValues(newValues);
      setOpacity(1); // Trigger fade-in effect after initial values are set
    }
  }, [weather.data, isMetric]);

  useEffect(() => {
    updateFavoriteTemperatures();
  }, [isMetric]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = () => {
    if (city) {
      setOpacity(0); // Start fade-out effect
      setShowThingsToDo(false); // Hide ThingsToDo component
      setTimeout(() => {
        dispatch(fetchWeather(city));
        setSearchCity(city); // Update the search city for ThingsToDo
        setShowThingsToDo(true); // Show ThingsToDo component
      }, 300); // Delay fetch to allow fade-out effect
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFetchWeather();
    }
  };

  const toggleUnit = () => {
    setOpacity(0); // Start fade-out effect
    setTimeout(() => {
      setIsMetric(!isMetric);
      updateFavoriteTemperatures(); // Ensure favorites are updated
      setOpacity(1); // Trigger fade-in effect
    }, 300); // Delay unit toggle to allow fade-out effect
  };

  const toggleFavorite = (cityName, tempCelsius) => {
    const newFavorites = [...favorites];
    const cityIndex = newFavorites.findIndex(fav => fav.name === cityName);
    if (cityIndex === -1) {
      newFavorites.push({
        name: cityName,
        temperature: formatTemperature(tempCelsius, isMetric),
        tempCelsius: tempCelsius, // Store Celsius temperature for color scaling
        color: getTemperatureColor(tempCelsius) // Set the color based on temperature
      });
    } else {
      newFavorites.splice(cityIndex, 1);
    }
    setFavorites(newFavorites);
  };

  const moveCity = (dragIndex, hoverIndex) => {
    const newFavorites = [...favorites];
    const [movedCity] = newFavorites.splice(dragIndex, 1);
    newFavorites.splice(hoverIndex, 0, movedCity);
    setFavorites(newFavorites);
  };

  const updateFavoriteTemperatures = () => {
    const updatedFavorites = favorites.map(fav => ({
      ...fav,
      temperature: formatTemperature(fav.tempCelsius, isMetric),
      color: getTemperatureColor(fav.tempCelsius),
    }));
    setFavorites(updatedFavorites);
  };

  const isFavorite = weather.data && favorites.some(fav => fav.name === weather.data.location.name);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="weather-app">
        <div className="overlay"></div>
        <div className="content-container">
          <div className="main-container">
            <div className="weather-container">
              <h1 className="title">Weather App</h1>
              <div className="input-container">
                <input
                  type="text"
                  value={city}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter city"
                  className="city-input"
                />
                <button
                  onClick={handleFetchWeather}
                  className="fetch-button"
                  style={{ backgroundColor: buttonColor }}
                >
                  Get Weather
                </button>
                <button
                  onClick={toggleUnit}
                  className="toggle-button"
                  style={{ backgroundColor: buttonColor }}
                >
                  {isMetric ? 'Show °F & MPH' : 'Show °C & KPH'}
                </button>
              </div>

              {weather.loading && <p className="loading">Loading...</p>}
              {weather.error && <p className="error">Error: {weather.error}</p>}
              {weather.data && (
                <>
                  <WeatherDetails
                    displayedValues={displayedValues}
                    buttonColor={buttonColor}
                    opacity={opacity}
                    isFavorite={isFavorite}
                    toggleFavorite={() => toggleFavorite(weather.data.location.name, weather.data.current.temp_c)}
                  />
                  {showThingsToDo && <ThingsToDo city={searchCity} />}
                </>
              )}
            </div>
          </div>
          {favorites.length > 0 && (
            <div className="favorites-wrapper">
              <FavoriteCities
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                moveCity={moveCity}
                opacity={opacity}
              />
            </div>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default Weather;
