// Task 5: Imports Employee class.
const Employee = require("./employee");

// Task 4: Creates Engineer class (subclass of Employee).
class Engineer extends Employee {
    // Constructor method creates properties (values will be passed when an instance of the object is created).
    constructor(name, id, email, github) {
        // Accesses superclass constructor (including name, id and email properties).
        super(name, id, email)
        // github property
        this.github = github;
    }
    // Returns value of github property.
    getGithub() {
        return this.github;
    }
    // Returns "Engineer".
    getRole() {
        return 'Engineer';
    }
};

// Task 5: Exports Engineer class (so that we can import it into main js file).
module.exports = Engineer;
