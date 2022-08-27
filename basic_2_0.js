//Array methods
//maps - loops and returns array
const doubleMap = (numbers) => {
  return numbers.map(i => i * 2);
}

console.log(doubleMap([1,2,3,4]))

//Filters ->The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that 
//pass the test implemented by the provided function.
const filters = (numbers, greaterThan) => {
  return numbers.filter(i => i > 3);
}

console.log(filters([1, 2, 3, 4, 5, 6]))

const actors = [
  {name: 'johnny', networth:2000000},
  {name: 'amber' , networth:10},
  {name: 'leonardo',networth:1000000}
]

let result = (actors.filter(actor => actor.networth>10))
