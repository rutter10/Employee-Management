const mysql = require('mysql');
const util = require('util');

const connection = require('./connection')

class Database {
  constructor(connection) {
   
    this.q = connection
  }

  addDepartment(department) {
    return this.q.query("INSERT INTO department SET ?", department);
  }

  addRole(role) {
    return this.q.query("INSERT INTO role SET ?", role);
  }

  addEmployee(employee) {
    return this.q.query("INSERT INTO employee SET ?", employee);
  }

  findAllRoles() {
    return this.q.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
  }

  findAllDepartments() {
    return this.q.query("SELECT department.id, department.name FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id");
  }

  findAllEmployees() {
    return this.q.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;");
  }

}
module.exports = new Database(connection)