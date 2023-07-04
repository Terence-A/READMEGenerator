// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const validator = require("email-validator");
const generateMarkdown = require("./utils/generateMarkDown");
const fs = require("fs");
validator.validate("test@email.com");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project name",
    validate: (projectTitleInput) => {
      if (projectTitleInput) {
        return true;
      } else {
        console.log("Please enter your project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a short desription!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("What re the steps required to insall your project?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Provide instructions and examples for use!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message:
      "If you would like to add a license please pick one from the list below.",
    choices: ["None", "Apache", "MIT", "BSD", "Boost"],
  },
  {
    type: "input",
    name: "contribution",
    message: "Guidelines on how user can contribute to your repository",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "Guidelines on how user can contribute to your repository!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for app, and provide examples on how to run them",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log(
          "Write tests for app, and provide examples on how to run them"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "questions",
    message: "Instructions on how you can be reached by user.",
    validate: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log("Instructions on how you can be reached by user!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "userName",
    message: "Please provide your GitHub username",
    validate: (userNameInput) => {
      if (userNameInput) {
        return true;
      } else {
        console.log("Please provide your GitHub username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
    validate: (emailInput) => {
      if (validator.validate(emailInput)) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(content) {
  fs.writeFile("./generatedREADME.md", content, (err) => {
    if (err) throw err;
    console.log("README file genterated!!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    let content = generateMarkdown(answers);
    writeToFile(content);
  });
}

// Function call to initialize app
init();

module.exports = questions;
