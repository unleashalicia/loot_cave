import types from '../actions/types';

const DEFAULT_STATE = {
    deck: [],
    matches: 0,
    firstCardIndex: null,
    attempts: 0,
    gameState: 'ready',
    gold: 0,
    sword: false,
    armor: false,
    playerHP: 1
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.DOUBLE_DECK:
            return {...state, deck: action.payload};
        case types.SHUFFLE_DECK:
            return {...state, deck: action.payload};
        case types.SET_FIRST_INDEX:
            return {...state, firstCardIndex: action.payload};
        case types.FLIP_CARD:
            return {...state, deck: action.payload};
        case types.ADD_GOLD:
            return {...state, gold: action.payload};
        default:
            return state;
    }
}