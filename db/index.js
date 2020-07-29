const connection = require("./connection");
class DB {
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees(){
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name;")
    }
    findAllDepartments(){
        return this.connection.query("SELECT department.id, department.name;")
    }
    findAllRoles(){
        return this.connection.query("SELECT role.id, role.title. department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;")
    }
    updateEmployeeRole(){
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?",[roleId, employeeId])
    }


}
module.exports = new DB(connection);