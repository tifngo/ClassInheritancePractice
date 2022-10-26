export default class Student {
    //creates instance of Student with properties name, age, and number of degrees (degrees can be associate and above)
    constructor(name, age, degrees) {
        this.name = name;
        this.age = age;
        this.degrees = degrees;
    }

    //increments degrees by 1 (degrees can be associate and above)
    addDegree() {
        this.degrees++;
    }
}