import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';

import { actionAddToVisitedLocals } from '../../redux/actions/weather';

import './styles.css';

import CityCard from '../../components/CityCard';
import Header from '../../components/Header';

function Weather({ history }) {
  const [currentLocal, setCurrentLocal] = useState(null);
  const [weather, setWeather] = useState(null);
  const dispatch = useDispatch();

  async function handleClick(coord) {
    const response = await api.get('current', {
      params: {
        lat: coord.lat,
        lon: coord.lon,
      }
    });

    if (!response.data.error) {
      setWeather(response.data);
      setCurrentLocal(coord.id);

      dispatch(actionAddToVisitedLocals(coord.id, response.data.main.temp_min, response.data.main.temp_max));
    }
  };

  return (
    <div id="app">
      <Header history={history} handleClick={handleClick} />
      <div className="content">
        <CityCard weather={weather} currentLocal={currentLocal} />
      </div>
      <footer>
        <button
          type="button"
          onClick={() => history.push('weatherInfo')}
        >
          Mostrar Mín/Máx
        </button>
      </footer>
    </div>
  );
};

export default Weather;
