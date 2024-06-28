import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [hoveredNav, setHoveredNav] = useState('');

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
          <a
            href="#about"
            className="about"
            onMouseEnter={() => handleNavHover('about')}
            onMouseLeave={handleNavLeave}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="contact"
            onMouseEnter={() => handleNavHover('contact')}
            onMouseLeave={handleNavLeave}
          >
            CONTACT
          </a>
        </nav>
      </div>
      <div className="sections">
        <div className="section">
          {hoveredNav === 'about' && (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          )}
          {hoveredNav === 'contact' && <p>Finessefilmproductions@gmail.com</p>}
          {hoveredNav === '' && (
            <img src="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif" alt="GIF" className="section-gif" />
          )}
        </div>
        <div className="section">
          {(hoveredNav === 'about' || hoveredNav === 'contact') && (
            <p>Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)</p>
          )}
          {hoveredNav === '' && (
            <img src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif" alt="GIF" className="section-gif" />
          )}
        </div>
        <div className="section">
          {hoveredNav === 'about' && (
            <img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" alt="GIF" className="section-gif" />
          )}
          {hoveredNav === 'contact' && (
            <img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" alt="GIF" className="section-gif" />
          )}
          {hoveredNav === '' && (
            <img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" alt="GIF" className="section-gif" />
          )}
        </div>
        <div className="section">
          {hoveredNav === 'about' && <p>Instagram: FinesseCoding YouTube: FinesseCoding</p>}
          {hoveredNav === 'contact' && <p>Instagram: FinesseCoding YouTube: FinesseCoding</p>}
          {hoveredNav === '' && (
            <img src="https://gifdb.com/images/high/coding-animated-laptop-flow-stream-ja04010rm5o68zfk.gif" alt="GIF" className="section-gif" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
