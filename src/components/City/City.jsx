import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchCityCoords, fetchForecast, fetchWeather } from "../Api/Api";


const City = ({ city }) => {
    const data = useSelector(state => state.city)
    const dispatch = useDispatch()
    const {coords, weather} = data;

    useEffect(() => {
        dispatch(fetchCityCoords(city))
    }, [city])

    useEffect(() => {
        dispatch(fetchWeather(coords))
        dispatch(fetchForecast(coords))
    }, [coords])

    return (
        <li className='list-group-item'>
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
                    {city}
				</span>
                <div className="coords">
                    <h3>Coords</h3>
                </div>
            </div>
        </li>
    );
};

export default City;
