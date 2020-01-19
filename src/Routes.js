import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import WeatherInfo from './pages/WeatherInfo';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Weather} />
    <Route exact path="/weatherInfo" component={WeatherInfo} />
  </Switch>
);

export default Routes;
