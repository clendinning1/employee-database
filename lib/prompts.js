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
        // CODE HERE
        // "choices" array should be a variable that holds each department in the sql database
        // name that displays should be the department name but what actually adds to the role table
        // should be the department id
        choices: [100, 110, 111],
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
        choices: [101, 102, 103],
    },
    {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'addEmployeeManagerInq',
        // CODE HERE
        // "choices" array should be a variable that holds each manager in the sql database
        // and a none option that sends "null" to the sql
        choices: ["opt1", "opt2"],
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