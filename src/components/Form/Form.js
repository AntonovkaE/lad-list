import React, { useState } from 'react';
import { useDispatch } from "react-redux";
// import { addCity } from "../../redux/citiesSlice";
import { showWeather } from '../../redux/cityDataSlice'
import Input from "../Input/Input";
import './style.css'

const Form = ({handleSubmit}) => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(showWeather({
            city: city,
        }))
        setCity('')
        handleSubmit()
    };
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3 form-control d-flex justify-content-between align-content-md-center '>
            <label className='sr-only'>Прогноз на 8 дней</label>
            <Input
                name="city"
                minLength="2"
                maxLength="20"
                placeholder='Ваш город'
                value={city}
                onChange={handleCityChange}
            />
            {/*<input*/}
            {/*    minLength="2"*/}
            {/*    maxLength="20"*/}
            {/*    type='text'*/}
            {/*    className='form-control mb-2 mr-sm-2'*/}
            {/*    placeholder='Add todo...'*/}
            {/*    value={city}*/}
            {/*    onChange={(event) => setCity(event.target.value)}*/}
            {/*></input>*/}

            <button type='submit' className='btn btn-light'>
                Узнать
            </button>
        </form>
    );
};

export default Form;
