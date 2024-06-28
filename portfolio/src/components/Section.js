import React from 'react';
import './Section.css';

const Section = ({ content, gif, isNavClicked, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isNavClicked && content ? (
        <p className="fade-text">{content}</p>
      ) : (
        <img src={gif} alt="gif" className="section-gif" />
      )}
    </div>
  );
};

export default Section;
