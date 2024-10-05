const express = require("express");

const app = express();
const { adminauth, userauth } = require("../Middlewares/Auth.js"); // Ensure these are correctly defined

// Applying adminauth middleware to /admin route
app.use("/admin", adminauth);

// Define a GET route for /user
app.get("/user", userauth, (req, res) => {
  res.send("User Data Sent");
});

// Route to get user data with error simulation
app.get("/getUserdata", (req, res) => {
  try {
    throw new Error("Some error occurred");
    // res.send("user data sent"); // This will be unreachable because of the error
  } catch (err) {
    res.status(500).send("Some error occurred, contact support team");
  }
});

// Define a GET route for /user/login
app.get("/user/login", (req, res) => {
  res.send("User logged in Successfully");
});

// Define a GET route for /admin/getAllData
app.get("/admin/getAllData", (req, res) => {
  res.send("All data Sent");
});

// Define a GET route for /admin/deleteUser
app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

// Start the server
app.listen(4000, () => {
  console.log("Server is successfully listening on port 4000");
});
