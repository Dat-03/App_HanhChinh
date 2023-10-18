import {routes} from '../../constants';
import {Screen} from '../../types';
import MyProfile from './MyProfile';

import SignIn from './sign-in';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignIn,
  },
  {
    name: routes.MYPROFILE,
    component: MyProfile,
  },
];
