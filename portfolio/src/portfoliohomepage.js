import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

const App = () => {


  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/portfolio/weather">Weather App</Link></li>
        <li><Link to="/portfolio/stocksearch">Stock Search App</Link></li>
      </ul>
    </div>
  );
};

export default portfoliohomepage;
