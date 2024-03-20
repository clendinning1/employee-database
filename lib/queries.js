




// to do after break:
// 1/2/3. fill out remaining 3 functs.
// only differences will be:
// a) the next two additives have multiple prompts
// b) the final additive is an update rather than an add
// THEN
// 4. get the main menu functioning properly
// THEN
// potentially done??? do recording and submit???
// maybe add deletes/bonuses if time???










// 6. Add Employee submenu
async function addEmployeeFunct() {
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





