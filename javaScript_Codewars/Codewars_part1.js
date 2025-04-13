/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(string){
  const split = string.split('')
  const reversed = split.reverse()
  const joined =reversed.join('')
  return joined
}


/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  if(number%2 === 0) {
    console.log("Even");
  }else {
    console.log("Odd");
  }
}


/*
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/


function positiveSum(arr) {
  
  const positive_numbers = arr.filter(num=> num>0)
  const sum = positive_numbers.reduce((total, current)=> total + current, 0)

  return sum
  
}

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord( bool ){
  return bool? "Yes": "No"
}


/*Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
Examples:
1: -1
14: -14
-34: 34
*/

function opposite(number) {
  return number * (-1)
}


/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/


numbers = 9119

const string = numbers.toString()
const split = string.split('')
const squared = split.map(num=>num*num)
const squarednumbers = squared.join('')
const integerNum = Number(squarednumbers)
// console.log(integerNum)


function squareDigits(numbers){
  const string = numbers.toString()
  const split = string.split('')
  const squared = split.map(num=>num*num)
  const squarednumbers = squared.join('')
  return Number(squarednumbers);
}


/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/


numbers = "1 2 3 4 5"
const newNum = numbers.split("")

const maxNum = newNum.max()

console.log(maxNum)




// const intNum = newNum.map(num => Number(num))
// const result = ""

// const sorted = 














