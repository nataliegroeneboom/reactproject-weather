import React from 'react';

function Icon(props){


return(
  <div className="icon">

   {(()=>{
    switch(props.icon){
      case 'partlycloudy':
      return (<img src={require("../img/partlysunny.png")} />);
      case 'clear':
      return (<img src={require("../img/clear.jpeg")} />);
      case 'rain':
      return (<img src={require("../img/raining.png")} />);
      case 'drizzle':
      return (<img src={require("../img/drizzle.jpg")} />);
      case 'fog':
      return (<img src={require("../img/fog.png")} />);
      case 'overcast':
      return (<img src={require("../img/overcast.jpg")} />);
      case 'snow':
      return (<img src={require("../img/snow.jpg")} />);
      case 'storm':
      return (<img src={require("../img/storm.jpg")} />);
      default:
      return null;
    }
  }
  )()}
</div>
)





}


export default Icon;
