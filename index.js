// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
    {
        //title
        name: "title",
        message: "What is the title of your projec?",
        type: "input",
    },
    {
        //description
        name: "description",
        message: "Please write a description for your project.",
        type: "input",
    },
    {
        //installation
        name: "installation",
        message: "Please write installation instructions for your project.",
        type: "input",
    },
    {
        //usage
        name: "usage",
        message: "Please describe how your project will be used.",
        type: "input",
    },
    {
        //contribute
        name: "contribute",
        message: "Please provide guidelines on how others can contribute to your project.",
        type: "input",
    },
    {
        //tests
        name: "tests",
        message: "Please write any tests for your project with examples on how to run them.",
        type: "input",
    },
    {
        //license
        name: "license",
        message: "Select a license from these options:",
        type: "list",
        choices: ["MIT", "GNU GPLv3", "BSD 2-Clause", "None/not listed"],
    },
    {
        //username
        name: "username",
        message: "What is your GitHub username?",
        type: "input",
    },
    {
        //email
        name: "email",
        message: "What is your email address?",
        type: "input",
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) =>
        error ? console.log(error): console.log("no error"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>
    {
        writeToFile('README.md', data);
    }
);
}

// Function call to initialize app
init();
