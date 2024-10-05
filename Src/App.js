const express = require("express");

const app = express();

// app.use("/user",rH,[rH2,rH3,rH4],rH5)

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user!!");
    // res.send("Response");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3");
    res.send("Response 3");
  }
);

app.listen(4000, () => {
  console.log("Server is Successfully listening on port 4000");
});
