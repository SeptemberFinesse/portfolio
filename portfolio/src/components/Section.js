import React from 'react';
import './Section.css';

const Section = ({ content, gif, isNavHovered, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isNavHovered && content && <p className="fade-text">{content}</p>}
      {!isNavHovered && <img src={gif} alt="gif" className="section-gif" />}
    </div>
  );
};

export default Section;
