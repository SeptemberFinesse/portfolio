import React, { useState } from 'react';
import Section from './components/Section';
import './App.css';

const App = () => {
  const [hovered, setHovered] = useState('');

  const handleHover = (section) => {
    setHovered(section);
  };

  return (
    <div className="App">
      <div className="my-header">
        <h1>LORENZO LLAMAS</h1>
        <nav>
          <a
            href="#about"
            className="about"
            onMouseEnter={() => handleHover('about')}
            onMouseLeave={() => handleHover('')}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="contact"
            onMouseEnter={() => handleHover('contact')}
            onMouseLeave={() => handleHover('')}
          >
            CONTACT
          </a>
        </nav>
      </div>
      <div className="sections">
        <Section
          content={
            hovered === 'about'
              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              : ''
          }
          gif={hovered === 'contact' ? '' : '/path/to/your/gif1.gif'}
        />
        <Section
          content={
            hovered === 'contact'
              ? 'Lorenzo Llamas (Developer, Technical Consultant, Client Relationship Manager)'
              : ''
          }
          gif={hovered === 'contact' ? '' : '/path/to/your/gif2.gif'}
        />
        <Section
          content=""
          gif={hovered === 'contact' ? '/path/to/your/newgif.gif' : '/path/to/your/gif3.gif'}
        />
        <Section
          content={
            hovered === 'contact'
              ? 'Instagram: FinesseCoding\nYouTube: FinesseCoding'
              : ''
          }
          gif={hovered === 'contact' ? '' : '/path/to/your/gif4.gif'}
        />
      </div>
    </div>
  );
};

export default App;
