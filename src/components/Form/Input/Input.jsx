import React from 'react';
import './input.css';
import PropTypes from 'prop-types';

function Input({
  value = '',
  name,
  onChange = () => {},
  placeholder,
  maxLength,
  minLength,
  type = 'text',
  mode = 'light',
}) {
  return (
    <label htmlFor={`${name}-input`} className="form__label mb-5">
      <input value={value || ''}
             onChange={onChange}
             type={type}
             name={`${name}Input`}
             id={`${name}-input`}
             className={`form__item form__item_el_${name} form__item_${mode} shadow-lg p-3 bg-body rounded`}
             placeholder={placeholder}
             maxLength={maxLength}
             minLength={minLength}
             autoComplete="on"
             required/>
      <span className="form__item-error name-input-error"/>
    </label>);
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  type: PropTypes.string,
  mode: PropTypes.string,

};

export default Input;
