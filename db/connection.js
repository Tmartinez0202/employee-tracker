const util = require ("util");
const mysql = require ("mysql");
const connection = mysql.createConnection({
    host: "localhost", user: "root", password: "Brandnew12!", database: "employees"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;