const { prompt } = require("inquirer");
const database = require("./database");
require("console.table");

async function promptUser() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "Find All Employees",
          value: "FIND_EMPLOYEES"
        },
        {
          name: "Find All Roles",
          value: "FIND_ROLES"
        },
        {
          name: "Find All Departments",
          value: "FIND_DEPARTMENTS"
        },
        {
          name: "Update Employee Roles",
          value: "UPDATE_ROLE"
        },
      ]
    }
  ]);

  switch (choice) {
    case "FIND_EMPLOYEES":
      return viewEmployees()
    case "FIND_ROLES":
      return await database.findAllRoles();
    case "FIND_DEPARTMENTS":
      return await database.findAllRoles();
    case "UPDATE_ROLE":
      return await updateEmployeesRole();
  }
}

async function viewEmployees() {
    console.table(await database.findAllEmployees())
    promptUser()
}

async function updateEmployeesRole() {
  const employees = await database.findAllEmployees();

  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role do you want to update?",
      choices: employeeChoices
    }
  ]);

  const roles = await database.findAllRoles();

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role do you want to assign the employee?",
      choices: roleChoices
    }
  ]);

  return await database.updateEmployeeRole(employeeId, roleId);

}

promptUser()