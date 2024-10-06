const express = require("express");
const app = express();
const { connectDB } = require("../Config/database");
const User=require("../Model/user");



app.use(express.json());
app.post("/signup", async (req, res) => {
  // console.log("Request body:", req.body);

  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message); // Adjusted error handling
  }
});

// Start the server
connectDB()
  .then(() => {
    console.log("Database connection Established");
    app.listen(4000, () => {
      console.log("Server is successfully listening on port 4000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
