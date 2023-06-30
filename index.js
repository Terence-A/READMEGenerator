// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkDown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project name",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description explaingin the what, why and how of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use"
  },
  {
    type: "checkbox",
    name: "License",
    message: "If you would like to add a license please pick one from the list below.",
    choice: ["Apache", "MIT", "BSD", "Boost", "none" ]
  },
  {
    type: "input",
    name: "contribution",
    message: "Guidelines on how user can contribute to your repository"
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for app, and provide examples on how to runt them"
  },
  {
    type: "input",
    name: "questions",
    message: "Instructions on how you can be reached by user."
  },
  {
    type: "input",
    name: "userName",
    message: "Please provide your GitHub username"
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address"
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init = () => {
    inquirer.prompt(questions)
    .then((answers) =>{

    })
    .catch((error) =>{

    });
