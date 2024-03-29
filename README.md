# Make Me a Team Page

## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Contents

* [Description](#description)
* [Build](#build)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)
* [Acknowledgments](#acknowledgments)
* [References](#references)

## Description

The aim of this project was to build a command-line application that dynamically generates a HTML webpage, based upon a user’s input.

The project brief specified that the generated webpage should display a software engineering team, with the following members:

* Manager (essential)
* Engineer(s) (optional) 
* Intern(s) (optional)

The user should first be prompted to enter the Manager’s details, including their name, id, email and office number. They should then be prompted to add an engineer, intern or finish and generate the webpage. If the user opts to add an engineer, they should be prompted for the engineer’s GitHub username (as well as their name, id and email). Whereas if the user adds an intern, they should be prompted for the intern’s university (as well as their name, id and email).

The starter code included a template for the generated webpage, as well as tests on the classes. All tests were required to pass.

Although not explicitly stated in the project brief, the starter code implied that the application should be invoked by using the following command: `node index.js` and should make use of the [Inquirer package](https://www.npmjs.com/package/inquirer) (for user input) and the [Jest package](https://jestjs.io/) (for testing).

## Build

### Main application

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![NPM](https://img.shields.io/badge/Inquirer-%23CB3837.svg?style=for-the-badge&logo=inquirer&logoColor=white) 

In relation to `node.js`, the application makes use of node’s [`file system` module](https://nodejs.org/docs/latest/api/fs.html), [`path` module](https://nodejs.org/docs/latest/api/path.html) and [`util` module](https://nodejs.org/docs/latest/api/util.html).

The `javascript` files have been commented throughout with pseudocode (breaking the project into tasks). Comments have also been added to explain the functionality of the code and highlight changes that have been made to the starter code.

### Generated webpage

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Installation

If you haven’t already, please [download `node.js`](https://nodejs.org/en/) to your machine before proceeding with the installation instructions.

1. Clone this repository to your machine
1. Navigate to the root of the newly cloned directory
1. Open your terminal
1. In the terminal, run `npm i`
1. The application is now ready to be used and is invoked using the command `node index.js`

## Usage

The user installs and invokes the application as above. Once invoked, the application asks the user a series of prompts:

1. Requests information about the Manager (i.e. name, id, email and office number)
2. Asks the user if they would like to add an engineer, an intern or finish and generate the webpage:
* If add an engineer is selected, requests information about this employee  (i.e. name, id, email and GitHub username)
* If add an intern is selected, requests information about this employee  (i.e. name, id, email and university)
3. Upon entering the employee’s details, asks the user if they would like to add (another) engineer, intern or finish and generate the webpage.
4. When finish is selected, a confirmation message is displayed in the terminal and the user is instructed to check the output directory.

Validation is included on each prompt to ensure the user’s answers are satisfactory (e.g. not left blank; a number where required etc).

The user’s answers to these prompts become the content of the generated webpage (via classes).

When the user selects to finish and generate the webpage, an output directory is created and an HTML file (with the generated content) is created within this directory. (Note: if an output directory already exists, the creating of this directory is skipped).

A [walkthrough video](https://drive.google.com/file/d/1UTroGmfGWKoG8Y3QZ9Vb2lUCgMdOtMAX/view?usp=sharing), demonstrating the invoking of the application, the answering of the user prompts and a generated `html` file is accessible via the link.

An [example `html` file](https://github.com/Code0Em/make-me-a-team-page/blob/main/output/team.html) generated by the application is included in this repository. This generated webpage displays as follows (on a resolution of 1400px):

![Screenshot of an example webpage generated by the application](/images/example-generated-webpage.png)

## Testing

The application uses the [Jest package](https://jestjs.io/) for unit testing on each of the classes. At the time of publishing this README, all tests pass:

![Screenshot of the terminal displaying test results, shows 17 passed run and all passed](/images/tests-passed-screenshot.jpg)

### To run the tests

1. Navigate to the root of the application’s directory
1. Open your terminal
1. In the terminal, run `npm test`

## Credits

* **Starter code (including tests)**: edX (2023)
* **Design resources in generated webpage**: Freepik (no date), Google Fonts (no date)
* All other credits are cited in the code comments and referenced below.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Select the badge or visit the `LICENSE.txt` (above) for more information.

## Acknowledgments

Code written by Code0Em ([email](mailto:code.em@outlook.com)/ [GitHub](https://github.com/Code0Em)).

## References

edX (2023) [*Build new skills. Advance your career*](https://www.edx.org/).

Freepik (no date) [*Create great designs, faster*](https://www.freepik.com/).

Google Fonts (no date) [*Google Fonts*](https://fonts.google.com/).

LaunchCode Education (no date) [*13.4. Exporting Modules*](https://education.launchcode.org/intro-to-professional-web-dev/chapters/modules/exporting.html).

Node.js (no date) [*Working with folders in Node.js*](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs).

Xpert Learning Assistant (2024) (accessed via Virtual Learning Environment).