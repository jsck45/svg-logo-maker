const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require('chalk');
const test = require("jest");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters.',
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
        name: 'color',
        message: 'What colour would you like your text to be?',
        validate: function (input) {
            if (input.trim().length > 0) {
              return true;
            } else {
              return chalk.red('Please enter a color.');
            }
          },
    },
]