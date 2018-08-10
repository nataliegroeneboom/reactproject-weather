import React from 'react';
import {button} from './WeatherState'

const Temp = (props)=>{

return(
<div className="temperature">
  <div className="temp"><span>{props.temp}</span>{props.celsius? button.celDegree: button.fahDegree}</div>

    <div className="button-temp">
        <button className="fahrenheit" onClick={(e)=>{props.handleCurrencyConvert(props.temp, props.celsius, button.fah )}}>Fahrenheit</button>
        <button className="celsius" onClick={(e)=>{props.handleCurrencyConvert(props.temp, props.celsius, button.celsius)}}>Celsius</button>
    </div>
</div>

)}

export default Temp;
