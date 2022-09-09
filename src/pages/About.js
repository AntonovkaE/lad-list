import React, { Fragment } from 'react';
import Form from '../components/Form/Form';
import Gallery from '../components/Gallery/Gallery';
import { commonArray } from '../utils/constance';

export const About = ({ onShowWeather }) => {
  return (
    <Fragment>
      <h2>Узнать погоду в любом городе</h2>
      <Form handleSubmit={ onShowWeather }/>
      <Gallery commonArray={ commonArray }/>
    </Fragment>

  );
};

export default About;
