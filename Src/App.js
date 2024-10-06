const express = require("express");
const app = express();
const { connectDB } = require("../Config/database");
const User = require("../Model/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "praval pratap",
    lastName: "singh",
    emailId: "pravalp949@gmail.com",
    password: "praval@123",
  });
 try{
  await user.save();
  res.send("user added succesfully");
 }
 catch(err){{
  res.status(400).send("Error saving the user" ,+ err.message);
 }}
 
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
