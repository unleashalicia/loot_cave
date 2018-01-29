import {combineReducers} from 'redux';
import gameReducer from './match_reducer';

export default combineReducers({
    game: gameReducer
});