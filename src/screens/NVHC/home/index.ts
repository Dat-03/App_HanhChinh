import { routes } from '../../../constants';
import { Screen } from '../../../types';
import CheckingRoom from './CheckingRoom';
import DetailFloor from './DetailFloor';
import FloorRoom from './FloorRoom';

export { default as HomeNVHC } from './Home';
export const homeNVHCScreens: Screen[] = [
    { name: routes.FLOORROOM, component :FloorRoom  },
    {name: routes.DETAILFLOOR, component:DetailFloor},
    {name: routes.CHECKINKROOM, component:CheckingRoom}
];
