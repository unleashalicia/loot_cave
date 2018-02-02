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