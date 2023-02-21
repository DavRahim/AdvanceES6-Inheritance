//1. optional chaining;
// student.marks?.math

// must
//2.map, filter, find;

//3. optional : forEach, reduce (advance)

//4. class

//5. (optional) inheritance, super;

//6. prototypical Inheritance (must);



const number = [1, 3, 5, 7, 9]
const even = number.map(num => num + 1)
// console.log(even)


const numbers = [33, 50, 79, 90, 78, 30]
const dividet = numbers.filter(num => num % 10 === 0)
// console.log(dividet);

const dividetFid = numbers.find(num => num % 10 ===0)
// console.log(dividetFid);


const numberAll = [1, 9, 17, 22];
const number1 = numberAll.reduce((p,c) => p + c, 0);
// console.log(number1)



const people = [
    {name: 'Menna', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

 let sum = 0

// for(let i = 0; i < people.length; i++){
//    let element = people.length[i];
//    console.log(element)
//    sum += element
// }
// console.log(sum)


const student = {
    name: 'Fredie',
    age: 26
}
// console.log(student.age)

let data = {
   location : [
    {
        latitude: '34.5, 37.5',
        longitude: '98.77, 58.7',
        city: 'Hyderabad',
        country: 'India'
    }
   ]

}
// console.log(data.location[0].city)