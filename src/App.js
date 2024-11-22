import React, { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './CountriesList';

function App() {
  const [countries, setCountries] = useState([]);
  const apiUrl = process.env.REACT_APP_BACKEND_URL || 'http://ec2-34-207-130-54.compute-1.amazonaws.com:9999';

  useEffect(() => {
    fetch(`${apiUrl}/api/countries`)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error("Error fetching countries:", error));
  }, [apiUrl]);

  return (
    <div>
      <h1>Country List</h1>
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
