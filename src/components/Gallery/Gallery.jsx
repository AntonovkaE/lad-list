import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesWeather } from '../Api/Api';
import City from '../City/City';


function Gallery({ commonArray }) {
  const data = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const { citiesWithWeather } = data;

  useEffect(() => {
    const citiesStr = cities.join(',');
    dispatch(fetchCitiesWeather(citiesStr));
  }, []);

  const cities = [];
  while (cities.length <= 8) {
    let index = Math.floor(Math.random() * commonArray.length);
    if (cities.indexOf(commonArray[index]) == -1) {
      cities.push(commonArray[index]);
    }
  }
  return (<div><h2>Разные города</h2>
      <ul className="list-group city-list">
        { citiesWithWeather.length ? citiesWithWeather.map((item, i) => (
          <City key={ i } city={ item }/>)) : '' }</ul>
    </div>

  );
}


export default Gallery;
