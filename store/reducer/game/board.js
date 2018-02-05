import { SET_CELL, NEW_GAME } from '../../actions';

/*
const createBoardMatrix = () => new Array(9).fill(null)
    .map(() => new Array(9).fill(null));
*/

const createBoardMatrix = () => [
    [null, null, null, null, null,    6, null, null, 3   ],
    [   6, null,    5,    3,    7, null, null,    8, null],
    [null, null, null,    5,    1, null, null,    6, null],
    [null, null,    4,    7, null, null,    8, null, null],
    [null,    6,    9, null, null, null,    3,    4, null],
    [null, null,    8, null, null,    5,    2, null, null],
    [null,    5, null, null,    6,    9, null, null, null],
    [null,    8, null, null,    3,    1,    7, null,    4],
    [   2, null, null,    8, null, null, null, null, null],
];

const initialState = null; 
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
