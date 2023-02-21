class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name
        this.location = location
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}


class Instructor extends TeamMember{
    designation = 'web developer'
    team = 'web team'
    constructor(name, location){
        super(name, location)
        // this.name = name
        // this.location = location
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
   
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}


class Developer extends TeamMember{
    // name;
    designation = 'web developer'
    team = 'web team'
    tech;
    // location;
    constructor(name, location, tach){
        super(name, location)
        // this.name = name
        // this.location = location
         this.tach = tach
    }
    developFeature(feature){
        console.log(`please develop the  ${feature}`)
    }
    release(version){
        console.log(`please create quiz for module ${version}`)
    }
   
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}




class JobPlacement extends TeamMember{
    // name;
    designation = 'Job placement commandos'
    team = 'Job placement'
    region
    // location;
    constructor(name, location, region){
        super(name, location)
        // this.name = name
        // this.location = location
         this.region = region
    }
    provideResume(feature){
        console.log(`please develop the  ${feature}`)
    }
    prepareStudent(version){
        console.log(`please create quiz for module ${version}`)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}

const alia = new Developer('ALiya VAta', 'Dhaka', 'React');
console.log(alia)
alia.provideFeedback();


const bipasha = new JobPlacement('Bipasha', 'Kolikata', 'India');
console.log(bipasha);
bipasha.provideFeedback();

const Rahim = new Developer('Abdur Rahim', 'Dhaka', 'JavaScript');
Rahim.provideFeedback()
console.log(Rahim);
const abRahim = new Instructor('Abdur Rahim', 'Dhaka', 'JavaScript');
abRahim.provideFeedback()
console.log(abRahim);
