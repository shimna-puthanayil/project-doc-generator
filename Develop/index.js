// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username ? ","What is your email address ? ","What is your project's name ?","Please write a short description of your project.","What kind of license should your project have ?","What command should be run to install dependencies ? ","What command should be run to run tests ?","What does the user need to know about using the repo ? ","Contributing to the repo ?"];
const[username,emailId,title,description,license,dependencies,tests,usage,Contribution]=questions;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
