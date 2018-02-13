import { PLAY, NEW_GAME } from '../../actions';

export default (state = [], { type, ...action }) => {
    switch(type) {
        case(PLAY):
            return [...state, [action.n, action.num]];
        case(NEW_GAME):
            return [];
        default:
            return state;
    }
};
