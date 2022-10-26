import Student from './Student.js';

export default class Graduate extends Student {
    //creates instance of Graduate with Student properites plus undergradDegree, an array of strings
    constructor(name, age, degrees, undergradDegree) {
        super(name, age, degrees);
        this.undergradDegree = undergradDegree;
    }
}