// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------
function max(num1, num2) {
	if (num1 > num2) {
		return num1
	} else {return num2}
}

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1
	} else if (num1 > num2 && num1 < num3) {
		return num3
	} else {return num2}
}

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------
function isVowel(str) {
	return (str == 'A' || str == 'a' || str == 'E' || str == 'e' || str == 'I' || str == 'i' || str == 'O' || str == 'o' || str == 'U' || str == 'u')
	}
function isVowel(str) {
	return (/^[aeiou]$/i).test(str);
}


console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function translate() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(str) {
	if (typeof str !== 'string') {
		return str + ''
	}
	let newStr = ''
	for (let i=0; i<str.length; i++) {
		if(isVowel(str.charAt(i))) {
			newStr+=str.charAt(i)
		} else {
			newStr+=str.charAt(i)+ 'o' + str[i]
		}
	}
	return newStr

}


console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------
function reverse(str) {
	return str.split('').reverse().join('');
}

function reverse(str) {
	var reverseString = "";
	for (let i=str.length -1; i>=0; i--) {
		reverseString += str[i];
	}
	return reverseString;
}

console.assert(reverse("books") === "skoob")
 console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")