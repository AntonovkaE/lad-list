import React, { useEffect, useState } from 'react';
import { natureImages } from '../../utils/constance';
import './slider.css'

export const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [background, setBackground] = useState(natureImages[activeIndex]);
  // const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    console.log(`count ${React.Children.count(children)}`)
    if (newIndex < 0) {

      newIndex = React.Children.count(children) - 1;
      console.log(newIndex)
    } else if (newIndex > React.Children.count(children) - 1) {
      newIndex = 0
      console.log(newIndex)

    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    setBackground(natureImages[activeIndex])
  }, [activeIndex])

  return (
    <div className="slider">
      <div className="slider__inner"
           style={ { transform: `translateX(-${ activeIndex * 100 }%)` } }>
        { React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: '100%', background: `url(${ background })`})
        })}
      </div>
      <div className="slider__indicators indicators">
        <button className="btn btn-sm indicators__btn" onClick={ () => {
          console.log(activeIndex - 1)
          updateIndex(activeIndex - 1);
        } }
        >Prev
        </button>
        { React.Children.map(children, (child, index) => {
          return (
            <button className={ `btn btn-sm indicators__btn ${ index === activeIndex ? 'btn-primary' : '' }` }
                    onClick={ () => {
                      console.log(`active ${index}`)
                      updateIndex(index);
                    } }
            >{ index + 1 }
            </button>
          );
        }) }
        <button className="btn btn-sm indicators__btn" onClick={ () => {
          console.log(activeIndex + 1)
          updateIndex(activeIndex + 1);
        } }
        >Next
        </button>

      </div>
    </div>
  );
};

