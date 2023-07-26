const inquirer = require("inquirer");
const chalk = require('chalk');
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

class CLI {
    constructor (){
        // this.title =""; name of logo?
        // more stuff here?
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
        .then (({ text, textColor, shape, shapeColor }) => {
            // render svg and write to file in output
            // return this. // some function that renders
        })
        .then(()=> {
            console.log("Logo created and added to the output folder.");
        })
        .catch((err)=>{
            console.log(err);
            console.log("Oops, something went wrong.");
        })
    }
}

module.exports = CLI;