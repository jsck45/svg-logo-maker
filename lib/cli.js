const inquirer = require("inquirer");
const fs = require("fs").promises;
const path = require("path");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

class CLI {
  constructor() {
    this.logoCounter = 1;
  }

  async run() {
    try {
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
      let filename = `logo${this.logoCounter}.svg`;

      // Create the SVG logo file path in the output folder
      const outputPath = path.join("output", filename);

      // Check if the file already exists
      let fileExists = await fs
        .access(outputPath)
        .then(() => true)
        .catch(() => false);

      // If the file exists, generate a new unique filename
      if (fileExists) {
        let i = 1;
        let newFilename = filename.replace(".svg", "");
        while (fileExists) {
          newFilename = `logo${this.logoCounter}_${i}.svg`;
          fileExists = await fs
            .access(path.join("output", newFilename))
            .then(() => true)
            .catch(() => false);
          i++;
        }
        filename = newFilename;
      }

      // Write the SVG markup to the file
      await fs.writeFile(outputPath, svgMarkup);

      console.log(`Generated ${filename} and added to the output folder.`);

      // Increment the logoCounter for the next logo
      this.logoCounter++;
    } catch (err) {
      console.log(err);
      console.log("Oops, something went wrong.");
    }
  }
}

module.exports = CLI;
