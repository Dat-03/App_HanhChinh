import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Achievement from './Achievement';
import Event from './Event';
import Incident from './Incident';
import Personnel from './Personnel';
import { DetailPersonal } from './Personnel/personnelScreen/components';
import RoomChecking from './RoomChecking';
import Statistical from './Statistical';
import ComputerError from './Statistical/components/ComputerError';

export {default as HomeManager} from './Home';
export const homeManagerScreens: Screen[] = [
  {
    name: routes.ACHIEVEMENT,
    component: Achievement,
  },
  {
    name: routes.EVENT,
    component: Event,
  },
  {
    name: routes.INCIDENT,
    component: Incident,
  },
  {
    name: routes.PERSONNEL,
    component: Personnel,
  },
  {
    name: routes.DETAILPERSONAL,
    component: DetailPersonal,
  },
  {
    name: routes.ROOMCHECKING,
    component: RoomChecking,
  },
  {
    name: routes.STATISTICAL,
    component: Statistical,
  },
  {
    name: routes.COMPUTERERROR,
    component: ComputerError
  },
];
