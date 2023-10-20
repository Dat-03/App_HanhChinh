import {routes} from '../../constants';
import {Screen} from '../../types';
import {HomeManager} from './home';

export * from './home';
export * from './history';
export * from './setting';
export const managerScreen: Screen[] = [
  {
    name: routes.HOMEMANAGER,
    component: HomeManager,
  },
];
