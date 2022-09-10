import React from 'react';
import { Slider } from '../components/Slider/Slider';
import { SliderItem } from '../components/Slider/SliderItem/SliderItem';

export const ImageGallery = () => {

  return (<section>
    <h2 className="section__title"></h2>
      <Slider>
        <SliderItem>1</SliderItem>
        <SliderItem>2</SliderItem>
        <SliderItem>4</SliderItem>
      </Slider>

  </section>
)
};
export default ImageGallery;
