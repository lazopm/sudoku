export const NEW_GAME = 'NEW_GAME';
export const newGame = difficulty => ({ type: NEW_GAME, difficulty });

export const SELECT = 'SELECT'; 
export const select = position => ({ type: SELECT, position })

export const PLAY = 'PLAY'; 
export const play = (position, value) => ({ type: PLAY, position, value });

export const UNDO = 'UNDO'; 
export const undo = () => ({ type: UNDO });
