const users = [ 
    {id: 1, name: 'abul', job: 'doctor'}
] 

// console.log(users[0].job);

const data = {
    count : 50000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'}
    ]
}

const firstJob = data.data[0].job;
// console.log(data.data[0].name);


const user = {
     id: 50001,
     name: 'Thomas alba edison',
     address: {

        street: { 
            first:  '35/A Mirpur',
            second: 'third floor',
            third: 'right side'
       },
        postOffice: 'Dhaka',
        city: 'Dhaka'
     }
}

const floor = user.address.street.second
//chainng;
const floor1 = user.address.stret?.second
console.log(floor)
