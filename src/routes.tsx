import { NotFoundView, WeatherView } from 'src/views';

const routes = [
  {
    component: WeatherView,
    path: '/',
  }, {
    component: NotFoundView,
    path: '*',
  },
];
export default routes;
