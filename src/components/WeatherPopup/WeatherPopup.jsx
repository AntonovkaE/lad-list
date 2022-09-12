import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from '../Popup/Popup';
import { fetchCityCoords, fetchForecast } from '../Api/Api';
import Weather from '../Weather/Weather';
import './weatherPopup.css';
import { showBackground } from '../../utils/constance';
import Gallery from '../Gallery/Gallery';

function WeatherPopup({ isOpen, onClose }) {
  const data = useSelector((state) => state.city);
  const { coords, forecast, city } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCityCoords(city));
  }, [city]);

  useEffect(() => {
    dispatch(fetchForecast(coords));
  }, [coords]);
  const code = data.forecast[0] ? data.forecast[0].weather.code : 200;

  const background = showBackground(code);
  return (
    <Popup isOpen={isOpen} onClose={onClose} name="weather" background={background}>
      <h2>{`${data.city}, ${data.country}`}</h2>
      <div className="container-fluid">
        <ul className="list-group weather-list">
          {forecast.length ? forecast.map((item, i) => (
            <li key={i} className="p-3 weather-list__item day">
              <Weather item={item} showDate={true} id=""/>
            </li>)) : ''
          }
        </ul>
      </div>
    </Popup>
  );
}

WeatherPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WeatherPopup;
