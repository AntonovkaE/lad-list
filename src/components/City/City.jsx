import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCityCoords, fetchForecast } from "../Api/Api";
import Weather from "../Weather/Weather";
import './style.css'

const City = ({ city, days }) => {

  const data = useSelector(state => state.city)
  const dispatch = useDispatch()
  const { coords, forecast } = data;

  useEffect(() => {
    dispatch(fetchCityCoords(city))
  }, [city])

  useEffect(() => {
    dispatch(fetchForecast(coords))
    forecast.length = days;
  }, [coords])

  return (
    <div className='container-fluid'>
      <h2 className="h3"></h2>
      <div className="coords">
        {/*<div className="container-sm">*/ }
        {/*    <h4 className="h4">Coords</h4>*/ }
        {/*    <p>Долгота: {coords[0]}</p>*/ }
        {/*    <p>Широта: {coords[1]}</p>*/ }
        {/*</div>*/ }
        <div className="container-sm">
        </div>
        <ul className="list-group weather-list">
          { forecast.length ? forecast.map((item, i) => (
            <Weather key={ item.datetime } item={ item }/>)) : '' }
        </ul>

      </div>
    </div>
  );
};

export default City;
