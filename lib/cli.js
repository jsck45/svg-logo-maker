const inquirer = require("inquirer");
const fs = require("fs").promises;
const path = require("path");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

class CLI {
  async run() {
    try {
      // Get the list of existing files in the output folder
      const existingFiles = await fs.readdir(path.join("output"));

      // Calculate the next available logo number based on existing files
      let logoCounter = 1;
      for (const filename of existingFiles) {
        if (filename.startsWith("logo") && filename.endsWith(".svg")) {
          const fileNumber = parseInt(filename.substring(4, filename.length - 4));
          if (!isNaN(fileNumber) && fileNumber >= logoCounter) {
            logoCounter = fileNumber + 1;
          }
        }
      }

      const userInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter your logo text (up to 3 characters).'
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What colour would you like your text to be?'
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
          message: 'What colour would you like your logo shape to be?'
        }
      ]);

      // Create instances of the selected shape class
      let shapeInstance;
      switch (userInput.shape) {
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

      // Set the shape color
      shapeInstance.setColor(userInput.shapeColor);

      // Create the SVG logo
      const svgLogo = new SVG();
      svgLogo.setShape(shapeInstance);
      svgLogo.setText(userInput.text);
      svgLogo.setTextColor(userInput.textColor);

      // Render the SVG logo and write to file in the output folder
      const svgMarkup = svgLogo.render();

      // Generate the filename for the SVG logo
      const filename = `logo${logoCounter}.svg`;

      // Create the SVG logo file path in the output folder
      const outputPath = path.join("output", filename);

      // Write the SVG markup to the file
      await fs.writeFile(outputPath, svgMarkup);

      console.log(`Generated ${filename} and added to the output folder.`);
    } catch (err) {
      console.log(err);
      console.log("Oops, something went wrong.");
    }
  }
}

module.exports = CLI;