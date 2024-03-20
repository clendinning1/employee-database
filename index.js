// import submenus from subMenus.js
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./lib/subMenus');





// main menu inquirer funct
function init() {
    const inquirer = require('inquirer');
    // this runs on startup and asks the following questions:
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                name: 'mainMenu',
                choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
            },
        ])
        .then((response) => {

            if (response.mainMenu == "View All Departments") {
                // if you chose to View All Departments, run the following function
                viewDepartments();

            } else if (response.mainMenu == "View All Roles") {
                // if you chose to View All Roles, run the following function
                viewRoles();

            } else if (response.mainMenu == "View All Employees") {
                // if you chose to View All Employees, run the following function
                viewEmployees();

            } else if (response.mainMenu == "Add a Department") {
                // if you chose to Add a Department, run the following function
                addDepartment();

            } else if (response.mainMenu == "Add a Role") {
                // if you chose to Add a Role, run the following function
                addRole();

            } else if (response.mainMenu == "Add an Employee") {
                // if you chose to Add an Employee, run the following function
                addEmployee();

            } else {
                // if you chose to Update an Employee Role, run the following function
                updateEmployeeRole();
            }
        });
}




// calling funct
init();
