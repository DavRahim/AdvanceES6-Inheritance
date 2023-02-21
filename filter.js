const numbers = [12, 4, 6, 44, 66, 4, 3, 2, 4];
const bigNum = numbers.filter(n => n > 3);
const tiny = numbers.filter(n => n < 10);

const even = numbers.filter(n => n % 2 === 0)
console.log(tiny)
console.log(bigNum)


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'i phone', price: 55000},
    {id: 1, name: 'watch', price: 49000},
    {id: 1, name: 'tablet', price: 950000},
];

// const expensive = products.filter( price => price.price > 50000 )
const expensive = products.filter( price => price.price > 100 ) // 100 taka beshi jara ace tara
const expensive2 = products.filter( price => price.price < 100 ) // 100 taka kom jara ace tara
console.log(expensive)

