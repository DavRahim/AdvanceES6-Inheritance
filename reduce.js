
// map, forEach, filter, find, reduce;


const numbers = [500, 33, 53, 65, 78, 43, 76];
// .reduce(accumulatorFunction, initial value,)
// accumulatorFunction use tow parameters
const total = numbers.reduce((previous, current) =>{
    console.log(previous, current)

   return previous + current

}, 0);
console.log(total);


