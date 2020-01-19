import React from 'react';
import './styles.css';

import LocalButton from '../LocalButton';

const cities = [
  { id: 1, name: 'São Carlos', lat: -22.0154, lon: -47.8911 },
  { id: 2, name: 'Ponta Grossa', lat: -25.0945, lon: -50.1633 },
  { id: 3, name: 'Itararé', lat: -24.1085, lon: -49.3352 },
]

function Header({ history, handleClick }) {
  return (
    <nav className="header-nav">
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <LocalButton
              id={city.id}
              handleClick={handleClick}
              lat={city.lat}
              lon={city.lon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
