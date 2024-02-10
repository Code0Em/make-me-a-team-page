// Task 5: Imports Employee class.
const Employee = require("./employee");

// Task 4: Creates Intern class (subclass of Employee).
class Intern extends Employee {
    // Constructor method creates properties (values will be passed when an instance of the object is created).
    constructor(name, id, email, school) {
        // Accesses superclass constructor (including name, id and email properties).
        super(name, id, email)
        // school property.
        this.school = school;
    }
    // Returns value of school property.
    getSchool() {
        return this.school;
    }
    // Returns "Intern".
    getRole() {
        return 'Intern';
    }
};

// Task 5: Exports Intern class (so that we can import it into main js file).
module.exports = Intern;
