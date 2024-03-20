// prompts for the main menu
const mainMenuPrompt = [
    {
        type: 'list',
        message: "What would you like to do?",
        name: 'mainMenuInq',
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
    },
]

// prompts for adding a department
const addDepartmentPrompt = [
    {
        type: 'input',
        message: "What is the name of the department?",
        name: 'addNewDepartment',
    },
]

// prompts for adding a role
const addRolePrompt = [
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
]

// prompts for adding an employee
const addEmployeePrompt = [
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
]

// prompts for updating an employee role
const updateEmployeePrompt = [
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
]




// exporting to index.js
module.exports = { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeePrompt }