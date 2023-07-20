//packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//an array of questions for user input
const questions = ["What is your GitHub username ? ", "What is your email address ? ", "What is your project's name ?", "Please write a short description of your project.", "What kind of license should your project have ?", "What command should be run to install dependencies ? ", "What command should be run to run tests ?", "What does the user need to know about using the repo ? ", "Contributing to the repo ?"];
const [username, emailId, title, description, license, dependencies, tests, usage, Contribution] = questions;

//a function to write README file
function writeToFile(fileName, data) {
    //calls the function which returns markdown for README.
    const readMePageContent = generateMarkdown(data);
    //README.md is stored in to a folder named 'output'.
    fs.writeFile('./output/' + fileName, readMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README .!')
    );
}

// This function initializes the  app by creating prompt interface
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'username',
                message: username,
            },
            {
                type: 'input',
                name: 'emailId',
                message: emailId,
            },
            {
                type: 'input',
                name: 'title',
                message: title,
            },
            {
                type: 'input',
                name: 'description',
                message: description,
            },
            {
                type: 'list',
                name: 'license',
                message: license,

                choices: [
                    { name: 'MIT' },
                    { name: 'APACHE 2.0' },
                    { name: 'GPL 3.0' },
                    { name: 'BSD 3' },
                    { name: 'none' },
                ]
            },
            {
                type: 'input',
                name: 'dependencies',
                message: dependencies,
            },

            {
                type: 'input',
                name: 'tests',
                message: tests,
            },

            {
                type: 'input',
                name: 'usage',
                message: usage,
            },
            {
                type: 'input',
                name: 'Contribution',
                message: Contribution,
            },
        ])
        .then((data) => {
            writeToFile("README.md", data);
        })
}

// Function call to initialize app
init();
