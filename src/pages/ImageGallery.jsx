import React from 'react';
import { Slider } from '../components/Slider/Slider';
import { SliderItem } from '../components/Slider/SliderItem/SliderItem';

export const ImageGallery = () => {

  return (<section>
    <h2 className="section__title"></h2>
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
)
};
export default ImageGallery;
