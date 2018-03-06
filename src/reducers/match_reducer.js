import types from '../actions/types';

const DEFAULT_STATE = {
    deck: [],
    firstCardIndex: null,
    matches: 0,
    attempts: 0,
    gold: 0,
    weapon: false,
    armor: false,
    playerHP: 1,
    dragonHP: 3,
    inventory: [],
    modal: false,
    games: 0,
    newGame: false,
    matchKey: false,
    message: "Welcome, Adventurer!  You have made it to the dragon cave.  For years you have heard tell of the dragon that terrorizes the village below and of the untold treasures that hide in the depths of this cave.  Be very quiet as you look for treasure here.  In this cave you can find loot, a sword, and a suit of armor.  The latter two will help you defeat the dragon.  Match any two cards, and they're yours.  Unless, of course, you see the dragon.  Mismatch two dragon cards, and he'll burn you to a crisp.  Match two, and you'll stab him before disappearing back into the shadows.  May fortune favor you on your quest!"
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
        case types.FIND_WEAPON:
            return {...state, weapon: true};
        case types.FIND_ARMOR:
            return {...state, armor: true, playerHP: action.payload};
        case types.FILL_INVENTORY:
            return {...state, inventory: action.payload};
        case types.STAB_DRAGON:
            return {...state, dragonHP: action.payload};
        case types.TAKE_DAMAGE:
            return {...state, playerHP: action.payload};
        case types.TOGGLE_MODAL:
            return {...state, modal: action.payload};
        case types.FADE_MATCH:
            return {...state, deck: action.payload};
        case types.ADD_ATTEMPT:
            return {...state, attempts: action.payload};
        case types.ADD_MATCH:
            return {...state, matches: action.payload};
        case types.UPDATE_GAME_TOTAL:
            return {...DEFAULT_STATE, inventory: [], games: action.payload};
        case types.UPDATE_GAME_STATUS:
            return {...state, newGame: action.payload};
        case types.TOGGLE_MATCH_KEY:
            return {...state, matchKey: action.payload};
        case types.UPDATE_MODAL_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state;
    }
}