const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index");
const badge = require("badge-maker");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = "";
  if (license === "Apache") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "MIT") {
    badge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "BSD") {
    badge =
      "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (license === "Boost") {
    badge =
      "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Apache") {
    licenseLink = " https://www.apache.org/licenses/LICENSE-2.0.txt";
  } else if (license === "MIT") {
    licenseLink = "http://opensource.org/licenses/mit-license.php";
  } else if (license === "BSD") {
    licenseLink = "https://opensource.org/license/bsd-3-clause/";
  } else if (license === "Boost") {
    licenseLink = "https://opensource.org/license/bsl-1-0/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.projectTitle}


  ## License: ${answers.license} ${renderLicenseBadge(answers.license)} 

  ### ${renderLicenseLink(answers.license)}


  ## Descrtiption
  - ${answers.description}


  ## Table of Contents
  - [Descrtiption](#descrtiption)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation:
  ### Here is what you will need to install for this application
  - ${answers.installation}


  ## Usage
  - ${answers.usage}


  ## Contribution
  - ${answers.contribution}


  ## Tests
  ### Run test in terminal to test app
  - ${answers.tests}


  ## Questions
  ### If you have any question, I can be reached at
  - Github: https://github.com/${answers.userName}
  - Email: ${answers.email}

`;
}

module.exports = generateMarkdown;
