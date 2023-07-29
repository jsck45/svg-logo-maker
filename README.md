# 10 Object-oriented Programming: SVG Logo Maker

## Description

The aim of this project was to build a Node.js command-line application that would take in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation

This application requires Node.js, Inquirer.js and Jest.

## Tests

Invoke `npm run test` to run tests using the Jest framework.

## Example Output SVG

![Logo](output/logo.svg)

## Walkthrough Video

[Click here to watch a walkthrough video](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)