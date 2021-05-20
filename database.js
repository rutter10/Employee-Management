const mysql = require('mysql');
const util = require('util');

let q;
class Database {
  constructor() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password'
    });

    connection.connect(function (err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      console.log('connected as id ' + connection.threadId);
    });

    q = util.promisify(connection.query);
  }

  addDepartment(department) {
    return q.query("INSERT INTO department SET ?", department);
  }

  addRole(role) {
    return q.query("INSERT INTO role SET ?", role);
  }

  addEmployee(employee) {
    return q.query("INSERT INTO employee SET ?", employee);
  }

  findAllRoles() {
    return q.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
  }

  findAllDepartments() {
    return q.query("SELECT department.id, department.name FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id");
  }

  findAllEmployees() {
    return q.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;");
  }

}