import React from 'react';
import { deleteCity} from "../../redux/citiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchCityCoords } from "../../redux/cityData/cityApi";

const TodoItem = ({ id, city }) => {
    const cityCoords = useSelector(state => state.coords)
    console.log(cityCoords)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCityCoords(city))
    }, [])

    const handleDeleteClick = () => {
        dispatch(deleteCity({ id: id }))
    }
    return (
        <li className='list-group-item'>
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
                    {city}
				</span>
                <button onClick={handleDeleteClick} className='btn btn-outline-danger'>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
