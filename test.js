// import mysql2
const mysql = require('mysql2/promise');

let db;


// 1. View All Departments submenu
async function viewDepartments() {
    // console.log the "department" table
    const viewDptQuery = `SELECT * FROM department;`;
    const [results, data] = await db.query(viewDptQuery);
    console.log(results);
}

// connect to mysql
async function run() {
    db = await mysql.createdb(
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