const inquirer = require("inquirer");
const chalk = require('chalk');
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

class CLI {
  constructor() {
    // ...
  }

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter your logo text (up to 3 characters).',
          validate: function (input) {
            if (input.length <= 3) {
              return true;
            } else {
              return chalk.red('Please enter a value with 3 characters or less.');
            }
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What colour would you like your text to be?',
          validate: function (input) {
            if (input.trim().length > 0) {
              return true;
            } else {
              return chalk.red('Please enter a color.');
            }
          },
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like your logo to be?',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What colour would you like your logo shape to be?',
          validate: function (input) {
            if (input.trim().length > 0) {
              return true;
            } else {
              return chalk.red('Please enter a color.');
            }
          },
        }
      ])
      // ... (your existing code)

.then(({ text, textColor, shape, shapeColor }) => {
    // Create instances of the selected shape class
    let shapeInstance;
    switch (shape) {
      case 'circle':
        shapeInstance = new Circle();
        break;
      case 'triangle':
        shapeInstance = new Triangle();
        break;
      case 'square':
        shapeInstance = new Square();
        break;
      default:
        throw new Error('Invalid shape type.');
    }
  
    // Set the shape color (if needed)
    shapeInstance.setColor(shapeColor);
  
    // Create the SVG logo
    const svgLogo = new SVG();
    svgLogo.setShape(shapeInstance);
    svgLogo.setText(text);
    svgLogo.setTextColor(textColor);
  
    // Render the SVG logo and write to file in the output folder
    const svgMarkup = svgLogo.render();
    return writeFile('./output/logo.svg', svgMarkup);
  })
  // ... (your existing code)
  
      .then(() => {
        console.log("Generated logo.svg and added to the output folder.");
      })
      .catch((err) => {
        console.log(err);
        console.log("Oops, something went wrong.");
      });
  }
}

module.exports = CLI;
