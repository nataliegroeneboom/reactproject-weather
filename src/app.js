import React from 'react';
import ReactDOM from 'react-dom';
import WeatherState from './components/WeatherState';
import './styles/styles.scss';



document.getElementById('app').innerHTML='Locating';
ReactDOM.render(<WeatherState />, document.getElementById('app'));
