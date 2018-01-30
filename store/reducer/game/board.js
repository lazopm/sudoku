import { SET_CELL, NEW_GAME } from '../../actions';

const createBoardMatrix = () => new Array(9).fill(null)
    .map(() => new Array(9).fill(null));

const initialState = createBoardMatrix();
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
        case(NEW_GAME):
            return createBoardMatrix();
        default:
            return state;
    }
};
