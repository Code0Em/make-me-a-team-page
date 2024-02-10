// Task 4: Creates Employee class (superclass)
class Employee {
    // Constructor method creates properties (values will be passed when an instance of the object is created).
    constructor(name, id, email) {
        // Name, id and email properties (values not yet set).
        this.name = name;
        this.id = id;
        this.email = email
    }
    // Returns value of name property.
    getName() {
        return this.name;
    }
    // Returns value of id property.
    getId() {
        return this.id;
    }
    // Returns value of email property.
    getEmail() {
        return this.email;
    }
    // Returns "Employee".
    getRole() {
        return 'Employee';
    }
};

// TASK 5: Exports Employee class (so that we can import it into other class files).
module.exports = Employee;
