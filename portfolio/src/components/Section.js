import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
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

  return (
    <div
      className="section"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && content && <Typewriter text={content} />}
      {displayGif && <img src={gif} alt="gif" className="section-gif" />}
    </div>
  );
};

export default Section;
