// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == 'GNU GPLv3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license = 'BSD 3-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license == 'GNU GPLv3'){
    return `[GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license = 'BSD 3-Clause') {
    return `[BSD 2-Clause License](https://choosealicense.com/licenses/bsd-2-clause/)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None/not listed') {
    return `## License
    
  The license for this project is the ${license} License.
  To view the license, please visit ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>{
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribute

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions

  For additional questions:
  - [Link to GitHub](https://github.com/${data.username}) 
  - For additional questions, contact me at [${data.email}](mailto:${data.email})

`;
}
const testVar = 'this is a test';
module.exports = {generateMarkdown};
