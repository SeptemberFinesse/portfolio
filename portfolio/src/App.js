import React, { useState } from 'react';
import Section from './components/Section';
import './App.css';

const App = () => {
  const [hoveredSection, setHoveredSection] = useState('');
  const [hoveredNav, setHoveredNav] = useState('');

  const handleSectionHover = (section) => {
    setHoveredSection(section);
  };

  const handleNavHover = (navItem) => {
    setHoveredNav(navItem);
  };

  const handleNavLeave = () => {
    setHoveredNav('');
  };

  return (
    <div className="App">
      <div className="my-header">
        <h1>LORENZO LLAMAS</h1>
        <nav>
          <div
            className="about"
            onMouseEnter={() => handleNavHover('about')}
            onMouseLeave={handleNavLeave}
          >
            ABOUT
          </div>
          <div
            className="contact"
            onMouseEnter={() => handleNavHover('contact')}
            onMouseLeave={handleNavLeave}
          >
            CONTACT
          </div>
        </nav>
      </div>
      <div className="sections">
        <Section
          content={hoveredNav === 'about' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : hoveredNav === 'contact' ? 'Finessefilmproductions@gmail.com' : ''}
          gif="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif"
          isNavHovered={hoveredNav !== ''}
          isHovered={hoveredSection === 'section1'}
          onMouseEnter={() => handleSectionHover('section1')}
          onMouseLeave={() => handleSectionHover('')}
        />
        <Section
          content={hoveredNav === 'about' || hoveredNav === 'contact' ? 'Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)' : ''}
          gif="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
          isNavHovered={hoveredNav !== ''}
          isHovered={hoveredSection === 'section2'}
          onMouseEnter={() => handleSectionHover('section2')}
          onMouseLeave={() => handleSectionHover('')}
        />
        <Section
          content=""
          gif={hoveredNav === 'about' ? 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif' : hoveredNav === 'contact' ? 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif' : 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif'}
          isNavHovered={hoveredNav !== ''}
          isHovered={hoveredSection === 'section3'}
          onMouseEnter={() => handleSectionHover('section3')}
          onMouseLeave={() => handleSectionHover('')}
        />
        <Section
          content={hoveredNav === 'about' || hoveredNav === 'contact' ? 'Instagram: FinesseCoding YouTube: FinesseCoding' : ''}
          gif="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif"
          isNavHovered={hoveredNav !== ''}
          isHovered={hoveredSection === 'section4'}
          onMouseEnter={() => handleSectionHover('section4')}
          onMouseLeave={() => handleSectionHover('')}
        />
      </div>
    </div>
  );
};

export default App;
