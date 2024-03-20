// import submenus from subMenus.js
const { viewDepartmentsQuery, viewRolesQuery, viewEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery } = require('./lib/queries');

const { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeePrompt } = require('./lib/prompts');





// main menu inquirer funct
function init() {
    const inquirer = require('inquirer');
    // this runs on startup and asks the following questions:
    inquirer
        .prompt(mainMenuPrompt)
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
                // if you chose to Add a Department, it asks:
                inquirer.prompt(addDepartmentPrompt)
                    .then((response) => {
                        // then runs the following function:
                        addDepartmentQuery();

                        // CODE HERE: return to menu
                    });

            } else if (response.mainMenu == "Add a Role") {
                // if you chose to Add a Role, it asks:
                inquirer.prompt(addRolePrompt).then((response) => {});

            } else if (response.mainMenu == "Add an Employee") {
                // if you chose to Add an Employee, it asks:
                inquirer.prompt(addEmployeePrompt).then((response) => { });

            } else {
                // if you chose to Update an Employee Role, it asks:
                inquirer.prompt(updateEmployeePrompt).then((response) => { });
            }
        });
}




// calling funct
init();
