// Import the express module 
const express = require('express');
// Import the router module 
const router = express.Router();
// Import the login router
const loginRouter = require('./login.routes');
// Import the add employee router
const addEmployeeRouter = require('./employee.routes');
// Import the install router 
const installRouter = require('./install.routes');
// Add the login routers to the middleware chain
router.use(loginRouter);
// Add the add employee router to the middleware chain
router.use(addEmployeeRouter);
// Add the install router to the middleware chain
router.use(installRouter);

// Export the router
module.exports = router;