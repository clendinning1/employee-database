
// inquirer funct
function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                name: 'inqTextInput',
                choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
            },
            {
                type: 'input',
                message: "Enter text color (all strings should be one word; include hashtag for hex code):",
                name: 'inqTextColor',
                validate: function (input) {
                    const isValidColor = color => {
                        // using regex to make sure the hex code is valid
                        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        return hexPattern.test(color);
                    }
                    const testInput = isValidColor(input);
                    if (testInput === false) {
                        // if the hex code isn't valid, check to see if the input is a css color name instead.
                        // .toLowerCase ensures case insensitivity for the check :)
                        if (colorNames.includes(input.toLowerCase())) {
                            return true;
                        } else {
                            // if not, error
                            return "Must enter a valid color";
                        }
                    } else {
                        // if the hex code is valid, return "true" for the validator
                        return true;
                    }
                }
            },
            {
                type: 'checkbox',
                message: "Choose your shape (will default to circle):",
                choices: ["triangle", "circle", "square"],
                name: 'inqShapeType',
                validate: function (inqShapeType) {
                    if (inqShapeType == "triangle" || "circle" || "square") {
                        return true;
                    } else {
                        return "Please only select one shape";
                    }
                }
            },
            {
                type: 'input',
                message: "Enter shape color (all strings should be one word; include hashtag for hex code):",
                name: 'inqShapeColor',
                validate: function (input) {
                    const isValidColor = color => {
                        // All notes here are the same as the previous color input
                        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        return hexPattern.test(color);
                    }
                    const testInput = isValidColor(input);
                    if (testInput === false) {
                        if (colorNames.includes(input.toLowerCase())) {
                            return true;
                        } else {
                            return "Must enter a valid color";
                        }
                    } else {
                        return true;
                    }
                }
            },
        ])
        .then((response) => {
            // svg strings that are the same for each shape
            const svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
            const svg2 = " \n </svg>"

            if (response.inqShapeType == "triangle") {
                // if the chosen shape was a triangle...
                console.log("Building your triangle...");

                // plugging in inputs from inquirer into svg file string
                const newTriangle = new Triangle(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
                const fullTriangleString = svg1 + newTriangle.triangleString + svg2;

                // creating the svg file
                function createTriangle() {
                    const fs = require("fs");

                    fs.appendFile('logo.svg', fullTriangleString, (err) =>
                        err ? console.error(err) : console.log("Generated logo.svg")
                    );
                }

                createTriangle();

            } else if (response.inqShapeType == "square") {
                // if square... (same as above)
                console.log("Building your square...");

                const newSquare = new Square(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
                const fullSquareString = svg1 + newSquare.squareString + svg2;

                function createSquare() {
                    const fs = require("fs");

                    fs.appendFile('logo.svg', fullSquareString, (err) =>
                        err ? console.error(err) : console.log("Generated logo.svg")
                    );
                }

                createSquare();

            } else {
                // if circle... (same as above)
                console.log("Building your circle...");

                const newCircle = new Circle(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
                const fullCirString = svg1 + newCircle.circleString + svg2;

                function createCircle() {
                    const fs = require("fs");

                    fs.appendFile('logo.svg', fullCirString, (err) =>
                        err ? console.error(err) : console.log("Generated logo.svg")
                    );
                }

                createCircle();
            }

            return;
        });
}

// calling funct
init();