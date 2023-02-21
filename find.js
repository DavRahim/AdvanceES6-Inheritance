
const numbers = [89, 44, 12, 45, 55, 34, 667];

const fives = numbers.find(num => num % 5 === 0);

const fivesAll = numbers.filter(num => num % 5 === 0 )

console.log(fivesAll)//array
console.log(fives)// only one value


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'i phone', price: 55000},
    {id: 1, name: 'watch', price: 4000},
    {id: 1, name: 'tablet', price: 95000},
];


const cheap = products.find(product => product.price < 40000);
console.log(cheap)