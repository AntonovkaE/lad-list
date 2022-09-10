import React from 'react';
import './weather.css';
import WeatherIcon from './WeatherIcon/WeatherIcon';

function Weather({ item, showDate, id}) {
  const today = new Date().setHours(0, 0, 0, 0);
  const transformData = (string) => {
    return new Date(Date.parse(string));
  };
  const dayDate = transformData(item.datetime);
  const options = {
    weekday: 'short',
  };
  return (
    <>
      <p
        className= {`day__text fs-5 ${showDate ? '' : 'hidden'}`}> { `${ dayDate.setHours(0, 0, 0, 0) === today ? 'Сегодня' : dayDate.toLocaleString('ru', options) } ` } </p>
      <p className={ `day__text day__temp day__temp_${id} day__text_${id}` }>
        { item.temp }&deg;C
      </p>
      <WeatherIcon id={id} code={ item.weather.code }/>

      <div className={ `day__wind day__wind_${id}` }>
        <p className="day__text day__text_wind ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-wind" viewBox="0 0 16 16">
            <path
              d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
          </svg>
          { item.wind_cdir }</p>
        <p className="day__text day__text_speedWind">{ item.wind_spd } m/s</p>
      </div>

    </>
  );
}

export default Weather;

