

export function shuffleArray(arr){
    for(let index=0; index<arr.length; index++){
        const randIndex = Math.floor(Math.random() * arr.length);
        const temp = arr[index];
        arr[index] = arr[randIndex];
        arr[randIndex] = temp;
    }

    return arr;
}