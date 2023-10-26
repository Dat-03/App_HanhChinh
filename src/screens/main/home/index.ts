import {routes} from '../../../constants';
import {Screen} from '../../../types';
import CreateReport from './CreateReport';
import UpImage from './CreateReport/components/UpImage';
import Support from './Support';

export {default as Home} from './Home';
export const homeScreens: Screen[] = [
  {
    name: routes.SUPPORT,
    component: Support,
  },
  {
    name: routes.CREATE_REPORT,
    component: CreateReport,
  },
  {
    name: routes.UP_IMAGE,
    component: UpImage,
  },
];
