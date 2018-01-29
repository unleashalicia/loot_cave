import types from '../actions/types';

const DEFAULT_STATE = {
    deck: []
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        // case types.SHUFFLE_DECK:
        //     return
        default:
            return state;
    }
}