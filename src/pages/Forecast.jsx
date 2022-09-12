import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form/Form';
import Gallery from '../components/Gallery/Gallery';
import { commonArray } from '../utils/constance';

function Forecast({ onShowWeather }) {
  return (<>
    <Form handleSubmit={onShowWeather} title="Weather in your city" />
    <Gallery commonArray={commonArray} />
  </>);
}

Forecast.propTypes = {
  onShowWeather: PropTypes.func.isRequired,
};

export default Forecast;
