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
          content={clickedNav === 'about' ? 'Node.js, React.js, Express.js. Redux, JWT Authoritization, RESTful API implementation. Extensive mastery of React-Redux infrastructured applications. ' : ''}
          gif="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJjZXU4dW82ZHFxNXZ4ZDV2aTA0OGsyNWFzemVnaW9mMDQydXp4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IC8nzEz8ITGamlSL9e/giphy.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section1'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section1')}
          onMouseLeave={handleSectionLeave}
        />
        <Section
          content={clickedNav === 'about' ? 'Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)' : ''}
          gif="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3U4aGFiNzZ3eGk0NXJidHE2YW1iZWF2N2ExODY4aWJiY3U4czMwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yoyBIuYtd47Doe2Ybv/giphy.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section2'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section2')}
          onMouseLeave={handleSectionLeave}
        />
        <Section
          content=""
          gif="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2lvZTNqMmFnbHl3eTQ4MWFxN3kxM2xqOWR5dmR2ZncwZWxzMHVycyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M6WdbXA3w6vtLWqqzD/giphy.gif"
          isNavClicked={clickedNav === 'about'}
          showText={showText}
          isHovered={hoveredSection === 'section3'}
          flashAnimation={flashAnimation}
          onMouseEnter={() => handleSectionHover('section3')}
          onMouseLeave={handleSectionLeave}
        />
        <Section
          content={clickedNav === 'about' ? 'Instagram: FinesseCoding YouTube: FinesseCoding' : ''}
          gif="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXd3dTZoY3hqdnk2YXdtdHAzZWpkNW5taWJtZ2Znem1leWFkb3Z4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/soZqHsiLKiYGDKdPxr/giphy.gif"
          // gif="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif"
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
