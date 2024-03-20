// import mysql2, inquirer, and inquirer prompts (for readability)
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');

// inquirer prompts in prompts.js
const { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeePrompt } = require('./lib/prompts');

// db for running mysql server
let db;




// main menu inquirer funct
async function mainMenuFunct() {

    // mainMenuResponse reads whatever answer you give to the main menu prompt
    const mainMenuResponse = await inquirer.prompt(mainMenuPrompt);

    // if/else doesn't work, neither does switch/case. how do i use this other than .then?
    // similarly to the es7 example on mysql2, maybe?

}


//     } else if (mainMenuResponse == "Add a Role") {



//         inquirer.prompt(addRolePrompt).then((response) => { });


//     } else if (mainMenuResponse == "Add an Employee") {


//         inquirer.prompt(addEmployeePrompt).then((response) => { });


//     } else if (mainMenuResponse == "Update an Employee Role") {


//         inquirer.prompt(updateEmployeePrompt).then((response) => { });
//     }
// }





// SUBMENUS

// 1. View All Departments submenu
async function viewDepartmentsQuery() {

    // query the db
    const viewDptQuery = `SELECT * FROM department;`;
    const [results, data] = await db.query(viewDptQuery);

    // log results from db query
    console.log(results);

    // return to main menu
    mainMenuFunct();
}

// 2. View All Roles submenu
async function viewRolesQuery() {

    // query the db
    const viewRolesQuery = `SELECT * FROM roles;`;
    const [results, data] = await db.query(viewRolesQuery);

    // log results from db query
    console.log(results);

    // return to main menu
    mainMenuFunct();
}


// 3. View Employees submenu
async function viewEmployeesQuery() {

    // query the db
    const viewEmployeesQuery = `SELECT * FROM employees;`;
    const [results, data] = await db.query(viewEmployeesQuery);

    // log results from db query
    console.log(results);

    // return to main menu
    mainMenuFunct();
}


// 4. Add Department submenu
async function addDepartmentQuery() {

    // inquirer funct for pulling input from user
    inquirer.prompt(addDepartmentPrompt)
        .then((response) => {
            // takes the user response and logs it to the console!
            console.log(response.addNewDepartment);
        });


    // needs to add with the query, not just pull

    // needs to log the change to the console

    // needs to return to the main menu



    





    // query the db
    // const viewEmployeesQuery = `SELECT * FROM employees;`;
    // const [results, data] = await db.query(viewEmployeesQuery);


    // log the change to the console.
    // "response.addRoleName" is the name of the new department
    // console.log("Added " + response.addRoleName + " role to the database.");
}





















// connect to mysql
async function runSQLDB() {
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
    // mainMenuFunct();

    addDepartmentQuery();
}

runSQLDB();