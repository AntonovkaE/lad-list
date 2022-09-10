import React from 'react';

export const SliderItem = ({ children, width, background }) => {
  return (
    <div className="slider__item" style={ { width: width, backgroundImage: background } }>
      { children }
    </div>
  );
};
