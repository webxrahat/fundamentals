const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/contacts", require("./routes/contectRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Your server is running on ${port}`);
});
