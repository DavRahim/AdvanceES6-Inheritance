const numbers = [2, 5, 6, 33, 55, 66]
// const output = [];
// for(const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled)
// }
// console.log(output);

function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
     const doubled = number * 2
     output.push(doubled)
     }

     return output;
}



const makeDouble = numbers.map(num => num * 2);
console.log(makeDouble);

const fiveTimes = [5, 6, 7, 3, 66].map(x => x * x);
console.log(fiveTimes)