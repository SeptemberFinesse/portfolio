import React, { useState, useEffect } from 'react';

const ThingsToDo = ({ city }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);

  useEffect(() => {
    if (city) {
      fetchThingsToDo(city);
    }
  }, [city]);

  const fetchThingsToDo = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAt63o2geJqAI6uBFBEvYyYQynci9UTEW8&cx=f18d41667ba1b4456&safe=active&q=Things+To+Do+In+${city}`);
      const data = await response.json();
      if (data.items) {
        setResults(data.items);
      } else {
        setError('No results found');
      }
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="things-to-do-container">
      <h2>Things To Do In {city}</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {currentResults.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            <p>{item.snippet}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {[...Array(Math.ceil(results.length / resultsPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`page-number ${currentPage === number + 1 ? 'active' : ''}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
