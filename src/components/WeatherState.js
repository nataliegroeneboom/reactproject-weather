import React from 'react';
import BackgroundImage from './BackgroundImage';
import City from './City';
import Geolocation from './Geolocation';
import Icon from './Icon';
import Temp from './Temp';
import Wrapper from './Wrapper';
//import clear from '../img/clear.jpeg';
//import Image from 'react-image-resizer';

export const button = {
                  celsius: true,
                  celDegree: <span>&deg;C</span>,
                  fah: false,
                  fahDegree: <span>&deg;F</span>

}



export default class WeatherState extends React.Component{

constructor(props){
  super(props);
  this.state={
    country: null,
    location: null,
    weatherid: null,
    weatherdesc: null,
    temp: null,
    tempmax: null,
    tempmin: null,
    icon: null,
    imgid: null,
    loading: false,
    celsius: true

  };
  this.handleCurrencyConvert = this.handleCurrencyConvert.bind(this);
}



//  this.handleCurrencyConvert = this.handleCurrencyConvert(bind(this))

  handleCurrencyConvert(temp, measure, button){
console.log(button, this.state.celsius);
   if(measure&&!button){
     console.log('fah');
     temp = (parseInt(temp,10)*9/5)+32;
     console.log(temp);
     this.setState((prevState)=>{
       return {
         celsius: !prevState.celsius,
         temp
       }
     });
   }else if(!measure&&button){
     console.log('cel');
     temp = (parseInt(temp,10)-32)*5/9;
     console.log(temp);
     this.setState((prevState)=>{
       return {
         celsius: !prevState.celsius,
         temp
       }
     });
      }



  }


  componentDidMount(){
    this.setState({loading: true});
    try{

      const getPosition = (options, tryThisFunction)=>{
       return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      }

      getPosition()
        .then((position) => {
          console.log(position);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

  //        const otehr = `/api/current?lon=${encodeURIComponent(longitude)}&lat=${encodeURIComponent(latitude)}`;
          console.log(latitude , longitude);

          if(position){
            this.setState({loading:true});
             console.log('sucess');
                fetch(`https://fcc-weather-api.glitch.me/api/current?lon=${encodeURIComponent(longitude)}&lat=${encodeURIComponent(latitude)}`, {
    method: "GET"
  }).then(results=>{

                  return results.json();
                }).then(data=>{

                  this.otherConst = data.weather[0].icon
                  this.setState(()=>({
                    country: data.sys.country,
                    location: data.name,
                    weatherid: data.weather[0].id,
                    weatherdesc: data.weather[0].description,
                    tempmax: data.main.temp_max,
                    tempmin: data.main.temp_min,
                    temp: data.main.temp,
                    icon: data.weather[0].icon,
                    loading: false

                  }));
                let a = data.weather[0].id;
                switch(a){
                    case 800:
                    return this.setState(()=>({imgid:'clear'}));
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
                    return this.setState(()=>({imgid:'storm'}));
                    case 300:
                    case 301:
                    case 302:
                    case 310:
                    case 311:
                    case 312:
                    case 313:
                    case 314:
                    case 321:
                    return this.setState(()=>({imgid:'drizzle'}));
                    case 500:
                    case 501:
                    case 502:
                    case 503:
                    case 504:
                    case 511:
                    case 520:
                    case 521:
                    case 522:
                    case 531:
                    return this.setState(()=>({imgid:'rain'}));
                    case 600:
                    case 601:
                    case 602:
                    case 611:
                    case 612:
                    case 615:
                    case 616:
                    case 620:
                    case 621:
                    case 622:
                    return this.setState(()=>({imgid:'snow'}));
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
                    return this.setState(()=>({imgid:'fog'}));
                    case 801:
                    case 802:
                    case 803:
                    return this.setState(()=>({imgid:'partlycloudy'}));
                    case 804:
                    return this.setState(()=>({imgid:'overcast'}));
                    default:
                   return this.setState(()=>({imgid:'unknown'}))
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

  const tempRound = Math.round(this.state.temp);
  const iconId = this.state.imgid;
  const {loading} = this.state;
  let test;
if(loading){
  return<h3 className="loading">Loading your local weather...</h3>
}


  return(
    <div className="weather-state">

    <BackgroundImage   id={this.state.imgid}/>
    <Wrapper>
    <City
      yourLocation={this.state.location}
      yourCountry={this.state.country}
    />
   <Icon icon={this.state.imgid} />
   <Geolocation
     id={this.state.weatherid}
     descrip = {this.state.weatherdesc}
     icon= {this.state.icon}
   />
    <Temp   temp = {tempRound}
           maxTemp={this.state.tempmax}
           minTemp={this.state.tempmin}
           handleCurrencyConvert= {this.handleCurrencyConvert}
           celsius={this.state.celsius}
    />

  </Wrapper>
  </div>
  )






}

  }
