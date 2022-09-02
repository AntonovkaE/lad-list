import React from 'react';
import { deleteCity} from "../../redux/citiesSlice";
import { useDispatch} from "react-redux";

const TodoItem = ({ id, city }) => {
    const dispatch = useDispatch()
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
