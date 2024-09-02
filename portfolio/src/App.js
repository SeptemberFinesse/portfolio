import React, { useState } from 'react';
import Section from './components/Section';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Weather from './components/Weather/components/Weather';
import './App.css';

const App = () => {
  const [clickedNav, setClickedNav] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');
  const [showText, setShowText] = useState(false); // State for text fade-in
  const [flashAnimation, setFlashAnimation] = useState(false); // State for flash animation

  const handleSectionHover = (section) => {
    if (clickedNav === '') {
      setHoveredSection(section);
    }
  };

  const handleSectionLeave = () => {
    setHoveredSection('');
  };

  const handleNavClick = (navItem) => {
    if (clickedNav === navItem) {
      setClickedNav('');
      setShowText(false); // Hide text on second click
    } else {
      setClickedNav(navItem);
      setShowText(true); // Show text on click
    }
  };

  const handleHeaderClick = () => {
    setFlashAnimation(true);
    setTimeout(() => {
      setFlashAnimation(false);
    }, 350); // Show GIFs for 0.5 seconds
    setClickedNav('');
    setShowText(false); // Hide text when clicking on header
  };

  return (
    <div className="App">
      <div className="my-header">
        <h1 onClick={handleHeaderClick}>LORENZO LLAMAS</h1>
        <nav>
          <div className="about" onClick={() => handleNavClick('about')}>
            ABOUT
          </div>
          <div className="contact">
            CONTACT
          </div>
        </nav>
      </div>
      <div className="sections">
     
        <Section
          content={clickedNav === 'about' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : ''}
          gif="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section1'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section1')}
          onMouseLeave={handleSectionLeave}
        />
        <Section
          content={clickedNav === 'about' ? 'Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)' : ''}
          gif="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section2'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section2')}
          onMouseLeave={handleSectionLeave}
        />
        <Section
          content=""
          gif="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section3'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section3')}
          onMouseLeave={handleSectionLeave}
        />
        <Section
          content={clickedNav === 'about' ? 'Instagram: FinesseCoding YouTube: FinesseCoding' : ''}
          gif="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section4'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section4')}
          onMouseLeave={handleSectionLeave}
        />
      </div>
    </div>
  );
};

export default App;
