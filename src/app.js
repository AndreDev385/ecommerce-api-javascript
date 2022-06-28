const express = require("express");
const { router } = require("./product/infrastructure/api/routes");

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/product", router)


app.listen(port, () => {
  console.log("Server runing");
});
