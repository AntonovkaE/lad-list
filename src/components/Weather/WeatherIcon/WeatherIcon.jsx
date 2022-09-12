import rainIcon from '../../../assets/img/rain.png';
import CloudIcon from '../../../assets/img/cloud.png';
import windIcon from '../../../assets/img/wind.png';
import cloudsIcon from '../../../assets/img/clouds.png';
import slightRainIcon from '../../../assets/img/slightRain.png';
import snowIcon from '../../../assets/img/snow.png';
import stormIcon from '../../../assets/img/storm1.png';
import sunIcon from '../../../assets/img/sun.png';
import fogIcon from '../../../assets/img/free-icon-mist-2910189.png';
import './weatherIcon.css';
import PropTypes from 'prop-types';

function WeatherIcon({ code, id }) {
  const icon = ((code < 234) ? stormIcon : (code <= 302) ? snowIcon : (code <= 511) ? rainIcon : (code <= 610 || (code > 612 && code <= 623)) ? snowIcon : (code <= 612) ? windIcon : (code < 751) ? fogIcon : (code === 800) ? sunIcon : (code <= 802) ? cloudsIcon : (code >= 803) ? CloudIcon : slightRainIcon);

  return (<img src={icon} alt={icon} className={`day__icon day__icon_${id}`}/>);
}

WeatherIcon.prototype = {
  code: PropTypes.number,
  id: PropTypes.number,
}

export default WeatherIcon;
