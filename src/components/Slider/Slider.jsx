import React, { useEffect, useState } from 'react';
import { natureImages } from '../../utils/constance';
import './slider.css';
import { useSwipeable } from 'react-swipeable';

export const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [background, setBackground] = useState(natureImages[activeIndex]);
  const [paused, setPaused] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className="slider" { ... handlers }
         onMouseEnter={ () => setPaused(true) }
         onMouseLeave={ () => setPaused(false) }>
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
        <button className="btn btn-sm indicators__btn" onClick={ () => {
          updateIndex(activeIndex + 1);
        } }
        >Next
        </button>
      </div>
    </div>
  );
};

