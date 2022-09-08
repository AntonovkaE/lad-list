import React from 'react';
import './weather.css'
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import stormIcon from "../../assets/img/storm1.png";
import snowIcon from "../../assets/img/snow.png";
import rainIcon from "../../assets/img/rain.png";
import windIcon from "../../assets/img/wind.png";
import fogIcon from "../../assets/img/free-icon-mist-2910189.png";
import sunIcon from "../../assets/img/sun.png";
import cloudsIcon from "../../assets/img/clouds.png";
import CloudIcon from "../../assets/img/cloud.png";
import slightRainIcon from "../../assets/img/slightRain.png";


function Weather({ item }) {

    const today = new Date().setHours(0, 0, 0, 0)
    const transformData = (string) => {
        return new Date(Date.parse(string))
    }
    const dayDate = transformData(item.datetime)

    const options = {
        weekday: 'short'
    };
    return (
        <li className="p-3 weather-list__item day">
            <p className="day__text fs-5"> { `${ dayDate.setHours(0, 0, 0, 0) === today ? 'Сегодня' : dayDate.toLocaleString("ru", options) } ` } </p>
            <p className="day__text fs-4 ">
                { item.temp }&deg;C
            </p>
            <WeatherIcon code={ item.weather.code }/>

            {/*<p className="day_text fs-6">{item.weather.description}</p>*/ }
            <p className="day__text fs-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-wind" viewBox="0 0 16 16">
                    <path
                        d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                { item.wind_cdir }</p>
            <p className="day__text fs-6">{ item.wind_spd } м/с</p>
        </li>
    );
}

export default Weather;

