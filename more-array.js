const numbers = [12, 44, 66, 34, 67, 45];

const half = numbers.map(n => n / 2)
const third = numbers.map(n => n / 5)

// console.log(half)

const friends = ['tom kopper', 'tom cruss', 'tom hanks', 'tom soliaman'];

const firstLetters = friends.map(friend => friend[0] )
// const firstLetters = friends.map(friend => friend.length )
// const firstLetters = friends.map(friend => friend.length % 2 == 0; )
// console.log(firstLetters);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'i phone', price: 55000},
    {id: 1, name: 'watch', price: 49000},
    {id: 1, name: 'tablet', price: 95000},
];

const items = products.map( product => product.name);

console.log(items)

