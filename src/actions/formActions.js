import * as types from '../constants/ActionsTypes';

export const visitors = (visits) => ({
    types: types.VISITORS,
    visits,
})