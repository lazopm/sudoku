export const SELECT_CELL = 'SELECT_CELL'; 
export const selectCell = (x, y) => ({ type: SELECT_CELL, x, y })

export const SET_CELL = 'SET_CELL'; 
export const setCell = (x, y, num) => ({
    type: SET_CELL,
    x,
    y,
    num,
});
