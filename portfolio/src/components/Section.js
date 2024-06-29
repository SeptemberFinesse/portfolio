import React from 'react';
import './Section.css';

const Section = ({ content, gif, isHovered, flashAnimation, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''} ${content ? 'show-text' : ''} ${flashAnimation ? 'flash' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content ? (
        <p className={`fade-text ${content ? 'show' : ''}`}>{content}</p>
      ) : (
        <img src={gif} alt="gif" className={`section-gif ${isHovered || flashAnimation ? 'show' : ''}`} />
      )}
    </div>
  );
};

export default Section;
