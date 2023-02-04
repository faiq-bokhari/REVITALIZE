const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;
const user = require("./routes/userRoutes");
const sleep = require("./routes/sleepRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use("/users", user);
app.use("/sleeps", sleep);

app.listen(port, () => console.log(`Server started on port ${port}`));
