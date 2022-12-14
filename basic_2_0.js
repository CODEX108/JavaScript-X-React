//Higher Order function - they take functions as input === map(),reduce(),filter()

//Array methods
//maps - loops and returns array
const doubleMap = (numbers) => {
  return numbers.map(i => i * 2);
}

console.log(doubleMap([1,2,3,4]))
//===================================================================================
//Filters ->The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that 
//pass the test implemented by the provided function.
const filters = (numbers, greaterThan) => {
  return numbers.filter(i => i > 3);
}
console.log(filters([1, 2, 3, 4, 5, 6]))

//===================================================================================
//creating array of objects
 const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber๐๐พ๐', netWorth: 10 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]

 //filtering out actors with netW > 10
let result = actors.filter(actor => actor.netWorth > 10)
console.log(result)
//with the help of the filtered result , extracting the names from the objects using map
let names = result.map(actor => actor.name).join(', ')

//reduce() -> use case for sum
console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))
 playground.innerHTML = `<h1>${names}</h1>`
 
 //CALLBACK FUNCTIONS
 //=======================================================================================
 setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});

 //===================================================================================
 //DOM - Data object manipulation
 //===================================================================================
//OOPS
const circle = {
  //properties in JS
  radius:1,
  location:{
    x:1,
    y:1
  },
//methods in JS
  draw: function(){
    console.log('draw');
  }
};

//access the members using dot notation
circle.draw();

//factory function
function createCircle(radius){
return {
  //properties in JS
  radius,
  draw: function(){
    console.log(`draw a circle with radius ${radius}`);
  }
  }

};

const circle = createCircle(1);
circle.draw();

//Constructor function
function Circle (radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}

const another = new Circle(1);
