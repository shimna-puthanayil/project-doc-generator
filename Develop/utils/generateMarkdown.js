// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  switch (license) {
    case "MIT":
      badge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
      break;
    case "APACHE 2.0":
      badge = `https://img.shields.io/badge/License-Apache_2.0-green.svg`;
      break;
    case "GPL 3.0":
      badge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
      break;
    case "BSD 3":
      badge = `https://img.shields.io/badge/License-BSD_3--Clause-orange.svg`;
      break;
    default:
      badge = ``;
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let licenseLink = ``;
  switch (license) {
    case "MIT":
      licenseLink = `https://opensource.org/licenses/MIT`;
      break;
    case "APACHE 2.0":
      licenseLink = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "GPL 3.0":
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case "BSD 3":
      licenseLink = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    default:
      licenseLink = ``;
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let licenseText=`N/A`;
  if(renderLicenseLink(license))
  {
    link=renderLicenseLink(license);
    licenseText=`This project is licensed under the ${license} license\n ${link}`;
}
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (renderLicenseBadge(data.license)) {
    badge = renderLicenseBadge(data.license)
    
  }
  else {
    badge = ``;
  }
 
  // link=renderLicenseLink(data.license);
license=renderLicenseSection(data.license);

  return `# ${data.title}
  ![GitHub license](${badge})
  
 
  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#license)
  * [Tests](#license)
  * [Questions](#license)

  ## Installation
  
   To install  necessary dependencies, run the following command :

  \`\`\`
  ${data.dependencies}
  \`\`\`
 
  ## Usage

  ${data.usage}

  ## License

 ${license} 

  ## Contributing

${data.Contribution}

  ## Tests

  To run tests, run the following command :

  \`\`\`
  ${data.tests}
  \`\`\`


  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.emailId}. You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
