// SETUP




// QUERIES
// 1. View All Departments 


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
