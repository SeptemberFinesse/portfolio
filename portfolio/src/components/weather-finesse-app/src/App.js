import React from 'react';
import { Outlet } from 'react-router-dom';
import Section from '../../weather-finesse-app/src/components/Weather';

import Weather from './components/Weather';

const App = () => {
  return (
    <div>
      <Outlet />
      {/* <Weather /> */}
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
    </div>
  );
};

export default App;
