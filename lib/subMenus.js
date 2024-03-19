// View All Departments submenu
function viewDepartments() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// View All Roles submenu
function viewRoles() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// View Employees submenu
function viewEmployees() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// Add Department submenu
function addDepartment() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// Add Role submenu
function addRole() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// Add Employee submenu
function addEmployee() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// Update Employee Role submenu
function updateEmployeeRole() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Is it sillay time?",
                name: 'sillayTime',
                choices: ["yes", "yes", "yes"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "yes") {
                console.log("yes!");
            }

            return;
        });
}

// export to index.js
module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }