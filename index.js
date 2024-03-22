// import mysql2, inquirer, and process for exit
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const { exit } = require('process');

// inquirer prompts in prompts.js
const { mainMenuPrompt, addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeePrompt } = require('./lib/prompts');

// db for running mysql server
let db;




// main menu inquirer funct
async function mainMenuFunct() {


    // response reads whatever answer you give to the main menu prompt
    const response = await inquirer.prompt(mainMenuPrompt);

    // variable for cleaner code
    const mainMenuResponse = response.mainMenuInq;


    // MENU OUTPUTS
    if (mainMenuResponse == 'View All Departments') {
        console.log(mainMenuResponse);
        viewDepartmentFunct();

    } else if (mainMenuResponse == 'View All Roles') {
        console.log(mainMenuResponse);
        viewRolesFunct();

    } else if (mainMenuResponse == 'View All Employees') {
        console.log(mainMenuResponse);
        viewEmployeesFunct();

    } else if (mainMenuResponse == 'Add a Department') {
        console.log(mainMenuResponse);
        addDepartmentFunct();

    } else if (mainMenuResponse == 'Add a Role') {
        console.log(mainMenuResponse);
        addRoleFunct();

    } else if (mainMenuResponse == 'Add an Employee') {
        console.log(mainMenuResponse);
        addEmployeeFunct();

    } else if (mainMenuResponse == 'Update an Employee Role') {
        console.log(mainMenuResponse);
        updateEmployeeFunct();

    } else if (mainMenuResponse == 'Exit') {
        console.log('Exiting...');
        process.exit();
    } else {
        console.log('Error');
    }


}




// SUBMENUS

// 1. View All Department submenu
async function viewDepartmentFunct() {

    // query the db
    const viewDepartmentQuery = `SELECT * FROM department;`;
    const [results, data] = await db.query(viewDepartmentQuery);

    // log results from db query
    console.table(results);

    // return to main menu
    mainMenuFunct();
}

// 2. View All Roles submenu
async function viewRolesFunct() {

    // query the db
    const viewRolesQuery = `SELECT * FROM roles;`;
    const [results, data] = await db.query(viewRolesQuery);

    // log results from db query
    console.table(results);

    // return to main menu
    mainMenuFunct();
}


// 3. View Employees submenu
async function viewEmployeesFunct() {

    // query the db
    const viewEmployeesQuery = `SELECT * FROM employees;`;
    const [results, data] = await db.query(viewEmployeesQuery);

    // log results from db query
    console.table(results);

    // return to main menu
    mainMenuFunct();
}


// 4. Add Department submenu
async function addDepartmentFunct() {
    // pulling input from the user via inquirer and async/await
    // using `template literals` for the sql queries
    // ('addNewDepartmentInq' is the name of the input value in the prompts.js file)

    // 'response' pulls the user input from the addDepartmentPrompt question
    const response = await inquirer.prompt(addDepartmentPrompt);

    // above line & console.log below do the same thing as this promise.prototype.then:
    // inquirer.prompt(addDepartmentPrompt)
    //     .then((response) => {
    //         // takes the user response and logs it to the console!
    //         console.log(response.addNewDepartment);
    //     });


    // query (add department name as inputted by user)
    const addDepartmentQuery = `INSERT INTO department (name) VALUES ('${response.addNewDepartmentInq}');`;
    // sending above query to the db
    const [results, data] = await db.query(addDepartmentQuery);


    // log added department
    console.log(`Added ${response.addNewDepartmentInq} department to the database.`);

    // return to main menu
    mainMenuFunct();
}




// let allDepts = new Promise(() => {
//     const depts = [];
//     db.query('SELECT * FROM departments', (err, res) => {
//         res.forEach((department) => {
//             depts.push(department.name);
//         });
//     });
//     return depts;
// });

// const allDepts = async () => {
//     const depts = [];
//     await db.query('SELECT * FROM departments', (err, res) => {

//         console.log(res);

//         res.forEach((department) => {
//             depts.push(department.name);
//         });
//     });
//     return depts;
// }






// QUERY FOR 5
const allDepts = async () => {

    // query the db for department info
    const viewDepartmentQuery = `SELECT * FROM department;`;
    const rows = await db.query(viewDepartmentQuery);

    // log results from db query
    // console.table(results);

    // .name is the names of the depts
    // .map takes the orig array and transforms it into a new array based off the callback funct
    // .map(row => row.name)
    return rows[0].map(row => row.name);

}

// INQUIRER FOR 5
const addRolePrompt2 = [
    {
        type: 'list',
        message: "What department does the role belong to?",
        name: 'addRoleDepartmentInq',
        choices: allDepts,
    },
]


