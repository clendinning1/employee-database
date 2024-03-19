// import queries from queries.js
const { queryDepartmentTable, queryRolesTable, queryEmployeesTable } = require('./queries.js');



// 1. View All Departments submenu
function viewDepartments() {
    queryDepartmentTable();
    // return to menu
    
}


// 2. View All Roles submenu
function viewRoles() {
    queryRolesTable();
    // return to menu
}


// 3. View Employees submenu
function viewEmployees() {
    queryEmployeesTable();
    // return to menu
}


// 4. Add Department submenu
function addDepartment() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of the department?",
                name: 'addNewDepartment',
            },
        ])
        .then((response) => {

            // "response.addNewDepartment" is the name of the new department
            console.log("Added " + response.addNewDepartment + " department to the database.");

            // code here
            // interact w/ sequel to add a new department to the db

            // return; ??? do we need to exit or navigate or anything or will it do it automatically?
        });
}


// 5. Add Role submenu
function addRole() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of the role?",
                name: 'addRoleName',
            },
            {
                type: 'input',
                message: "What is the salary of the role?",
                name: 'addRoleSalary',
            },
            {
                type: 'list',
                message: "What department does the role belong to?",
                name: 'addRoleDepartment',
                // CODE HERE
                // "choices" array should be a variable that holds each department in the sql database
                choices: [],
            },
        ])
        .then((response) => {

            // "response.addRoleName" is the name of the new department
            console.log("Added " + response.addRoleName + " role to the database.");

            // code here
            // interact w/ sequel to add a new role to the db
            // including name, salary, and department id

            // return; ??? do we need to exit or navigate or anything or will it do it automatically?

        });
}


// 6. Add Employee submenu
function addEmployee() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'addEmployeeFirstName',
            },
            {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'addEmployeeLastName',
            },
            {
                type: 'list',
                message: "What is the employee's role?",
                name: 'addEmployeeRole',
                // CODE HERE
                // "choices" array should be a variable that holds each role in the sql database
                choices: [],
            },
            {
                type: 'list',
                message: "Who is the employee's manager?",
                name: 'addEmployeeManager',
                // CODE HERE
                // "choices" array should be a variable that holds each manager in the sql database
                // and a none option that sends "null" to the sql
                choices: [],
            },
        ])
        .then((response) => {

            console.log("Added " + response.addEmployeeFirstName + response.addEmployeeLastName + " to the database.");

            // code here
            // interact w/ sequel to add a new employee to the db
            // including first name, last name, role id (and from role id, the department id), and manager if any

            // return; ??? do we need to exit or navigate or anything or will it do it automatically?
        });
}


// 7. Update Employee Role submenu
function updateEmployeeRole() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'list',
                message: "Which employee's role do you want to update?",
                name: 'employeeToUpdate',
                // CODE HERE
                // "choices" array should be a variable that holds each employee in the sql database
                choices: [],
            },
            {
                type: 'list',
                message: "Which role do you want to assign the selected employee?",
                name: 'updatedEmployeeRole',
                // CODE HERE
                // "choices" array should be a variable that holds each role in the sql database
                choices: [],
            },
        ])
        .then((response) => {

            console.log("Updated " + response.employeeToUpdate + "'s role.");

            // code here
            // interact w/ sequel to update an existing employee to the db
            // including role id (and from role id, the department id)

            // return; ??? do we need to exit or navigate or anything or will it do it automatically?
        });
}



// export to index.js
module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }