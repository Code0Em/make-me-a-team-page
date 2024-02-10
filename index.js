// **TASKS**

// *TASK 1: Create userPrompts.js and within this create arrays to hold the different prompts for the user to answer (each relating to different role) (answers will then be used to used to generate contents of html).
// *TASK 2: Export/ import userPrompts.js to index.js (i.e. main js file).

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



// TODO: Write Code to gather information about the development team members, and render the HTML file.

