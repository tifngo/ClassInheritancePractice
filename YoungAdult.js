import Student from './Student.js';

export default class YoungAdult extends Student {
    //creates instance of YoungAdult with Student properties plus isHungry, a boolean value
    constructor(name, age, degrees, isHungry = true) {
        super(name, age, degrees);
        this.isHungry = isHungry;
    }

    //feeds the YoungAdult.  If they are hungry, changes isHungry to false, if they are not hungry, prints message to console.
    eat() {
        if(this.isHungry) {
            this.isHungry = false;
        } else {
            console.log('Oh no I think I ate too much')
        }
    }
}