import React from 'react';
import './styles.css';

function CityCard({ weather, currentLocal }) {
  if (weather == null) {
    return null;
  }
  return (
    <div className="card">
      <div className="container">
        <div>
          <div className="city-info">
            <p>{`Local ${currentLocal}`}</p>
            <p>{`${weather.main.temp} °C`}</p>
          </div>
          <div className="city-icon">
            <img src={weather.weather[0].icon} alt={weather.weather[0].main} />
          </div>
        </div>
        <div className="city-min-max">
          <p>{`Máx: ${weather.main.temp_max} °C`}</p>
          <p>{`Mín: ${weather.main.temp_min} °C`}</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
