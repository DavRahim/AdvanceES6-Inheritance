const student = {
    name: 'kolim uddin',
    class: 10,
    age: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

// jhokhon ami janbo je object er bitore ki ki propertyt ase tokhon nami dot notation use korbo;

//  

// dot notation
const marks = student.marks;
const math = student.marks.math;


// bracket notation
const chemistry = student['marks']['chemistry']

const subject = 'math';
const subjectMarks = student.marks[subject];

console.log(subjectMarks)