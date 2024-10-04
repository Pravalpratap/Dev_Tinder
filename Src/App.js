const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Namastae From the Dashboard");
});

app.use("/hello", (req, res) => {
  res.send("Helo helo helo");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is Successfully listening on port 3000");
});
