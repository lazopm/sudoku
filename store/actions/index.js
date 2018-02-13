export const NEW_GAME = 'NEW_GAME';
export const newGame = difficulty => ({ type: NEW_GAME, difficulty });

export const SELECT = 'SELECT'; 
export const select = n => ({ type: SELECT, n })

export const PLAY = 'PLAY'; 
export const play = (n, num) => ({ type: PLAY, n, num });
