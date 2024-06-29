import React, { useState } from 'react';
import Section from './Section';
import './Section.css';

const GifSections = ({ flashAnimation }) => {
  const [hoveredSection, setHoveredSection] = useState('');

  const handleSectionHover = (section) => {
    setHoveredSection(section);
  };

  const handleSectionLeave = () => {
    setHoveredSection('');
  };

  return (
    <>
      <Section
        gif="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif"
        isHovered={hoveredSection === 'section1'}
        flashAnimation={flashAnimation}
        onMouseEnter={() => handleSectionHover('section1')}
        onMouseLeave={handleSectionLeave}
      />
      <Section
        gif="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
        isHovered={hoveredSection === 'section2'}
        flashAnimation={flashAnimation}
        onMouseEnter={() => handleSectionHover('section2')}
        onMouseLeave={handleSectionLeave}
      />
      <Section
        gif="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
        isHovered={hoveredSection === 'section3'}
        flashAnimation={flashAnimation}
        onMouseEnter={() => handleSectionHover('section3')}
        onMouseLeave={handleSectionLeave}
      />
      <Section
        gif="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif"
        isHovered={hoveredSection === 'section4'}
        flashAnimation={flashAnimation}
        onMouseEnter={() => handleSectionHover('section4')}
        onMouseLeave={handleSectionLeave}
      />
    </>
  );
};

export default GifSections;
