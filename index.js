const inquirer = require("inquirer");
const fs = require("fs");
// const chalk = require('chalk');
const test = require("jest");
const CLI = require("./lib/cli");

const cli = new CLI();

cli.run();

const questions = [
    // {
    //     type: 'input',
    //     name: 'text',
    //     message: 'Please enter your logo text (up to 3 characters).',
    //     validate: function (input) {
    //         if (input.length <= 3) {
    //           return true;
    //         } else {
    //           return chalk.red('Please enter a value with 3 characters or less.');
    //         }
    //       },
    // },

    // {
    //     type: 'input',
    //     name: 'textColor',
    //     message: 'What colour would you like your text to be?',
    //     validate: function (input) {
    //         if (input.trim().length > 0) {
    //           return true;
    //         } else {
    //           return chalk.red('Please enter a color.');
    //         }
    //       },
    // },
    // {
    //     type: 'input',
    //     name: 'shape',
    //     message: 'What shape would you like your logo to be?',
    //     validate: function (input) {
    //         if (input.trim().length > 0) {
    //           return true;
    //         } else {
    //           return chalk.red('Please enter a color.');
    //         }
    //       },
    // },
    // {
    //     type: 'input',
    //     name: 'shapeColor',
    //     message: 'What colour would you like your logo shape to be?',
    //     validate: function (input) {
    //         if (input.trim().length > 0) {
    //           return true;
    //         } else {
    //           return chalk.red('Please enter a color.');
    //         }
    //       },
    // },
]