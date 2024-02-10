// **TASKS**

// *TASK 1: Create userPrompts.js and within this create arrays to hold the different prompts for the user to answer (each relating to different role) (answers will then be used to used to generate contents of html).
// *TASK 2: Export/ import userPrompts.js to index.js (i.e. main js file).
// *TASK 3: Create functions to return user's answers to prompts, using inquirer.prompt().

// **IMPORTS**
// Imports Node's path module
const path = require("path");
// Imports Node's file system module
const fs = require("fs");
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
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// **FUNCTIONS**
// Task 3: Prompts user to answer prompts from userPrompts' arrays and then returns promises (which resolves with objects containing the user's answers) (to be used to generate the classes).
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




// TODO: Write Code to gather information about the development team members, and render the HTML file.

