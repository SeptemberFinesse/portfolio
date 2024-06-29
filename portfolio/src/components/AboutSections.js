import React from 'react';
import Section from './Section';
import './Section.css';

const AboutSections = () => {
  return (
    <>
      <Section
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Section
        content="Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)"
      />
      <Section
        content=""
        gif="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
      />
      <Section
        content="Instagram: FinesseCoding YouTube: FinesseCoding"
      />
    </>
  );
};

export default AboutSections;
