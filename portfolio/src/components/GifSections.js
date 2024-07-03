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
        gif="https://shorturl.at/H3IyH"
        isHovered={hoveredSection === 'section1'}
        flashAnimation={flashAnimation}
        onMouseEnter={() => handleSectionHover('section1')}
        onMouseLeave={handleSectionLeave}
      />
      <Section
        gif="https://shorturl.at/KfHOp"
        isHovered={hoveredSection === 'section2'}
        flashAnimation={flashAnimation}
        onMouseEnter={() => handleSectionHover('section2')}
        onMouseLeave={handleSectionLeave}
      />
      <Section
        gif="https://s2.ezgif.com/tmp/ezgif-2-2ba854c859.gif"
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
