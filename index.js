const express = require("express");
const httpStatus = require("http-status");
require("dotenv").config();
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome to the API",
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
