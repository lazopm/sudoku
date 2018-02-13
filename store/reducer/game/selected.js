import { SELECT, PLAY, NEW_GAME } from '../../actions';

export default (state = null, { type, ...action }) => {
    switch(type) {
        case(SELECT):
            return action.position;
        case(PLAY):
            return null;
        case(NEW_GAME):
            return null;
        default:
            return state;
    }
};
