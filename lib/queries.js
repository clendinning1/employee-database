




// to do:

// 1. choices need to pull from db in prompts.js
// 2. the final additive is an update rather than an add
// 3. get the main menu functioning properly
// 4. FORMAT LISTS
// THEN
// potentially done??? do recording and submit???





// 7. Update Employee Role submenu
async function updateEmployeeRoleFunct() {
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





