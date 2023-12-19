// Import the employee service 
const employeeService = require('../services/employee.service');
// A function to handle the add employee request 

async function addEmployee(req, res) {
  console.log(req.body);
  // Call the employee service to add an employee to the database
  const employeeAdded = await employeeService.addEmployee(req.body);
  // If the employee is added successfully, return success response. Otherwise, return failure response 
  console.log(employeeAdded);
  if (employeeAdded) {
    // Send a success response back to the client
    const response = {
      status: 'success',
      message: 'Employee added successfully',
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: 'failure',
      message: 'Employee could not be added',
    };
    res.status(403).json(response);
  }
}

// Export the
module.exports = {
  addEmployee
};
