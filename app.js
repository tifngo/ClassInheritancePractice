import Student from './Student.js';
import Graduate from './Graduate.js';
import YoungAdult from './YoungAdult.js';

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instances of each class
let student = new Student('Euthyphro', 35, 0);
let graduate = new Graduate('Zeus', 28, 2, ['Philosophy', 'Sociology']);
let youngAdult = new YoungAdult('Persius', 20, 0, true);

//log each instance
console.log(student);
console.log(graduate);
console.log(youngAdult);

//call the method from the parent class to ensure it works as expected
student.addDegree();
graduate.addDegree();
youngAdult.addDegree();

//log the objects after calling .addMajor() to verify it worked as intended
console.log(student);
console.log(graduate);
console.log(youngAdult);

//call .eat()
youngAdult.eat();

//check that .eat() when isHungry == true works as expected
console.log(youngAdult);

//check that .eat() when isHungry == false works as expected
youngAdult.eat();