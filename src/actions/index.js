import types from './types';
// import cardData from '../helpers/card_data';

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
    console.log(goldTotal);
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