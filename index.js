
// inquirer funct
function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                name: 'mainMenu',
                choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
        //         validate: function (inqShapeType) {
        //             if (inqShapeType == "triangle" || "circle" || "square") {
        //                 return true;
        //             } else {
        //                 return "Please only select one shape";
        //             }
        //         }
        //     },
        // ])
        // .then((response) => {
        //     // svg strings that are the same for each shape
        //     const svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
        //     const svg2 = " \n </svg>"

        //     if (response.inqShapeType == "triangle") {
        //         // if the chosen shape was a triangle...
        //         console.log("Building your triangle...");

        //         // plugging in inputs from inquirer into svg file string
        //         const newTriangle = new Triangle(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
        //         const fullTriangleString = svg1 + newTriangle.triangleString + svg2;

        //         // creating the svg file
        //         function createTriangle() {
        //             const fs = require("fs");

        //             fs.appendFile('logo.svg', fullTriangleString, (err) =>
        //                 err ? console.error(err) : console.log("Generated logo.svg")
        //             );
        //         }

        //         createTriangle();

        //     } else if (response.inqShapeType == "square") {
        //         // if square... (same as above)
        //         console.log("Building your square...");

        //         const newSquare = new Square(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
        //         const fullSquareString = svg1 + newSquare.squareString + svg2;

        //         function createSquare() {
        //             const fs = require("fs");

        //             fs.appendFile('logo.svg', fullSquareString, (err) =>
        //                 err ? console.error(err) : console.log("Generated logo.svg")
        //             );
        //         }

        //         createSquare();

        //     } else {
        //         // if circle... (same as above)
        //         console.log("Building your circle...");

        //         const newCircle = new Circle(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
        //         const fullCirString = svg1 + newCircle.circleString + svg2;

        //         function createCircle() {
        //             const fs = require("fs");

        //             fs.appendFile('logo.svg', fullCirString, (err) =>
        //                 err ? console.error(err) : console.log("Generated logo.svg")
        //             );
        //         }

        //         createCircle();
        //     }

            return;
        });
}

// calling funct
init();