import types from '../actions/types';

const DEFAULT_STATE = {
    deck: []
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