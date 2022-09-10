import React, { useEffect, useState } from 'react';
import { natureImages } from '../../utils/constance';
import './slider.css';
import { useSwipeable } from 'react-swipeable';

export const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [background, setBackground] = useState(natureImages[activeIndex]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {

      newIndex = React.Children.count(children) - 1;
    } else if (newIndex > React.Children.count(children) - 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    setBackground(natureImages[activeIndex]);
  }, [activeIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className="slider" { ... handlers }>
      <div className="slider__inner"
           style={ { transform: `translateX(-${ activeIndex * 100 }%)` } }>
        { React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%', background: `url(${ background })` });
        }) }
      </div>
      <div className="slider__indicators indicators">
        <button className="btn btn-sm indicators__btn" onClick={ () => {
          updateIndex(activeIndex - 1);
        } }
        >Prev
        </button>
        { React.Children.map(children, (child, index) => {
          return (
            <button className={ `btn btn-sm indicators__btn ${ index === activeIndex ? 'btn-primary' : '' }` }
                    onClick={ () => {
                      updateIndex(index);
                    } }
            >{ index + 1 }
            </button>
          );
        }) }
        <button className="btn btn-sm indicators__btn" onClick={ () => {
          updateIndex(activeIndex + 1);
        } }
        >Next
        </button>
      </div>
    </div>
  );
};

