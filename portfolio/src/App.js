import React, { useState } from 'react';
import Section from './components/Section';
import './App.css';

const App = () => {
  const [clickedNav, setClickedNav] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');

  const handleSectionHover = (section) => {
    setHoveredSection(section);
  };

  const handleNavClick = (navItem) => {
    if (clickedNav === navItem) {
      setClickedNav('');
    } else {
      setClickedNav(navItem);
    }
  };

  return (
    <div className="App">
      <div className="my-header">
        <h1>LORENZO LLAMAS</h1>
        <nav>
          <div className="about" onClick={() => handleNavClick('about')}>
            ABOUT
          </div>
          <div className="contact" onClick={() => handleNavClick('contact')}>
            CONTACT
          </div>
        </nav>
      </div>
      <div className="sections">
        <Section
          content={clickedNav === 'about' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : clickedNav === 'contact' ? 'Finessefilmproductions@gmail.com' : ''}
          gif="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif"
          isNavClicked={clickedNav !== ''}
          isHovered={hoveredSection === 'section1'}
          onMouseEnter={() => handleSectionHover('section1')}
          onMouseLeave={() => handleSectionHover('')}
        />
        <Section
          content={clickedNav === 'about' || clickedNav === 'contact' ? 'Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)' : ''}
          gif="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
          isNavClicked={clickedNav !== ''}
          isHovered={hoveredSection === 'section2'}
          onMouseEnter={() => handleSectionHover('section2')}
          onMouseLeave={() => handleSectionHover('')}
        />
        <Section
          content=""
          gif={clickedNav === 'about' ? 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif' : clickedNav === 'contact' ? 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif' : 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif'}
          isNavClicked={clickedNav !== ''}
          isHovered={hoveredSection === 'section3'}
          onMouseEnter={() => handleSectionHover('section3')}
          onMouseLeave={() => handleSectionHover('')}
        />
        <Section
          content={clickedNav === 'about' || clickedNav === 'contact' ? 'Instagram: FinesseCoding YouTube: FinesseCoding' : ''}
          gif="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif"
          isNavClicked={clickedNav !== ''}
          isHovered={hoveredSection === 'section4'}
          onMouseEnter={() => handleSectionHover('section4')}
          onMouseLeave={() => handleSectionHover('')}
        />
      </div>
    </div>
  );
};

export default App;
