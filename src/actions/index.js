import types from './types';
import gameMessages from '../helpers/modal_messages';

export function doubleDeck(arr){

    const newArr = [];

    for(let count = 0; count<2; count++){
        for (let index=0; index<arr.length; index++){
            let jsonString = JSON.stringify(arr[index]);
            let newObject = JSON. parse(jsonString);

            newArr.push(newObject);
        }
    }

    return {
        type: types.DOUBLE_DECK,
        payload: newArr
    }
}

export function shuffleArray(array){
    let arr = array.slice();
    for(let index=0; index<arr.length; index++){
        const randIndex = Math.floor(Math.random() * arr.length);
        const temp = arr[index];
        arr[index] = arr[randIndex];
        arr[randIndex] = temp;
    }

    return {
        type: types.SHUFFLE_DECK,
        payload: arr
    }
}

export function setFirstIndex(index){
    return {
        type: types.SET_FIRST_INDEX,
        payload: index
    }
}

export function flipCard(deck, index){

    let newDeck = deck.slice();
    newDeck[index].flipped = !newDeck[index].flipped;

    return {
        type: types.FLIP_CARD,
        payload: newDeck
    }
}

export function addGold(currentGold, moreGold){
    let oldGold = parseFloat(currentGold);
    let newGold = parseFloat(moreGold);

    let goldTotal = oldGold + newGold;
    return {
        type: types.ADD_GOLD,
        payload: goldTotal
    }
}

export function findWeapon(){

    return {
        type: types.FIND_WEAPON
    }
}

export function findArmor(currentHP){
    let newHP = currentHP + 1;

    return {
        type: types.FIND_ARMOR,
        payload: newHP
    }
}

export function fillInventory(inventory, item){
    let inventory_array = inventory;
    inventory_array.push(item);

    return {
        type: types.FILL_INVENTORY,
        payload: inventory_array
    }
}

export function stabDragon(hp, weapon){
    let newHP = hp;

    if (weapon){
        newHP = hp - 2;
    } else {
        newHP = hp - 1;
    }

    return {
        type: types.STAB_DRAGON,
        payload: newHP
    }
}

export function takeDamage(hp){
    let newHP = hp - 1;

    return {
        type: types.TAKE_DAMAGE,
        payload: newHP
    }
}

export function toggleModal(modal){
    let modalStatus = !modal;

    return {
        type: types.TOGGLE_MODAL,
        payload: modalStatus
    }
}

export function fadeMatch(deck, index1, index2){
    let newDeck = deck.slice();

    newDeck[index1].matched = !newDeck[index1].matched;
    newDeck[index2].matched = !newDeck[index2].matched;


    return {
        type: types.FADE_MATCH,
        payload: newDeck
    }
}

export function addAttempt(attempts){
    let newAttempts = attempts + 1;

    return {
        type: types.ADD_ATTEMPT,
        payload: newAttempts
    }
}

export function addMatch(matches){
    let newMatches = matches + 1;

    return {
        type: types.ADD_MATCH,
        payload: newMatches
    }
}

export function updateGameTotal(games){
    let gameTotal = games + 1;

    return {
        type: types.UPDATE_GAME_TOTAL,
        payload: gameTotal
    }
}

export function updateGameStatus(newGame){
    let gameStatus = !newGame;

    return {
        type: types.UPDATE_GAME_STATUS,
        payload: gameStatus
    }
}

export function toggleMatchKey(matchKey){
    let toggledKey = !matchKey;

    return {
        type: types.TOGGLE_MATCH_KEY,
        payload: toggledKey
    }
}

export function updateMessage(message){
    let newMessage = gameMessages[message];
    // console.log("new Message in actions: ", newMessage);
    console.log("message sent to function in actions: ", message);
    // console.log("game Message Obj in function: ", gameMessages);

    return {
        type: types.UPDATE_MODAL_MESSAGE,
        payload: newMessage
    }
}