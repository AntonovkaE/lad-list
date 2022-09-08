import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchCityCoords, fetchWeather } from "../Api/cityApi";


const City = ({ city }) => {
    const data = useSelector(state => state.city)
    const dispatch = useDispatch()
    const {coords, weather} = data;

    // const {temp2m, date, weather} = weatherInfo.weather;


    useEffect(() => {

        dispatch(fetchCityCoords(city))
    }, [city])

    useEffect(() => {
        console.log(coords[0], coords[1])
        dispatch(fetchWeather(coords))
        console.log(weather)
    }, [coords])

    // const handleDeleteClick = () => {
    //     dispatch(deleteCity({ id: id }))
    // }
    return (
        <li className='list-group-item'>
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
                    {city}
				</span>
                <div className="coords">
                    <h3>Coords</h3>
                    {/*<p>longitude: {cityCoords.coords[0]}</p>*/}
                    {/*<p>latitude: {cityCoords.coords[1]}</p>*/}
                </div>
                {/*<button onClick={handleDeleteClick} className='btn btn-outline-danger'>Delete</button>*/}
            </div>
        </li>
    );
};

export default City;
