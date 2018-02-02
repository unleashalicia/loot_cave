import types from '../actions/types';

const DEFAULT_STATE = {
    deck: [],
    matches: 0,
    firstCardIndex: null,
    attempts: 0,
    gameState: 'ready',
    blockClick: false
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.DOUBLE_DECK:
            return {deck: action.payload};
        case types.SHUFFLE_DECK:
            return {deck: action.payload};
        default:
            return state;
    }
}