import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Support from './Support';

export {default as Home} from './Home';
export const homeScreens: Screen[] = [
  {
    name: routes.SUPPORT,
    component: Support,
  },
];
