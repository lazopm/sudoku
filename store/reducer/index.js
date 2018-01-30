import { combineReducers } from 'redux';
import board from './board';
import selected from './selected';

export default combineReducers({ board, selected });
