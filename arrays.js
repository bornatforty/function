// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function largestNumber(numbers) {
	var largest = 0;
	var numbers = [1,12,4,18,9,7,11,3,101,5,6];
	for(let i=0; i<numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i]
		}
	}
return largest
}

---------------------------
2. Find longest string
---------------------------

function longestString(strings) {
	var longestWord = 0;
	var strings = ['this','is','a','collection','of','words'];
	for(let i=0; i<strings.length; i++) {
		if(strings[i].length > longestWord) {
			longestWord=strings[i]
		}
	}
	return longestWord
	}

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNumbers(numbers) {
	var even = [];
	var numbers = [1,12,4,18,9,7,11,3,101,5,6];
	for (let i=0; i<numbers.length; i++) {
		if (i % 2 === 0) {
			even.push(numbers[i]);
		}
	}
	return even
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNumbers(numbers) {
	var odd = [];
	var numbers = [1,12,4,18,9,7,11,3,101,5,6];
	for (let i=0; i<numbers.length; i++) {
		if (i % 2 !== 0) {
			odd.push(numbers[i]);
		}
	}
	return odd
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function hasIs(strings) {
	var strings = ['this','is','a','collection','of','words'];
	var isWords = []
	for (let i=0; i<strings.length; i++) {
		if(strings[i] === 'i' && strings[i++] === 's') {
			isWords = strings[i]
		}
	}
	return isWords
}


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function joinArrays(arr1, arr2) {
	const newArray = arr1.concat(arr2)
	return newArray
}



---------------------------
6. Use the Instructors array and find all that teach JavaScript, 
   then sort them alphabetically
---------------------------

function aToZJavaScript(instructors) {
	let jsInstructors = '';
	for (let i=0; i<instructors.length; i++) {
		if (instructors[i].includes('JavaScript')) {
			jsInstructors+=instructors[i]
		}
	} 
	let sortedInstructors = '';
	jsInstructors.sort(function(a,b) {
		if(a.firstname < b.firstname) return -1;
		if(a.firstname > b.firstname) return 1;
		return 0;
	})
	return sortedInstructors
}
