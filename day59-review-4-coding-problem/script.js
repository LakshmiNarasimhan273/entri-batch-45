// problem 1: Finding the duplicate element in an array
// input: array = [1, 2, 3, 4, 2, 4, 5, 6]
// faq: Amazon & Zoho

// alogrithm
    // step: array clean(sort) slice
    // using for loop to determine the duplicate elements

function duplicate_finding(arr){
    let sorted_array = arr.sort().slice();
    let duplicate_elements = [];
    
    // two pointer approach
    for(let i = 0; i < sorted_array.length - 1; i++){
        if(sorted_array[i + 1] === sorted_array[i]){
            duplicate_elements.push(sorted_array[i])
        }
    }
    console.log(duplicate_elements);
    
}

let array = [1, 2, 3, 4, 2, 4, 5, 6];

duplicate_finding(array);


// problem 2: Find the indices of two number in an array
// input1: array = [2, 7, 11, 13]
// input2: target = 9
// output: [0, 1]
function index_finding(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                console.log(i, j)
            }
        }
    }
}

let array1 = [2, 7, 11, 13];
let target = 18;

index_finding(array1, target);





