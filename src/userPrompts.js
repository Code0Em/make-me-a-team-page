// TASK 1: An array containing prompts about the MANAGER for the user to answer (utilising inquirer package).
managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: `Enter the Team Manager's name:`,
        // validate: (resp) => {
        //     if (resp.length < 4 || !resp.match(/[a-z]/i)) {
        //         return 'Please enter the full name of the Team Manager.';
        //     }
        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Team Manager's ID (numbers only):`,
        // validate: (resp) => {
        //     if (isNaN(resp)) {
        //         return 'Please enter a valid ID number.';
        //     }
        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Team Manager's email address:`,
        // validate: (resp) => {
        //     const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        //     if (!regex.test(resp)) {
        //         return 'Please enter a valid email.';
        //     }
        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `Enter the Team Manager's office number:`,
        // validate: (resp) => {
        //     if (isNaN(resp) || resp.length < 9) {
        //         return 'Please enter a valid phone number.';
        //     }
        //     return true;
        // },
    },
];

// TASK 1: An array containing prompts about the EMPLOYEE.
employeePrompts = [
    {
        type: 'input',
        name: 'name',
        message: `Enter the employee's name:`,
        // validate: (resp) => {
        //     if (resp.length < 4 || !resp.match(/[a-z]/i)) {
        //         return 'Please enter the full name of the employee.';
        //     }
        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the employee's ID (numbers only):`,
        // validate: (resp) => {
        //     if (isNaN(resp)) {
        //         return 'Please enter a valid ID number.';
        //     }
        //     return true;
        // }
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the employee's email address:`,
        // validate: (resp) => {
        //     const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        //     if (!regex.test(resp)) {
        //         return 'Please enter a valid email.';
        //     }
        //     return true;
        // }
    },
];

// TASK 1: An array containing prompts about the ENGINEER.
engineerPrompts = [
    {
        type: 'input',
        name: 'github',
        message: `As you're adding an engineer, we also need their GitHib username.
  Enter the engineer's GitHub username:`,
        validate: (resp) => {
            if (!resp.length) {
                return 'Please provide their GitHub username.';
            }
            return true;
        }
    },
];

// TASK 1: An array containing prompts about the INTERN.
internPrompts = [
    {
        type: 'input',
        name: 'school',
        message: `As you're adding an intern, we also need their university.
  Enter the intern's university:`,
        validate: (resp) => {
            if (!resp.length) {
                return 'Please provide their university.';
            }
            return true;
        }
    },
];

// TASK 1: An array containing prompts, asking the user what they'd like to do next.
addPrompt = [
    {
        type: 'list',
        name: 'add',
        message: `Thanks for providing those details. Which employee do you want to add next?`,
        choices: ['Engineer', 'Intern', `I'm finished, generate the Team Page now`],
    },
];

// TASK 2: Exports the arrays (so that we can import them into main js file).
module.exports = userPrompts;