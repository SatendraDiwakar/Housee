import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import HouseProvider from './Context'

ReactDOM.render(
  <HouseProvider>
    <Router basename="/">
      <App />
    </Router>
  </HouseProvider>
  ,
  document.getElementById('root')
);

