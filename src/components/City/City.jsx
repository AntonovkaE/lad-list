import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCityCoords, fetchForecast } from "../Api/Api";
import Weather from "../Weather/Weather";
import '../WeatherPopup/style.css'
import { showBackground } from '../../utils/constance';

const City = ({ city }) => {
console.log(city)
  const background = showBackground(city.weather.code)
  return (
    <div style={{ backgroundImage: `url(${background}`}}>
      <h3>{ `${ city.city_name }, ${ city.country_code }` }</h3>
      <Weather item={city} showDate={false}/>
  </div>

  )
};

export default City;
