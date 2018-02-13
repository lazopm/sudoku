import { PLAY, UNDO, NEW_GAME } from '../../actions';

export default (state = [], { type, ...action }) => {
    switch(type) {
        case(PLAY):
            return [...state, [action.position, action.value]];
        case(UNDO):
            return state.slice(0, -1);
        case(NEW_GAME):
            return [];
        default:
            return state;
    }
};
