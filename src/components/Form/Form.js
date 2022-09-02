import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/citiesSlice";


const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('user entered: ' + value);
        dispatch(addCity({
            city: value,
        }))
    };

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3 form-control'>
            <label className='sr-only'>City</label>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Add todo...'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>

            <button type='submit' className='btn btn-primary mb-2'>
                Submit
            </button>
        </form>
    );
};

export default Form;
