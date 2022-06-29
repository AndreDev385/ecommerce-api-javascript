const express = require("express");
const morgan = require('morgan')
const { router } = require("./product/infrastructure/api/routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.use("/product", router);

app.listen(port, () => {
  console.log("Server runing");
});
