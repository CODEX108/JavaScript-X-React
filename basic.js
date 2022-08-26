
 console.log('namaste doston!')
 console.log('Codex 108')

 // variables (var, const, let)
 let name = 'Peter Parker'
 console.log(name)

 let sentence = 'how are you doing today, nice to see you, hope you have a great day!'

// operators
 fruit = prompt('what is your favorite fruit?')

 console.log(fruit)

// * / ** + -

 food = Number(prompt('how much was the food?'))
 tipPercentage = Number(prompt('tip %?')) / 100
 tipAmount = food * tipPercentage
 total = food + tipAmount

 console.log('tip amount', tipAmount)
 console.log('total', total)
 alert(tipAmount)

// user input

/* data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
*/

//Shitty weather app
let weather = prompt('What is the weather like?')
if(weather == 'rain'){
  console.log('Grab your Umbrella ☂')
}
else{
  console.log('Wear your sunglasses 😎')
}

// conditional operators
// ==, ===, >, <, <=, >=, !=, !==

// Functions
// this is a function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console
function sayMyName() {
  console.log('Manjiri')
}

 sayMyName()

// this is a function called "sayMyName2"
// it has 1 argument called `name`
// does: it logs out your name to console
function sayMyName2(name) {
  console.log(name)
}

function sayMyName (name){
  
  /*Template literals provide an easy way 
  to incorporate variables into strings.
  Interpolitian is an efficient way of 
  concatenation
  template literals ``
  */
  greet = `hi {name},Noce to meet you!`
  console.log(greet)
  console.log('Namaste!')
}

//calling a function
sayMyName('Jonny Depp')

function Birthday(gift,wishes){
   
  console.log(gift)
  return `This is your return gift 📦 and my wishes `
}

let ret = Birthday('Hey buddy this is your gift 🎁',3)
console.log(ret)

 function sum (n1,n2){
  return n1+n2;   
 }

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip/100;
  const tipAmont = food * tipPercentage;
  const total = sum(food , tipPercentage);
  return total;
}

console.log(calculateFoodTotal(2000,5))



// ES6
// Arrow Functions =>
// arrow function with explicit return
// const sumArrow = (a, b) => {
//   return a + b
// }

 //arrow function with implicit return
 //IMPORTANT: For implicit return, remove curly braces
 const sumArrow2 = (a, b) => a + b
 console.log(sumArrow2(10, 50))

//=====================================================================================

// Arrays
const groceries = ['🍍', '🍎', '🍊', '🍐']
console.log(groceries)

//grab the 2nd index
console.log(groceries[2])

//Array methods
groceries.push('🍪')
console.log(groceries)

groceries.push('🍛')
console.log(groceries)

//popping an element
groceries.pop(groceries[5]);
console.log(groceries)

//Array Slice
//start from 0 INCLUSIVE and UP to 6 [0, 1, 2, 3, 4, 5]
 console.log('slicing operation -->',groceries.slice(0, 6))

console.log(groceries.slice(1, 4))
//array methods (slice, push, indexOf, length)
console.log(groceries.indexOf('🍐'))
console.log(groceries.length)

//Objects -> key:value pairs
const person = {
  name: 'Leonardo',
  shirt: 'white'
}

//dot notation
console.log (person.name)
console.log (person.shirt)

//bracket notation
console.log(person['name'])
console.log(person['shirt'])

//assign object 
person.phone = '1-222-333-4444'
person['profession'] = 'actor'

console.log(person)
const person2= {
  name : 'Cris Evans',
  shirt : 'black',
  aka : 'Captain America'
}

console.log(person2.name)
console.log(person2['shirt'])

const introducer = (name, shirt, aka) => {
  const insaan = {
    name: name,
    shirt: shirt,
    aka: aka,
    assets : 1000000,
    liabilities : 50000,
    netWorth : function (){
      return this.assets-this.liabilities;
      
    }
    
  }

  const intro = `Hi my name is ${insaan.name} and the color of my 
 shirt is ${shirt} ,I am also known as ${insaan.aka} and my net worth is $${insaan.netWorth()} USD`;

  return intro;
}

console.log(introducer('Leorardo','grey','Jack'))

console.log(introducer('Digvijay', 'Navy Blue', 'DJ'));


let fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

for (let i=0; i < fruits.length; i++) {
  console.log(fruits[i])
}
//========================================
for (const fruit of fruits) {
  console.log(fruit)
}
//==========================================
const numbers = [1, 2, 3, 4, 5, 6]
// for (let i=0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

const double = (numbers) => {
  let result = []
  for (const number of numbers) {
    result.push(number * 2)
  }

  return result
}
//=========================================

const howManyLetters = (phrase) => {
  // counter
  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }

  return { result }
}

const phrase = prompt('write your phrase')

console.log(howManyLetters(phrase))

//=========================================

const sumArray = (numbers)=> {
  let result = 0;
  for (const i of numbers){
    result += i;
  }
    return result;
  
}

numbers = [2,1,3,4,5,10]
console.log(sumArray(numbers))

// for of => gives the actual element present in the array
// for in => gives the index at which the respective element is present

//COUNT HTE FREQUENCY OF LETTERS
const freq={}
const letterFrequency = (phrase)=>{
  for (let letter of phrase){
    if(letter in freq){
      freq[letter] += 1;
    }
    else{
      freq[letter] = 1;
    }
  }
  return freq
}

console.log(letterFrequency('haha'))

//============= 2nd approach ====================

// function getFrequency(string) {
//     var freq = {};
//     for (var i=0; i<string.length;i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }

//     return freq;
// };


//============= Counting word frequency ============================
let freqL = {};
const wordFreq = (phrase) => {
  let array = phrase.split(' ');
  for (let str of array) {
    if (str in freqL) {
      freqL[str] += 1;
    }
    else {
      freqL[str] = 1;
    }
  }
  return freqL
}

userInput = prompt('Enter the sentence')

console.log(wordFreq(userInput))
