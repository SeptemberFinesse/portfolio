import React, { useState, useEffect } from 'react';
import './Section.css';

const Section = ({ content, gif }) => {
  const [hovered, setHovered] = useState(false);
  const [displayGif, setDisplayGif] = useState(false);

  useEffect(() => {
    let timer;
    if (hovered && gif) {
      timer = setTimeout(() => {
        setDisplayGif(true);
      }, 1500);
    } else {
      setDisplayGif(false);
    }
    return () => clearTimeout(timer);
  }, [hovered, gif]);

  useEffect(() => {
    if (hovered) {
      console.log('Displaying content:', content);
    }
  }, [hovered, content]);

  return (
    <div
      className={`section ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content && <p className="fade-text">{content}</p>}
      {displayGif && <img src={gif} alt="gif" className="section-gif" />}
    </div>
  );
};

export default Section;
