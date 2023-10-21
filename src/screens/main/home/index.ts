import { routes } from '../../../constants';
import { Screen } from '../../../types';
import Report from './Report';


export { default as Home } from './Home';
export const homeScreens: Screen[] = [
    { name: routes.REPORT, component :Report  }
];
