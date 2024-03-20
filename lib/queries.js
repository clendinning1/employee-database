



// 1. View All Departments submenu
async function viewDepartmentsQuery() {
    // console.log the "department" table by querying the db
    const viewDptQuery = `SELECT * FROM department;`;
    const [results, data] = await db.query(viewDptQuery);
    console.log(results);
    // CODE HERE: return to menu
}


// 2. View All Roles submenu
async function viewRolesQuery() {
    // console.log the "roles" table by querying the db
    const viewRolesQuery = `SELECT * FROM roles;`;
    const [results, data] = await db.query(viewRolesQuery);
    console.log(results);
    // CODE HERE: return to menu
}


// 3. View Employees submenu
async function viewEmployeesQuery() {
    // console.log the "roles" table by querying the db
    const viewEmployeesQuery = `SELECT * FROM employees;`;
    const [results, data] = await db.query(viewEmployeesQuery);
    console.log(results);
    // CODE HERE: return to menu
}


// 4. Add Department submenu
async function addDepartmentQuery() {
    // console.log the "roles" table by querying the db
    const viewEmployeesQuery = `SELECT * FROM employees;`;
    const [results, data] = await db.query(viewEmployeesQuery);
    console.log(results);


    // log the change to the console.
    // "response.addRoleName" is the name of the new department
    // console.log("Added " + response.addRoleName + " role to the database.");
}


// 5. Add Role submenu
async function addRoleQuery() {
    const inquirer = require('inquirer');
    inquirer
        .prompt()
        .then((response) => {

            // log the change to the console.
            // "response.addRoleName" is the name of the new department
            console.log("Added " + response.addRoleName + " role to the database.");

            // CODE HERE
            // interact w/ sequel to add a new role to the db
            // including name, salary, and department id

            // CODE HERE: return to menu

        });
}


// 6. Add Employee submenu
async function addEmployeeQuery() {
    const inquirer = require('inquirer');
    inquirer
        .prompt()
        .then((response) => {

            console.log("Added " + response.addEmployeeFirstName + response.addEmployeeLastName + " to the database.");

            // CODE HERE
            // interact w/ sequel to add a new employee to the db
            // including first name, last name, role id (and from role id, the department id), and manager if any

            // CODE HERE: return to menu
        });
}


// 7. Update Employee Role submenu
async function updateEmployeeRoleQuery() {
    const inquirer = require('inquirer');
    inquirer
        .prompt()
        .then((response) => {

            console.log("Updated " + response.employeeToUpdate + "'s role.");

            // CODE HERE
            // interact w/ sequel to update an existing employee to the db
            // including role id (and from role id, the department id)

            // CODE HERE: return to menu
        });
}
















// export to index.js
module.exports = { viewDepartmentsQuery, viewRolesQuery, viewEmployeesQuery, addDepartmentQuery, addRoleQuery, addEmployeeQuery, updateEmployeeRoleQuery }