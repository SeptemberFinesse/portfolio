import React, { useState, useEffect } from 'react';
import GifSections from './components/GifSections';
import AboutSections from './components/AboutSections';
import ContactSections from './components/ContactSections';
import './App.css';

const App = () => {
  const [clickedNav, setClickedNav] = useState('');
  const [flashAnimation, setFlashAnimation] = useState(false); // State for flash animation

  const handleNavClick = (navItem) => {
    setClickedNav(navItem);
  };

  const handleHeaderClick = () => {
    setFlashAnimation(true);
    setClickedNav('');
    setTimeout(() => {
      setFlashAnimation(false);
    }, 500); // Flash for 0.5 seconds
  };

  useEffect(() => {
    if (clickedNav === '') {
      setFlashAnimation(true);
      setTimeout(() => {
        setFlashAnimation(false);
      }, 500); // Flash for 0.5 seconds
    }
  }, [clickedNav]);

  return (
    <div className="App">
      <div className="my-header">
        <h1 onClick={handleHeaderClick}>LORENZO LLAMAS</h1>
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
        {clickedNav === 'about' && <AboutSections />}
        {clickedNav === 'contact' && <ContactSections />}
        {!clickedNav && <GifSections flashAnimation={flashAnimation} />}
      </div>
    </div>
  );
};

export default App;
