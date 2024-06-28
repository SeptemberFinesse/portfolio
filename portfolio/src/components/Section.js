import React from 'react';
import './Section.css';

const Section = ({ content, gif, isNavClicked, showText, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''} ${showText ? 'show-text' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showText && content ? (
        <p className="fade-text show">{content}</p>
      ) : (
        <img src={gif} alt="gif" className={`section-gif ${isHovered ? 'show' : ''}`} />
      )}
    </div>
  );
};

export default Section;
