import stratus from '../assets/images/stratus.png';
import sun from '../assets/images/sun.png';
import cloudy from '../assets/images/cloudy.png';
import stratuscumulus from '../assets/images/stratuscumulus.png';
import cumulus from '../assets/images/cumulus.png';
import rain from '../assets/images/rain.png';
import showerRain from '../assets/images/shower-rain.png';
import snow from '../assets/images/snow.png';
import thunder from '../assets/images/thunder.png';
import moderateRain from '../assets/images/moderaterain.png';

const getWeatherIcon = (description: any) => {
  let weatherIcon = '';
  switch (description) {
    case 'scattered clouds':
      weatherIcon = stratus;
      break;
    case 'clear sky':
      weatherIcon = sun;
      break;
    case 'few clouds':
      weatherIcon = cloudy;
      break;
    case 'broken clouds':
      weatherIcon = stratuscumulus;
      break;
    case 'overcast clouds':
      weatherIcon = cumulus;
      break;
    case 'shower rain':
      weatherIcon = showerRain;
      break;
    case 'light rain':
      weatherIcon = rain;
      break;
    case 'moderate rain':
      weatherIcon = moderateRain;
      break;
    case 'thunderstorm':
      weatherIcon = thunder;
      break;
    case 'snow':
      weatherIcon = snow;
      break;
    default:
      break;
  }
  return weatherIcon;
};
export default getWeatherIcon;
