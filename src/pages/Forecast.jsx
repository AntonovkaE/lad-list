import React, { Fragment } from 'react';
import Form from '../components/Form/Form';
import Gallery from '../components/Gallery/Gallery';
import { commonArray } from '../utils/constance';

export const Forecast = ({ onShowWeather }) => {
  return (
    <>
      <Form handleSubmit={ onShowWeather }/>
      <Gallery commonArray={ commonArray }/>
    </>

  );
};

export default Forecast;
