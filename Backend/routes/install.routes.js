// Import express module 
const express = require("express");
// Import the router module 
const router = express.Router();
// Import the install controller
const installControllers = require("../controllers/install.controller");
// Create a post request handler for the install route
router.get("/install", installControllers.installDirectFromApi);
// Export the router
module.exports = router;