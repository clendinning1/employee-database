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

    // mainMenuResponse reads whatever answer you give to the main menu prompt
    const mainMenuResponse = await inquirer.prompt(mainMenuPrompt);

    switch (mainMenuResponse) {
        case "View All Departments":

            // if you chose to View All Departments...
            console.log("Viewing Departments");

            break;

        case "View All Roles":

            // if you chose to View All Roles...
            console.log("Viewing Roles");

            break;

        case "View All Employees":

            // if you chose to View All Employees...
            console.log("Viewing Employees");

            break;

        case "Add a Department":

            // if you chose to Add a Department...
            console.log("Add a Department:");

            break;

        case "Add a Role":

            // if you chose to Add a Role....
            console.log("Add a Role:");

            break;

        case "Add an Employee":

            // if you chose to Add an Employee...
            console.log("Add an Employee:");

            break;

        case "Update an Employee Role":

            // if you chose to Update an Employee Role...
            console.log("Update an Employee role:");

            break;
    }
}







// inquirer.prompt(addDepartmentPrompt)
//     .then((response) => {
//         // then runs the following function:
//         addDepartmentQuery();

//         // CODE HERE: return to menu
//     });


//     } else if (mainMenuResponse == "Add a Role") {



//         inquirer.prompt(addRolePrompt).then((response) => { });


//     } else if (mainMenuResponse == "Add an Employee") {


//         inquirer.prompt(addEmployeePrompt).then((response) => { });


//     } else if (mainMenuResponse == "Update an Employee Role") {


//         inquirer.prompt(updateEmployeePrompt).then((response) => { });
//     }
// }












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