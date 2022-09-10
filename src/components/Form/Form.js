import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addCity } from "../../redux/citiesSlice";
import { showWeather } from '../../redux/cityDataSlice';
import Input from './Input/Input';
import './form.css';
import { fetchCityCoords } from '../Api/Api';

const Form = ({ handleSubmit, title }) => {
  const [city, setCity] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setCity('');
    handleSubmit(city)
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <section>
      <h2 className="page__title">{title}</h2>
      <form onSubmit={ onSubmit }
            className="form-inline mt-3 mb-3 form-control d-flex justify-content-between align-content-md-center ">
        <Input
          name="city"
          minLength="2"
          maxLength="20"
          placeholder="Your city"
          value={ city }
          onChange={ handleCityChange }
        />
        <button type="submit" className="btn btn-lg btn-outline-success">
          Find
        </button>
      </form>
    </section>

  );
};

export default Form;
