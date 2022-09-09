import React from "react";
import City from "../City/City";

import Weather from "../Weather/Weather";

function Gallery ({ commonArray }) {
    const cities = []
    let  arrayLength = 8;
    while (cities.length <= arrayLength) {
        let index = Math.floor(Math.random() * arrayLength);

        if (cities.indexOf(commonArray[index]) == -1) {
            cities.push(commonArray[index]);
        }
    }
    return (
      <ul className="list-group weather-list">
        {cities.length ? cities.map((item, i) => (
          <City key={item.datetime} item={item} days={1}/> )) : ''}
      </ul>
    )
}

export default Gallery
