import { SET_CELL, SELECT_CELL, NEW_GAME } from '../../actions';

export default (state = null, { type, ...action }) => {
    switch(type) {
        case(SELECT_CELL):
            return [action.x, action.y];
        case(SET_CELL):
            return null;
        case(NEW_GAME):
            return null;
        default:
            return state;
    }
};
