// SETUP
// import mysql2
const mysql = require('mysql2/promise');

// connect to mysql
const connection = await mysql.createConnection(
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



// QUERIES
// 1. View All Departments 
async function viewDepartmentTable() {
    // console.log the "department" table
    ('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}

// 2. View All Roles query
function queryRolesTable() {
    // console.log the "roles" table
    db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
    });
}

// 3. View Employees query
function queryEmployeesTable() {
    // console.log the "employees" table
    db.query('SELECT * FROM employees', function (err, results) {
        console.log(results);
    });
}

// 4. Add Department
function queryEmployeesTable() {
    // console.log the "employees" table
    db.query('ALTER TABLE department', function (err, results) {});
}

// 5. Add Role


// 6. Add Employee


// 7. Update Employee Role





// export to subMenus.js
module.exports = { viewDepartmentTable, queryRolesTable, queryEmployeesTable }