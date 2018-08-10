
import React from 'react';
const BackgroundImage = (props) =>{



return(


<div className="background">
{(() => {

switch(props.id){
  case 'clear':
  return <img src={require('../img/clearimg.jpeg')} />;
  case 'partlycloudy':
 return <img src={require('../img/partlycloudy.jpg')} />;
 case 'rain':
return <img src={require('../img/rain.jpg')} />;
case 'drizzle':
return <img src={require('../img/drizzleimg.jpg')} />;
case 'fog':
return <img src={require('../img/drizzleimg.jpg')} />;
case 'overcast':
return <img src={require('../img/overcastimg.jpg')} />;
case 'storm':
return <img src={require('../img/stormimg.jpg')} />;
case 'snow':
return <img src={require('../img/snowimg.jpg')} />;
default:
return <img src={require('../img/partlycloudy.jpg')} />
}



})()}

    </div>)
};

export default BackgroundImage;
