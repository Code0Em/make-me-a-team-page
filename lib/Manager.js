// Task 5: Imports Employee class.
const Employee = require("./employee");

// Task 4: Creates Manager class (subclass of Employee).
class Manager extends Employee {
    // Constructor method creates properties (values will be passed when an instance of the object is created).
    constructor(name, id, email, officeNumber) {
        // Accesses superclass constructor (including name, id and email properties).
        super(name, id, email)
        // officeNumber property.
        this.officeNumber = officeNumber;
    }
    // Return officeNumber property.
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Returns "Manager".
    getRole() {
        return 'Manager';
    }

}

// Task 5: Exports Manager class (so that we can import it into main js file).
module.exports = Manager;
