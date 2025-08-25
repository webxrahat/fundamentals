const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
 res.send("hello world");
});

app.post("/", (req, res) => {
 console.log(req.body);
 res.send("post response");
});

app.listen(port, () => {
 console.log(`Your server is running on ${port}`);
});
