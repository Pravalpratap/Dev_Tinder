const express = require("express");

const app = express();
const { adminauth,userauth } = require("../Middlewares/Auth.js");

// Applying adminauth middleware to /admin route
app.use("/admin", adminauth);

// Define a GET route for /user
app.get("/user",userauth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/user/login",(req,res)=>{
  res.send("User logged in Succesfully")
})
// Define a GET route for /admin
app.get("/admin/getAllData",(req,res)=>{
  res.send("All data Sent")
})
app.get("/admin/deleteUser",(req,res)=>{
  res.send("Deleted a user")
})


app.listen(4000, () => {
  console.log("Server is successfully listening on port 4000");
});
