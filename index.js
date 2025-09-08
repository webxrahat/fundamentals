const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connctDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connctDb();
const app = express();
app.use(express.json());

app.use("/api/contacts", require("./routes/contectRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Your server is running on ${port}`);
});

// mongodb+srv://rjroko:<db_password>@mycluster0.ztjyay1.mongodb.net/
