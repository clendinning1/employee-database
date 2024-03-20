// import mysql2, inquirer, and inquirer prompts (for readability)
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');

// import submenus from subMenus.js
const { viewDepartmentsQuery, viewRolesQuery, viewEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./lib/queries');

// inquirer prompts in prompts.js
const { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeePrompt } = require('./lib/prompts');

// db for running mysql server
let db;




// main menu inquirer funct
async function mainMenuFunct() {
    // this runs on startup and asks the following questions:
    const mainMenuResponse = await inquirer.prompt(mainMenuPrompt);
    if (mainMenuResponse == "View All Departments") {
        // if you chose to View All Departments, run the following function
        viewDepartmentsQuery();

    } else if (mainMenuResponse == "View All Roles") {
        // if you chose to View All Roles, run the following function
        viewRolesQuery();

    } else if (mainMenuResponse == "View All Employees") {
        // if you chose to View All Employees, run the following function
        viewEmployeesQuery();

    } else if (mainMenuResponse == "Add a Department") {
        // if you chose to Add a Department, it asks:
        inquirer.prompt(addDepartmentPrompt)
            .then((response) => {
                // then runs the following function:
                addDepartmentQuery();

                // CODE HERE: return to menu
            });

    } else if (mainMenuResponse == "Add a Role") {
        // if you chose to Add a Role, it asks:
        inquirer.prompt(addRolePrompt).then((response) => { });

    } else if (mainMenuResponse == "Add an Employee") {
        // if you chose to Add an Employee, it asks:
        inquirer.prompt(addEmployeePrompt).then((response) => { });

    } else {
        // if you chose to Update an Employee Role, it asks:
        inquirer.prompt(updateEmployeePrompt).then((response) => { });
    }
}












// connect to mysql
async function run() {
    db = await mysql.createConnection(
        {
            host: 'localhost',
            // MySQL username,
            user: 'root',
            // MySQL password
            password: 'pass',
            database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
    );

    // open main menu
    mainMenuFunct();
}

run();