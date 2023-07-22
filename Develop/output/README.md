# Professional README Generator
  
  [![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  
  This command-line application dynamically generates a professional README file from a user's input. The user can give information about the new repository based on which a project README.md will be generated with the title of project and sections entitled Description, Table of contents, Installation, Usage, License, Contributing, Tests and Questions. The README file contains a badge  at the beginning after the title for the license the application is covered under. It also includes the user's GitHub username and the link to the GitHub profile in the section 'Questions'.

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
   To install  necessary dependencies, run the following command :

  ```
  npm i inquirer@8.2.4
  ```
 
  ## Usage

  The user is prompted with a series of questions for information about the application repository when the application is run (by right clicking on the folder 'Develop' and then Open in Integrated Terminal will result in displaying the terminal. After the terminal is opened type node index.js to run the application). These questions include GitHub username, email address, project's title, short description of the project, license the project is covered under (the user has to choose the license from a list of licenses), command needed to install the dependencies and tests, usage instructions and how to contribute to the project. After all the questions are answered a success message will be displayed and a README.md file will be generated in to the folder 'output'.

  ## License

  This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license. 

  ## Contributing

  Pull requests are welcome. For major changes, please open an issue first to discuss about the changes.

  ## Tests

  To run tests, run the following command :

  ```
  npm test
  ```

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at chimmu.p@gmail.com. You can find more of my work at [shimna-puthanayil](https://github.com/shimna-puthanayil).
