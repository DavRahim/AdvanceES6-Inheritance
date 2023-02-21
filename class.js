// es6 e class ke syntactic sugar bole,

// syntactic sugar,
class Instructor{
    name;
    designation = 'web developer'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location
    
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const amir = new Instructor('amir', 'mumbi')

console.log(amir)
amir.startSupportSession('9: 00');
amir.createQuiz(60);

const soliman = new Instructor('soliman', 'dhaka');
console.log(soliman);