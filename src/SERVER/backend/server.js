const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;
const user = require("./routes/userRoutes");
const recipeFilters = require("./routes/recipeFilterRoutes");
const sleep = require("./routes/sleepRoutes");
const exercise = require("./routes/exerciseRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use("/users", user);
app.use('/recipefilter', recipeFilters)
app.use("/sleeps", sleep);
app.use("/exercises", exercise);

app.listen(port, () => console.log(`Server started on port ${port}`));
