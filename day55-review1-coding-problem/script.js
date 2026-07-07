// problem 1: Reverse a String
// given string: entri
// reversed string: irtne
function reverseString(str){
    const output = str.split("").reverse().join("");
    console.log(output);
};

reverseString("entri");

// problem 2: Palindrome program
// input 1: malayalam -> true
// input 2: hello -> false
function palindrome(str){
    const reversed = str.split("").reverse().join("");
    console.log(str === reversed);
}

palindrome("malayalam");
palindrome("hello");