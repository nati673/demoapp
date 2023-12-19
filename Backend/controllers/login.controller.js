// Import the login service 
const loginService = require('../services/login.service');

// A function to handle the login request 
async function logIn(req, res, next) {
  console.log(req.body);
  // Call the login service to check if the employee exists in the database
  const employee = await loginService.logIn(req.body);
  // If the employee exists and the password matches, return success response. Otherwise, return failure response 
  if (employee) {
    // Send a success response back to the client
    const response = {
      status: 'success',
      message: 'Logged in successfully',
    };
    res.status(200).json(response);
  } else {
    // Send a failur response back to the client
    const response = {
      status: 'failure',
      message: 'Access denied',
    };
    res.status(403).json(response);
  }
}
// Export the function
module.exports = {
  logIn
}