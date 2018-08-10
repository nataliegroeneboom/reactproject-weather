import React from 'react';




class WeatherApp extends React.Component{
state={
  country: '',
  location: '',
  weatherid: '',
  weatherdesc: '',
  temp: '',
  tempmax: '',
  tempmin: '',
  icon: '',
  classid: ''

};


tryThisFunction=()=>{
  console.log('trying')();
}



componentDidMount(){

  try{

    const getPosition = (options)=>{
     return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    }

    getPosition()
      .then((position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const otehr = `/api/current?lon=${encodeURIComponent(longitude)}&lat=${encodeURIComponent(latitude)}`;
        console.log(latitude , longitude);

        if(position){
           //  this.setState(()=> ({
           // latitude: latitude,
           // longitude: longitude
           //    }));
              fetch(`https://fcc-weather-api.glitch.me/api/current?lon=${encodeURIComponent(longitude)}&lat=${encodeURIComponent(latitude)}`, {
  method: "GET"
}).then(results=>{

                return results.json();
              }).then(data=>{
                this.setState(()=>({
                  country: data.sys.country,
                  location: data.name,
                  weatherid: data.weather[0].id,
                  weatherdesc: data.weather[0].description,
                  tempmax: data.main.temp_max,
                  tempmin: data.main.temp_min,
                  temp: data.main.temp,
                  icon: data.weather[0].icon,


                }));
              let a = data.weather[0].id;
              switch(a){
                  case 800:
                  return this.setState(()=>({classid:'clear-sky'}));
                  case 200:
                  case 201:
                  case 202:
                  case 210:
                  case 212:
                  case 211:
                  case 221:
                  case 230:
                  case 232:
                  case 232:
                  return this.setState(()=>({classid:'storm'}));
                  case 300:
                  case 301:
                  case 302:
                  case 310:
                  case 311:
                  case 312:
                  case 313:
                  case 314:
                  case 321:
                  return this.setState(()=>({classid:'drizzle'}));
                  case 500:
                  case 501:
                  case 502:
                  case 503:
                  case 504:
                  case 511:
                  case 521:
                  case 522:
                  case 531:
                  return this.setState(()=>({classid:'rain'}));
                  case 701:
                  case 711:
                  case 721:
                  case 731:
                  case 741:
                  case 751:
                  case 761:
                  case 762:
                  case 771:
                  case 781:
                  return this.setState(()=>({classid:'fog'}));
                  case 801:
                  case 802:
                  case 803:
                  return this.setState(()=>({classid:'scattered-clouds'}));
                  case 804:
                  return this.setState(()=>({classid:'overcast'}));
                  default:
                 return this.setState(()=>({classid:'unknown'}))
                }
                console.log(b);
              })
        }//end of if position
      })
      .catch((err) => {
        console.error(err.message);
      });





  }catch(e){

  }
}// end of did mount.



render(){
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(require("../img/clear.jpeg"))`
  };



return (
  <div className={this.state.classid}
       style={ sectionStyle}

    >
    <h1>Welcome to the weather App</h1>
  <Geolocation
    yourCountry={this.state.country}
    yourLocation={this.state.location}
    id={this.state.weatherid}
    descrip = {this.state.weatherdesc}
    temp = {this.state.temp}
    maxTemp={this.state.tempmax}
    minTemp={this.state.tempmin}
    icon= {this.state.icon}
    classid={this.state.classid}


  />
  </div>

)

}


}

export default WeatherApp;
