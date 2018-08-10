import React from 'react';


const City = (props)=>{

return(
<div className="header-weather">
  <h1>Your Local Weather</h1>
  <h2>{props.yourLocation}, {props.yourCountry}</h2>


</div>

)



}

export default City
