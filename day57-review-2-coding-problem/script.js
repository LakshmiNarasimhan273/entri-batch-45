// problem 1: string based
// Find and Count the VOWELS in an given String
// JavaScript is Awesome
// vowels = AEIOU
// Algorithm
// 1 - converting the str into lowercase
// 2 - variable creation for storing our vowels
// 3 - loop through each characters
// 4 - vowels check

let str = "JavaScript is Awesome";

str = str.toLowerCase();
let vowels = [];

for(let char of str){
    if("aeiou".includes(char)){
        vowels.push(char);
    }
}

console.log(vowels);
console.log(vowels.length);


// problem 2: Array based problem
// Adding all elements from an array's
// array1 = [5, 3, 2]; 10
// array2 = [7, 2, 1]; 10 - 20
// Algorithm
// 1 - merging the array
// 2 - using reduce method to add all the elements
let array1 = [5, 3, 2];
let array2 = [7, 2, 1];

function addingArray(arr1, arr2){
    let mergedArray = [...arr1, ...arr2];
    
    let output = mergedArray.reduce((a, b) => {
            return a + b;
    });
    console.log("Problem 2 result:",output);
}

addingArray(array1, array2);



// 5 + 3 = 8
// 8 + 2 = 10
// 10 + 7 = 17
// 17 + 2 = 19
// 19 + 1 = 20