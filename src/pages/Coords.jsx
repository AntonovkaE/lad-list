import React, { useEffect, useState } from 'react';
import { Slider } from '../components/Slider/Slider';
import { SliderItem } from '../components/Slider/SliderItem/SliderItem';
import Form from '../components/Form/Form';
import { useSelector } from 'react-redux';
import './coords.css';

export const Coords = ({ onSubmit }) => {
  const data = useSelector((state) => state.city);
  const [isShowCoords, setIsShowCoords] = useState(false);
  useEffect(() => {
    if (data.city) {
      setIsShowCoords(true);
    }
  }, [data.city]);

  return (<section className="coords section">
      <h2 className="section__title">Get coordinates</h2>
      <Form handleSubmit={ onSubmit } title='Find out the coordinates of your city'/>
      <div className={ `container coords ${ isShowCoords ? '' : 'hidden' }` }>
        <h3 className="coords__city">{ data.city }</h3>
        <div className='coords__block'>
          <p className="coords__text">longitude { data.coords[0] }</p>
          <p className="coords__text">latitude { data.coords[1] }</p>
        </div>
      </div>
      <Slider>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
        <SliderItem></SliderItem>
      </Slider>

    </section>
  );
};
export default Coords;
