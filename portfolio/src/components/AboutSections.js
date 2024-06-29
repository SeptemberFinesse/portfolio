import React, { useState } from 'react';
import Section from './Section';
import './Section.css';

const AboutSections = () => {
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
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Section
        content="Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)"
      />
      <Section
        gif="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
        isHovered={hoveredSection === 'section3'}
        onMouseEnter={() => handleSectionHover('section3')}
        onMouseLeave={handleSectionLeave}
      />
      <Section
        content="Instagram: FinesseCoding YouTube: FinesseCoding"
      />
    </>
  );
};

export default AboutSections;
