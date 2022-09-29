//khai báo module (package)
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

//set thư mục chứa views (giao diện - frontend)
app.set("views", path.join(__dirname, "/views"));
//set view engine (template engine)
app.set("view engine", "hbs");

//render ra trang home (index.hbs)
//get: get method
app.get("/", (req, res) => {
  let name = "xuannbgch17346";
  let address = "2 pham van bach";
  res.render("index", {n : name, a: address});
});

//chạy web server
app.listen(port, () => {
  console.log("Server is running at: http://localhost:3000");
});
