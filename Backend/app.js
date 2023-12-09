// Import the express framework
const express = require("express");
// Set the port number for the server
const port = 4000;
const cors = require("cors");
// Import the mysql2 library for database connection
const mysql = require("mysql2");
// Create an instance of the express application
const app = express();
app.use(cors());
// Database configuration
const dbConfig = {
  connectionLimit: 10, // Maximum number of connections in the pool
  host: "localhost", // Database host (in this case, localhost)
  database: "demoapp", // Database name
  user: "demoapp", // Database user
  password: "KMAj)Qi0GB/(UOKl", // Database user's password
};
// Create a connection to the database using the configuration
const connection = mysql.createConnection(dbConfig);
// Connect to the database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database!");
});
app.use(express.json());
// Define a route for the root endpoint ("/") that sends a simple message to the client
app.get("/", (req, res) => {
  res.send("Hello there, this is your Express server!");
});
app.post("/add-employee", (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
  const values = [first_name, last_name, email, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding employee:", err);
      res.status(500).send("Error adding employee");
    } else {
      console.log("Employee added successfully");
      res.status(200).send("Employee added successfully");
    }
  });
});
app.post("/login", (req, res) => {
  // Log the request body for debugging purposes
  console.log(req.body);

  // SQL query to retrieve an employee with the provided email and password
  const sql = `SELECT * FROM employee_test WHERE email = ? AND password = ?`;

  // Parameters to replace placeholders in the SQL query
  const params = [req.body.email, req.body.password];

  // Execute the query with parameters
  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Check if any results were returned
    if (results.length > 0) {
      // If a match is found, send a success response
      res.status(200).json({ message: "Login successful", user: results[0] });
    } else {
      // If no match is found, send an authentication failure response
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server is listening on port ${port}`));
