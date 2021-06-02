class Role {
    constructor(id, title, salary, departmentId) {
      this.id = id;
      this.salary = salary;
      this.departmentId = departmentId;
      this.title = title;
    }
  
    getId() {
      return this.id;
    }
  
    getSalaray() {
      return this.salary;
    }
  
    getDepartmentId() {
      return this.departmentId;
    }
  
    getTitle() {
      return this.title;
    }
  }
  
  module.exports = Role;