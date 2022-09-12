import React from 'react';
import PropTypes from 'prop-types';
import Weather from '../Weather/Weather';
import '../WeatherPopup/weatherPopup.css';
import { showBackground } from '../../utils/constance';
import './city.css';

function City({ city }) {
  const background = showBackground(city.weather.code);
  return (
    <div className="city-list__background" style={{ backgroundImage: `url(${background}` }}>
      <div className="city-list__body">
        <h4 className="city-list__title">{`${city.city_name}, ${city.country_code}`}</h4>
        <Weather item={city} showDate={false} id="gallery" />
      </div>
    </div>
  );
}

City.propTypes = {
  city: PropTypes.object.isRequired,
};

export default City;
