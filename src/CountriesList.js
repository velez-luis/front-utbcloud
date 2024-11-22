import React from 'react';

function CountriesList({ countries }) {
  return (
    <ul>
      {countries.map((country, index) => (
        <li key={index}>
          <h2>{country.cname}</h2>
          <p>Capital: {country.capital}</p>
          <p>Language: {country.language}</p>
          <img src={country.flag_url} alt={`${country.name} flag`} width="50" />
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;