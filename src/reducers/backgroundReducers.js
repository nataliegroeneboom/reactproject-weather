const state='';
export default(myClass=state, weather) =>{
  switch(weather.id){
    case 800:
    return myClass='clear-sky';
    default:
    return myClass='unknown';
  }
  console.log(myClass);
}
