// import mysql2, inquirer, and process for exit
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const { exit } = require('process');

// db for running mysql server
let db;


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
}

runSQLDB();




// first, call the info from the db. we've already done this in prompts.js
// then, enter the info into a variable.
// then, call the info into choices:
// and test and hope it works!


// QUERIES
// 1. query for department names and get that working first
// then worry about the ids
// how do i get the variables set up so i can just plug them into the consts below without global/local issues?
async function pullDepartmentsFunct() {

    // query the db
    // const pullDepartmentsQuery = `SELECT * FROM department;`;
    const [results, data] = await db.query(`SELECT * FROM department;`);

    // "choices" array should be a variable that holds each department in the sql database
    // name that displays should be the department name but what actually adds to the role table
    // should be the department id
    // CALL A FUNCTION
    // function should return the array

    // return results from db query
    //return results;

}




// PROMPTS
// prompts for the main menu
const mainMenuPrompt = [
    {
        type: 'list',
        message: "What would you like to do?",
        name: 'mainMenuInq',
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit"],
    },
]

// prompts for adding a department
const addDepartmentPrompt = [
    {
        type: 'input',
        message: "What is the name of the department?",
        name: 'addNewDepartmentInq',
    },
]

// prompts for adding a role
const addRolePrompt = [
    {
        type: 'input',
        message: "What is the name of the role?",
        name: 'addRoleTitleInq',
    },
    {
        type: 'input',
        message: "What is the salary of the role?",
        name: 'addRoleSalaryInq',
    },
    {
        type: 'list',
        message: "What department does the role belong to?",
        name: 'addRoleDepartmentInq',
        // choices runs above funct that returns the array of depts
        choices: [pullDepartmentsFunct],
    },
]

// prompts for adding an employee
const addEmployeePrompt = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'addEmployeeFirstNameInq',
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'addEmployeeLastNameInq',
    },
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'addEmployeeRoleInq',
        // CODE HERE
        // "choices" array should be a variable that holds each role in the sql database
        choices: [765, 564],
    },
    {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'addEmployeeManagerInq',
        // CODE HERE
        // "choices" array should be a variable that holds each manager in the sql database
        // and a none option that sends "null" to the sql
        choices: [33, 44],
    },
]

// prompts for updating an employee role
const updateEmployeePrompt = [
    {
        type: 'list',
        message: "Which employee's role do you want to update?",
        name: 'employeeToUpdateInq',
        // CODE HERE
        // "choices" array should be a variable that holds each employee in the sql database
        choices: [],
    },
    {
        type: 'list',
        message: "Which role do you want to assign the selected employee?",
        name: 'updatedEmployeeRoleInq',
        // CODE HERE
        // "choices" array should be a variable that holds each role in the sql database
        choices: [],
    },
]






// exporting to index.js
module.exports = { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeePrompt }