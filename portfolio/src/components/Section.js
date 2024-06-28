import React from 'react';
import './Section.css';

const Section = ({ content, gif, isNavClicked, showText, isHovered, flashAnimation, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''} ${showText ? 'show-text' : ''} ${flashAnimation ? 'flash' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showText && content ? (
        <p className="fade-text show">{content}</p>
      ) : (
        <img src={gif} alt="gif" className={`section-gif ${isHovered || flashAnimation ? 'show' : ''}`} />
      )}
    </div>
  );
};

export default Section;
