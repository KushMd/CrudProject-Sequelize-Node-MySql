require("dotenv").config();
require("rootpath")();
// require("_helpers/db.js");
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./_middleware/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// console.log(process.env);

// api routes
app.use("/users", require("./users/users.controller"));

// global error handler
app.use(errorHandler);

const port =
  process.env.NODE_ENV === "Production" ? process.env.PORT || 8080 : 4000;

app.listen(port, () => console.log("Server listening on port " + port));
