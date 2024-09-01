import React from 'react';
import { Outlet } from 'react-router-dom';
import Weather from './components/Weather';

const App = () => {
  return (
    <div>
      <Outlet />
      {/* <Weather /> */}
    </div>
  );
};

export default App;
