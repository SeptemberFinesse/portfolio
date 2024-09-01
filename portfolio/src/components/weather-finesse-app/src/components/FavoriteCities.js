import React, { useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const FavoriteCities = ({ favorites, toggleFavorite, moveCity, opacity }) => {
  const [shakingCity, setShakingCity] = useState(null);

  const renderFavorite = (fav, index) => {
    return (
      <FavoriteCity
        key={fav.name}
        index={index}
        fav={fav}
        toggleFavorite={toggleFavorite}
        moveCity={moveCity}
        opacity={opacity}
        shakingCity={shakingCity}
        setShakingCity={setShakingCity}
      />
    );
  };

  return (
    <div className="favorites-container">
      <h2>Favorite Cities</h2>
      {favorites.map((fav, index) => renderFavorite(fav, index))}
    </div>
  );
};

const FavoriteCity = ({ fav, index, toggleFavorite, moveCity, shakingCity, setShakingCity, opacity }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'FAVORITE_CITY',
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveCity(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    drop() {
      setShakingCity(index);
      setTimeout(() => setShakingCity(null), 500); // Reset the shaking state after animation
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'FAVORITE_CITY',
    item: { type: 'FAVORITE_CITY', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`favorite-item ${shakingCity === index ? 'shake' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img
        src="https://www.svgrepo.com/show/532195/menu.svg"
        alt="Menu"
        className="menu-icon"
      />
      <span className="city-name">{fav.name}</span>
      <img
        src="https://www.svgrepo.com/show/13695/star.svg"
        alt="Favorite"
        className="favorite-icon"
        onClick={() => toggleFavorite(fav.name, fav.tempCelsius)}
      />
      <span className="value" style={{ color: fav.color, opacity, transition: 'opacity 0.5s ease-in-out' }}>
        {fav.temperature}
      </span>
    </div>
  );
};

export default FavoriteCities;
