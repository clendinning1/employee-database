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



// Query database
db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
});




// error for other requests
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// export to subMenus.js
module.exports = {  }