// src/pages/CountryDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CountryDetails.css';

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,cca2')
      .then(response => {
        const list = response.data
          .map(c => ({ name: c.name.common, code: c.cca2 }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(list);
      })
      .catch(console.error);
  }, []);

  const handleSelect = code => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => {
        const c = response.data[0];
        setCountryData({
          name: c.name.common,
          currency: c.currencies ? Object.values(c.currencies)[0].name : 'N/A',
          capital: c.capital?.[0] || 'N/A',
          languages: c.languages
            ? Object.values(c.languages).join(', ')
            : 'N/A',
          flagPng: c.flags.png,
          flagAlt: c.flags.alt || `Flag of ${c.name.common}`,
        });
      })
      .catch(console.error);
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      {/* <header className="header">
        <h1>World Country Info</h1>
      </header> */}

      <header className="header" style={{ color: 'white', backgroundColor: '#333', padding: '20px' }}>
  <h1>World Country Info</h1>
</header>


      {/* Main Content Container */}
      <main className="country-container">
        <div className="country-card">
          <h2>Select a Country</h2>
          <select
            onChange={e => handleSelect(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              — Select a country —
            </option>
            {countries.map(c => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>

          {countryData && (
            <div className="country-info">
              <img
                src={countryData.flagPng}
                alt={countryData.flagAlt}
              />
              <div className="country-details">
                <h3>{countryData.name}</h3>
                <p><strong>Capital:</strong> {countryData.capital}</p>
                <p><strong>Currency:</strong> {countryData.currency}</p>
                <p><strong>Languages:</strong> {countryData.languages}</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="footer">
        <p>© 2025 Country Info App. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default CountryDetails;