// 5. Add Role submenu
async function addRoleFunct() {
    const response = await inquirer.prompt(addRolePrompt);
    const response2 = await inquirer.prompt(addRolePrompt2);

    const newTitle = response.addRoleTitleInq;
    const newSal = response.addRoleSalaryInq;
    const chosenDeptName = response2.addRoleDepartmentInq;

    // query for newDeptID via the chosenDeptName we pulled
    const queryForDeptID = `SELECT id FROM department WHERE name = '${chosenDeptName}';`
    const [newDeptObject, data] = await db.query(queryForDeptID);

    // pulls the value
    let newDeptID = newDeptObject.map(a => a.id);

    // query
    const addRoleQuery = `INSERT INTO roles (title, salary, department_id) VALUES ('${newTitle}', ${newSal}, ${newDeptID})`
    const results = await db.query(addRoleQuery);

    // log added role
    console.log(`Added ${newTitle} role to the database.`);

    // return to main menu
    mainMenuFunct();
}






// QUERY 1 FOR SUBMENU 6
const empQuery2 = async () => {

    // query the db for roles info
    const viewRolesQuery = `SELECT * FROM roles;`;
    const rows = await db.query(viewRolesQuery);

    // .name is the names of the depts
    // .map takes the orig array and transforms it into a new array based off the callback funct
    return rows[0].map(row => row.title);

}


// QUERY 2 FOR SUBMENU 6
const empQuery3 = async () => {

    // query the db for department info
    const viewManagersQuery = `SELECT * FROM employees;`;
    const rows = await db.query(viewManagersQuery);

    return rows[0].map(row => row.first_name);
}

// INQUIRER 1 FOR SUBMENU 6
const addEmployeePrompt2 = [
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'addEmployeeRoleInq',
        choices: empQuery2,
    },
]

// INQUIRER 2 FOR SUBMENU 6
const addEmployeePrompt3 = [
    {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'addEmployeeManagerInq',
        choices: empQuery3,
    },
]


// 6. Add Employee submenu
async function addEmployeeFunct() {

    // pulling the user input from the addEmployeePrompt questions
    const response = await inquirer.prompt(addEmployeePrompt);
    const response2 = await inquirer.prompt(addEmployeePrompt2);
    const response3 = await inquirer.prompt(addEmployeePrompt3);

    // variables for cleaner query
    // (addEmployee[X]Inq is the location for each input in prompts.js)
    // (response.addEmployee[X]Inq calls the user input to this particular response)
    const newFirstName = response.addEmployeeFirstNameInq
    const newLastName = response.addEmployeeLastNameInq
    const chosenRoleTitle = response2.addEmployeeRoleInq
    const chosenManagerFirstName = response3.addEmployeeManagerInq


    // translate the role name into the role id
    const queryForRoleID = `SELECT id FROM roles WHERE title = '${chosenRoleTitle}';`
    const [chosenRoleObject, data] = await db.query(queryForRoleID);
    let newRoleID = chosenRoleObject.map(a => a.id);


    // translate the manager name into the manager id
    const queryForManagerID = `SELECT id FROM employees WHERE first_name = '${chosenManagerFirstName}';`
    const [chosenManagerObject, data2] = await db.query(queryForManagerID);
    let newManagerID = chosenManagerObject.map(a => a.id);



    // query
    const addEmployeeQuery = `INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES ('${newFirstName}', '${newLastName}', ${newRoleID}, ${newManagerID});`;
    // send query to db
    const [results, data3] = await db.query(addEmployeeQuery);

    // log added role
    console.log(`Added ${newFirstName} ${newLastName} to the database.`);

    // return to main menu
    mainMenuFunct();
}



// 7. Update Employee Role submenu
async function updateEmployeeFunct() {

    // pulling the user input from the updateEmployeePrompt questions
    const response = await inquirer.prompt(updateEmployeePrompt);

    // variables for cleaner query
    const employeeChoice = response.employeeToUpdateInq
    const employeeNewRoleID = response.updatedEmployeeRoleInq

    // query
    // translate into sql: `replace [employeeChoice]'s role with [employeeNewRole]`
    // i have no idea if the indexes will work
    // but [0] is supposed to be their existing id, [1] is supposed to be their first name, and [2] their last
    const updateEmployeeQuery = `UPDATE employees SET roles_id = REPLACE(roles_id, ${employeeChoice[4]}, ${employeeNewRoleID}) WHERE first_name = '${employeeChoice[1]}' AND last_name = '${employeeChoice[2]}'`;
    // send query to db
    const [results, data] = await db.query(updateEmployeeQuery);

    // log added role
    console.log(`Updated ${employeeChoice}'s role`);

    // return to main menu
    mainMenuFunct();
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
        console.log(`index.js connected to the employees_db database.`)
    );

    // open main menu
    mainMenuFunct();
}

runSQLDB();