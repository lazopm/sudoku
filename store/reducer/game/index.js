import { combineReducers } from 'redux';
import board from './board';
import plays from './plays';
import selected from './selected';

export default combineReducers({ board, selected, plays });
