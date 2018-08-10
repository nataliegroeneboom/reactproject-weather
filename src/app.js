import React from 'react';
import ReactDOM from 'react-dom';
import WeatherState from './components/WeatherState';
import './styles/styles.scss';


console.log('test');
document.getElementById('app').innerHTML='Locating';
ReactDOM.render(<WeatherState />, document.getElementById('app'));
