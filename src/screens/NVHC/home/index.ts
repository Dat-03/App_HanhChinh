import { routes } from '../../../constants';
import { Screen } from '../../../types';
import HomeNVHC from './Home';
import Problem from './Home/Problem';
import DetailProblem from './Home/Problem/components/detailProblem';
import DoneProblem from './Home/Problem/components/doneProblem';

export { default as HomeNVHC } from './Home';
export const homeNVHCScreens: Screen[] = [
   {
    name:routes.HOMENVHC,
    component:HomeNVHC
   },
   {
      name:routes.PROBLEM,
      component:Problem
   },
   {
      name:routes.DETAILPROBLEM,
      component:DetailProblem
   },
   {
      name:routes.DONEPROBLEM,
      component:DoneProblem
   }
];
