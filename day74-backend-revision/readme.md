Bubble Sort Algorithm

const fruits = ["apple", "cherry", "banana"];

function bubbleSort(arr){

    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                // element swapping
                let temp = arr[j];
                arr[j] = arr[j+1];
                // cherry, apple
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(fruits));