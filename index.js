// **TASKS**

// *TASK 1: Create userPrompts.js and within this create arrays to hold the different prompts for the user to answer (each relating to different role) (answers will then be used to used to populate classes).
// *TASK 2: Export/ import userPrompts.js to index.js (i.e. main js file).
// *TASK 3: Create functions to return user's answers to prompts, using inquirer.prompt().
// *TASK 4: Create classes for different roles; including superclass (employee) and three subclasses (manager, engineer and intern).
// *TASK 5: Export/ import employee.js to manager.js, engineer.js and intern.js (to create subclasses), and export/ import those to index.js (to creates objects).
// *TASK 6: Create function to create an output folder (for the generated html file), using fs.mkdirSync(). Add try/catch blocks for error handling and add async to function (so it returns a promise and then we can use await on function call).
// *TASK 7: Import Node's util module and then create function to write the html file, using fs.writeFile(). Wrap this in util.promisify() to convert fs.writeFile() (which is based on callback) into a promise-based function.
// *TASK 8: Create function which calls render(), newFolder() and writeFileAsync() functions.
// *TASK 9: Create empty array (this will "hold" team member objects) (from TASK 10).
// *TASK 10: Create function to initialise the application. Add async to function (so returns promise) and try/catch blocks (to handle errors). Within try block: call promptManager function (from TASK 3) with await (so this waits for promise to be resolved before continuing), then create a manager object (passing the returned values) and then push this up to empty array; within a while loop, do the same but with engineer and intern objects; then call createPage function (passing the array); and finally log confirmation message. Within catch block: write error message to console.


// **IMPORTS**
// Imports Node's path module
const path = require("path");
// Imports Node's file system module
const fs = require("fs");
// Task 7: Imports Node's util module
const util = require('util');
// Imports nmp Inquirer module
const inquirer = require("inquirer");
// Task 2: Imports from userPrompts.js (for user prompts)
const userPrompts = require("./src/userPrompts");
// Imports from manager.js (for manager class)
const Manager = require("./lib/manager.js");
// Imports from engineer.js (for engineer class)
const Engineer = require("./lib/engineer.js");
// Imports from intern.js (for intern class)
const Intern = require("./lib/intern.js");
// Imports from pageTemplate.js (for html file)
const render = require("./src/pageTemplate.js");

// **GLOBAL VARIABLES**
// *CREDIT: Coder’s understanding of Node.js path module developed thanks to Xpert Learning Assistant’s (2024) answer to “explain this: OUTPUT_DIR = path.resolve(__dirname, "output"); const outputPath = path.join(OUTPUT_DIR, "team.html");”.
// Gets absolute path to output directory, using path.resolve().
const OUTPUT_DIR = path.resolve(__dirname, "output");
// Combines OUTPUT_DIR with a file called "team.html", using path.join() (i.e. stores the path to the "team.html" file within the "output" directory.)
const outputPath = path.join(OUTPUT_DIR, "team.html");

// **FUNCTIONS**
// Task 3: Prompts user to answer prompts from userPrompts' arrays and then returns promises (which resolves with objects containing the user's answers) (to be used to populate the classes).
const promptManager = () => {
    return inquirer.prompt(managerPrompts)
};


const promptEmployee = () => {
    return inquirer.prompt(employeePrompts)
};


const promptEngineer = () => {
    return inquirer.prompt(engineerPrompts)
};


const promptIntern = () => {
    return inquirer.prompt(internPrompts)
};
const promptAdd = () => {
    return inquirer.prompt(addPrompt)
};

// Task 6: Creates output folder (for generated html file).
// *CREDIT: Function adapted from Node.js (no date) Working with folders in Node.js (https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs).
const newFolder = async () => {
    // Sets the name (and location) of the folder.
    const folderName = OUTPUT_DIR;
    try {
        // If a folder with this name doesn't (already) exist, run this codeblock.
        if (!fs.existsSync(folderName)) {
            // Create a new folder with this name (and location).
            fs.mkdirSync(folderName);
        }
        // If an error is thrown in try block, "catch it" and run this code:
    } catch (err) {
        // Write the error to the console.
        console.error(err);
    }
};

// Task 7: Writes html file, util.promisify() converts fs.writeFile() into promise-based function.
const writeFileAsync = util.promisify(fs.writeFile);





// TODO: Write Code to gather information about the development team members, and render the HTML file.

