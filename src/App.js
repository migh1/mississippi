import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import './global.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default App;
