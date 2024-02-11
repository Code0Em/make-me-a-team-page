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
// *TASK 11: Call initApp function (from TASK 8).
// *TASK 12: Update html template (in generateTeam function).

// **IMPORTS**
// Imports Node's path module
const path = require("path");
// Imports Node's file system module
const fs = require("fs");
// Task 7: Imports Node's util module
const util = require('util');
// Imports nmp Inquirer module
const inquirer = require("inquirer");
// Task 2: Imports from userPrompts.js (for user prompts' arrays)
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
// Task 9: Empty array to "hold" team member objects.
const team = [];

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

// Task 8: Calls render, newFolder and writeFileAsync functions.
const createPage = async () => {
    try {
        // Calls render() function, passing through team array as argument (i.e. the objects created from the class templates; of which were populated with values returned from inquirer prompt functions). “Await” pauses execution and waits for render() function to finish before continuing. When it’s finished and returns a value, that value is assigned to the htmlContent variable.
        const htmlContent = render(team);
        // Calls newfolder() function, but waits for this function to finish before continuing.
        await newFolder();
        // Calls writeFileAsync() function, which writes htmlContent to file named "team.html" in "output" folder; but waits for this function to finish before continuing.
        await writeFileAsync(outputPath, htmlContent);
    }
    // If an error is thrown in try block, "catch it" and run this code:
    catch (err) {
        // Writes the error to the console.
        console.error(err);
    }
};

// Task 10: Initialises the application.
const initApp = async () => {
    try {
        // Calls promptManager() function, but waits for this function to finish before continuing. Assigns returned value to managerAnswers.
        const managerAnswers = await promptManager();
        // Creates an instance of Manager class (i.e. object), passing through managerAnswers as argument (i.e. returned value from promptManager() function) (these become values of object's respective properties). Assigns the returned object to manager variable.
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        // Pushes manager object up to team array.
        team.push(manager);

        // Calls promptAdd() function (with await). Assigns returned value to addAnswer variable (which is  re-assignable).
        let addAnswer = await promptAdd();

        // While addAnswer.add is 'Engineer' or 'Intern' (i.e. while user selects one of these options), run this codeblock:
        while (addAnswer.add == 'Engineer' || addAnswer.add == 'Intern') {
            // If addAnswer.add is 'Engineer' (i.e. user selects 'Engineer'), runs this codeblock:
            if (addAnswer.add == 'Engineer') {
                // Calls promptEmployee() function (with await). Assigns returned value to employeeAnswer variable.
                const employeeAnswers = await promptEmployee();
                // Calls promptEngineer() function (with await). Assigns returned value to engineerAnswer variable.
                const engineerAnswers = await promptEngineer();
                // Creates an instance of Engineer class, passing through employeeAnswers and engineerAnswers as arguments (i.e. returned value from these functions). Assigns the returned object to engineer variable.
                const engineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, engineerAnswers.github)
                // Pushes engineer object up to team array.
                team.push(engineer);
                // Calls promptAdd() function (with await). Re-assigns addAnswer variable with returned value (i.e. to user's updated answer).
                addAnswer = await promptAdd();
                // If addAnswer.add is not 'Engineer' (i.e. user selects 'Intern'), runs this codeblock:
            } else {
                // Calls promptEmployee()... assigns to employeeAnswer.
                const employeeAnswers = await promptEmployee();
                // Calls promptIntern()... assigns to internAnswer.
                const internAnswers = await promptIntern();
                // Creates an instance of Intern class, passing through employeeAnswers and internAnswers... assigns object to intern.
                const intern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, internAnswers.school);
                // Pushes intern object up to team array.
                team.push(intern);
                // Calls promptAdd() function... re-assigns addAnswer.
                addAnswer = await promptAdd();
            }
        };
        // Calls createPage() function (with await).
        await createPage(team);
        // Writes below message to console.
        console.log('Your Team Page has been made. Check the Output directory!');
        // If an error is thrown in try block, "catch it" and run this code:
    } catch (err) {
        // Writes the error to the console.
        console.error(err);
    }
};

// **FUNCTIONS CALLS**
// Task 11: Calls initApp() function.
initApp();



