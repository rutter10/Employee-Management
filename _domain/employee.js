class Employee {
    constructor(id, firstName, lastName, roleId, managerId) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.roleId = roleId;
      this.managerId = managerId;
    }
  
    getId() {
      return this.id;
    }
  
    getFirstName() {
      return this.firstName;
    }
  
    getLastName() {
      return this.lastName;
    }
  
    getRoleId() {
      return this.roleId;
    }
  
    getManagerId() {
      return this.managerId;
    }
  }
  
  module.exports = Employee;