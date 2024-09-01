import React from 'react';

const WeatherDetails = ({ displayedValues, buttonColor, opacity, isFavorite, toggleFavorite }) => {
  return (
    <div className="weather-data">
      <h2>
        {displayedValues.cityName}
        <img
          src={isFavorite ? 'https://www.svgrepo.com/show/13695/star.svg' : 'https://www.svgrepo.com/show/172818/star-outline.svg'}
          alt="Favorite"
          className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}
          onClick={toggleFavorite}
        />
      </h2>
      <div className="weather-details">
        <div className="weather-item">
          <span className="label">Temperature:</span>
          <span className="value" style={{ color: buttonColor, opacity, transition: 'opacity 0.5s ease-in-out' }}>
            {displayedValues.temperature}
          </span>
        </div>
        <div className="weather-item">
          <span className="label">Condition:</span>
          <span className="value" style={{ color: buttonColor, opacity, transition: 'opacity 0.5s ease-in-out' }}>
            {displayedValues.condition}
          </span>
        </div>
        <div className="weather-item">
          <span className="label">Wind Speed:</span>
          <span className="value" style={{ color: buttonColor, opacity, transition: 'opacity 0.5s ease-in-out' }}>
            {displayedValues.windSpeed}
          </span>
        </div>
        <div className="weather-item">
          <span className="label">Humidity:</span>
          <span className="value" style={{ color: buttonColor, opacity, transition: 'opacity 0.5s ease-in-out' }}>
            {displayedValues.humidity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
