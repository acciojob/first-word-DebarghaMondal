function firstWord(s) {
// your code here
if (s === '') {
return '';

}

let firstWord = s.trim().split(" ");
return firstWord[0];
} 
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));