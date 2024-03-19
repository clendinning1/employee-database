// SETUP
// import express
const express = require('express');
// import mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to mysql
const db = mysql.createConnection(
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
// 1. View All Departments query
function queryDepartmentTable() {
    // console.log the "department" table
    db.query('SELECT * FROM department', function (err, results) {
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


// MISC
// error for other requests
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// export to subMenus.js
module.exports = { queryDepartmentTable, queryRolesTable, queryEmployeesTable }