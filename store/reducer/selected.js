import { SET_CELL, SELECT_CELL } from '../actions';

export default (state = [1,1], { type, ...action }) => {
    switch(type) {
        case(SELECT_CELL):
            return [action.x, action.y];
        case(SET_CELL):
            return null;
        default:
            return state;
    }
};
