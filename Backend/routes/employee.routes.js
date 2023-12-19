// Import express module 
const express = require("express");
// Import the router module 
const router = express.Router();
// Import the employee controller
const employeeController = require("../controllers/employee.controller");
// Create a post request handler for the add employee route
router.post("/add-employee", employeeController.addEmployee);
// Export the router
module.exports = router; 