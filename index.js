// import submenus from subMenus.js
const { viewDepartmentsQuery, viewRolesQuery, viewEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./lib/queries');





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
                viewDepartmentsQuery();

            } else if (response.mainMenu == "View All Roles") {
                // if you chose to View All Roles, run the following function
                viewRolesQuery();

            } else if (response.mainMenu == "View All Employees") {
                // if you chose to View All Employees, run the following function
                viewEmployeesQuery();

            } else if (response.mainMenu == "Add a Department") {
                // if you chose to Add a Department, run the following function
                addDepartmentQuery();

            } else if (response.mainMenu == "Add a Role") {
                // if you chose to Add a Role, run the following function
                addRoleQuery();

            } else if (response.mainMenu == "Add an Employee") {
                // if you chose to Add an Employee, run the following function
                addEmployeeQuery();

            } else {
                // if you chose to Update an Employee Role, run the following function
                updateEmployeeRoleQuery();
            }
        });
}




// calling funct
init();
