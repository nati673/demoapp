// Import the db connection file 
const connection = require('../config/db.config');
// A function to handle the login request
async function logIn(employeeData) {
  try {
    console.log("Inside login service");
    console.log(employeeData);
    const sql = `SELECT * FROM employee_test WHERE email = '${employeeData.email}' AND password = '${employeeData.password}'`;
    // Execute the query
    const result = await connection.query(sql);
    console.log(result);
    // If the query returns a result, return the result. Otherwise, return null 
    if (result.length > 0) {
      return result;
    } else {
      return null;
    }
  } catch (err) {
    // Log the error to the console
    console.error('An error occurred:', err);
  }
}
// Export the function
module.exports = {
  logIn
};