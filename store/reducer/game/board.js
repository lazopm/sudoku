import { NEW_GAME } from '../../actions';

const createBoard = () => [
    null, null, null, null, null,    6, null, null,    3,
       6, null,    5,    3,    7, null, null,    8, null,
    null, null, null,    5,    1, null, null,    6, null,
    null, null,    4,    7, null, null,    8, null, null,
    null,    6,    9, null, null, null,    3,    4, null,
    null, null,    8, null, null,    5,    2, null, null,
    null,    5, null, null,    6,    9, null, null, null,
    null,    8, null, null,    3,    1,    7, null,    4,
       2, null, null,    8, null, null, null, null, null,
];

const initialState = null; 
export default (state = createBoard(), { type, ...action }) => {
    switch(type) {
        case(NEW_GAME):
            return createBoard();
        default:
            return state;
    }
};
