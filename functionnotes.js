// function declaration
function myFunction() {

}
//function expression. function defined within js expression. 
//allows you to run function immediately by adding two parentheses after brackets.
var myFunction = function() {

}

//for example
function myFunction() {
	console.log('Hello World')
} //will return undefined. and if you add parentheses after the brackets you will get error.

var myFunction = function() {
	console.log('Hello World')
}()
//will return hello world

//IIFE immediately invoked function expression
(function () {

}())
//scopes. function scope and global scope.

//for example
var foo = "bar"
//global variable. bad because if someone else uses foo for a variable it could cause problems.

function foo() {
	var bar = 'bat'
}
//function scope. this variable can only be used within the function. not gonna pollute the global scope

(function() {
	var foo = 'bar'
}())
//is wrapped in a function expression and does not pollute the global scope.

function foo() {
	var bar = 'bat'

	function asdf() {
		console.log(bar)
	}
	asdf() // bat
}
//child functions have access to parent functions' scope.

//closure. link between a parent functions' variables and a child function that has just been called
function foo() {
	var name = 'mike'
	function bar() {
		console.log(name)
	}
}
foo()

//later...
bar() //still needs access to the name variable in order to be called.

//variable hoisting. a variable near the bottom of an expression can be accessed by the top lines of the function
//if bar is needed somewhere at the top of the function it can be accessed
function foo() {
	//1000 lines of code
	var bar = 'bat'

}
//let and const are block scoped. not function scoped. they work on anything within the brackets
//let and const are not hoisted. not declared until they are used.
for (let i) {

}
//const = constant. often written in all-caps. 
const MY_CONSTANT = 'asdf'
//if you try to redefine MY_CONSTANT = 'dfsa' you will get an error. unless you .push onto something.

//arrays
var arr = [1,2,3,4,5,6,7]
arr.length // 7
for (let i = 0; i < arr.length; i += 1) {
	//always use < not <= because of the difference between the length and the order numbering systems.
	console.log(arr[i])
}

function arrsum(arr) {
	var sum = 0

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i]
	}
	return sum
}
//this will return the sum of all values in an array. the variable "sum" is where you will store your total and for each step
//in the function it will take the store and add the value of i in the array. until you reach the end of the loop.

function 
//declare a function
function sum()
//need parentheses for your parameters
function sum(num1, num2) {}
//use parameters as variables inside of the function
function sum(num1, num2) {
	return num1 + num2
	//must always return something in a function
}
function sum(num1, num2) {
	return num1 + num2
}
var mysum = sum(1,2)

//function declaration - save for later
//declare variable mysum
//set the variable = 
//sum()
//	num1 = 1
//	num2 = 2
//
//return 1 + 2
//set the variable  = 3

//built in js math functions
Math (math.avg, math.min, ...)

//callback functions. you can use a function as a parameter in a function
function foo() {
	return 'foo'

}
function bar(callback) {
	console.log(callback)

}
foo() // 'foo'
foo // function foo() {return 'foo'} . foo without parentheses is just a reference to the function.
//useful for passing the foo function into other functions or wherever you need.
bar(foo()) // 'foo'
bar(foo) // function foo() {return 'foo'}

//array functional methods
var arr = [12,3,4,5,6,7,7]

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])
}

arr.forEach(function(item) {
	console.log(item)
}) //takes function as parameter. these two are functionally equivalent

function forEach(arr, fn) //two parameters. the array and the function
function forEach(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		fn(arr[i])
	}
}
forEach(arr, function(item)) {
	console.log(item)
} 
//step 1 create array
//step 2 create function forEach
//step 3 call forEach function. will pass the array and pass the callback function
//the forEach function is called once, but the forEach function calls the fn function many times as you go through the array.

//homework question 1
//write a function called 'sum' that takes two parameters and returns the sum of those 2 numbers
console.assert(sum(2,4) === 6)
console.assert(sum(45, 23) === 68)
console.assert(sum(-2, -57) === -59)
function sum(num1, num2) {
	return num1 + num2
}

//make sure you comment out all other assertions except for the problem you are checking so you don't get errors.
//if you run node excercises-1.js and you get no errors and nothing, that means everything is working fine.