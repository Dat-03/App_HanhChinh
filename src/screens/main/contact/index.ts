import {routes} from '../../../constants';
import {Screen} from '../../../types';
import {DetailContact} from './Contact/components';

export {default as Contact} from './Contact';

export const contactScreens: Screen[] = [
  {
    name: routes.DETAILCONTACT,
    component: DetailContact,
  },
];
