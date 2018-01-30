import { SET_CELL } from '../actions';

const initialState = new Array(9).fill(null)
    .map(() => new Array(9).fill(null));

export default (state = initialState, { type, ...action }) => {
    switch(type) {
        case(SET_CELL):
            return board.map((row, y) =>
                row.map((num, x) =>
                    action.x === x && action.y === y
                    ? action.num
                    : num
                )
            );
        default:
            return state;
    }
};
