import { useState, useEffect } from "react";
import axios from "axios";

export const Detail = (props)=> {
  const [ weather, setWeather ] = useState([])
  let temp = 0, wind=0, icon = [], windDir = '';
      
  const api_key = process.env.REACT_APP_API_KEY;
  const CITY = props.con.capital;
  const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${CITY}`
  
  useEffect(()=> {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setWeather(response.data);       
      })
  },[]) 
  
  if ( weather.current !== undefined)
  {
    temp = weather.current.temperature;
    wind = weather.current.wind_speed;
    icon = weather.current.weather_icons;
    windDir = weather.current.wind_dir;
    console.log(weather.current.temperature);
  }
  return(
    <div>      
      <h1>{props.con.name}</h1>
      <br/>
      <p>capital {props.con.capital}</p> 
      <p>population {props.con.population}</p>
      <br/>
      <h3>languages</h3>
      <ul>
        {props.con.languages.map(lang =>  <li key={lang.iso639_1}>{lang.name}</li>)}
      </ul>
      <img src={props.con.flag} border={'1px solid black'} width={120} height={80} alt={'Flaf of Country'}/>
      <br/>
      <h2><strong>Weather in {props.con.capital}</strong></h2>
      <p> <strong>temperature:</strong> {temp} Celsius </p>
      <img src={icon} alt={'Icon of weather'} />
      <p> <strong>wind:</strong> {wind} mph direction {windDir}</p>
    </div>
  )
}