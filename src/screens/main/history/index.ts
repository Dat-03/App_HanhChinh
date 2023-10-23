import { Component } from 'react';
import { routes } from '../../../constants';
import { Screen } from '../../../types';
import History from './History';
import detailHis from './History/DetailHis';


export { default as History } from './History';


export const historyScreens: Screen[] = [
    {
        name:routes.HISTORY,
        component:History
    },
    {
        name:routes.DETAIL,
        component:detailHis
    }
    
];
