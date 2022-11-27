// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of your projec?",
        type: "input",
    },
    {
        name: "descriptio",
        message: "Write a description for your project.",
        type: "input",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
