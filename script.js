function firstWord(s) {
  // your code here  
if (s === '') {
	return '';
}
	
let firstWord = s.split(" ")[0]
return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
