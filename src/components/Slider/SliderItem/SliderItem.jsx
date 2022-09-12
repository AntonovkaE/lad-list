import React from 'react';
import PropTypes from 'prop-types';

export function SliderItem ({ children, width, background }) {
  return (
    <div className="slider__item" style={ { width: width, backgroundImage: background } }>
      { children }
    </div>
  );
};

SliderItem.propTypes = {
  width: PropTypes.string,
  background: PropTypes.string,
}

