// Import express module 
const express = require("express");
// Import the router module 
const router = express.Router();
// Import the login controller 
const loginController = require("../controllers/login.controller");
// Create a simple get request handler to send a response back 
router.get("/", (req, res) => {
  res.send("Testing!");
});
// Pass the login request to the login controller
router.post("/login", loginController.logIn);
// Export the router  
module.exports = router;  