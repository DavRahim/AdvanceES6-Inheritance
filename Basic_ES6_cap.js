//1. let vs const;

// const ke re assinge kora jabe na;

// let ke ressign kora jai na;


//2. default parameter;

function calculatorSalary(salary, tax = 0.25, bonus = 0){

    const remaining = salary * tax;
    const total = remaining + bonus 
    return total
};

//3.template string;

const element = `
   <div>
     <h3>name: Abdur Rahim</h3>
     <p>Address:${calculatorSalary(10000, 20)}</p>
     <p>Salary: 30000</p>
   </div>
`

// 4. arrow Function;

const doubleIt = x => x * 2;
const calculatorSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//5. spread opratoer;

const ages = [11, 44, 66, 77, 44];

const newAges = [...ages, 55, 77,];

//6. destructuring;

const {x, y, z, ...u}= {x: 45, y: 12, z: 33, name: 'shakib Al Hassan', salary: 44000,}

const [a, g, k, ...l] = [12, 40, 60, 40, 60]
