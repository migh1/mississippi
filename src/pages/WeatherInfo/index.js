import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

function WeatherInfo({ history }) {
  const minTempCity = useSelector(state => state.weather.minTempCity);
  const maxTempCity = useSelector(state => state.weather.maxTempCity);

  if (minTempCity.id === undefined) {
    return (
      <footer>
        <button type="button" onClick={() => history.push('/')}>Back</button>
      </footer>
    );
  }

  return (
    <>
      <div className="minMaxInfo">
        <p>{`Máxima: Local ${maxTempCity.id} - ${maxTempCity.temp_max}°C`}</p>
        <p>{`Mínima: Local ${minTempCity.id} - ${minTempCity.temp_min}°C`}</p>
      </div>
      <footer>
        <button type="button" onClick={() => history.push('/')}>Voltar</button>
      </footer>
    </>
  );
};

export default WeatherInfo;
