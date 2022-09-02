import React from 'react';
import { deleteCity} from "../redux/citiesSlice";
import { useDispatch} from "react-redux";

const TodoItem = ({ id, title }) => {
    const dispatch = useDispatch()
    const handleDeleteClick = () => {
        dispatch(deleteCity({ id: id }))
    }
    return (
        <li className={`list-group-item'}`}>
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
                    {title}
				</span>
                <button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
