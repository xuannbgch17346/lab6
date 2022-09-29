//khai báo module (package)
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

//set thư mục chứa views (giao diện - frontend)
app.set("views", path.join(__dirname, "/views/hbs"));
//set view engine (template engine)
app.set("view engine", "hbs");

//render ra trang home (index.hbs)
//get: get method
app.get("/", (req, res) => {
  let name = "Greenwich University";
  let address = "2 Pham Van Bach";
  let city = "Hanoi";
  res.render("index", { n: name, a: address, c: city });
});

app.get("/city", (req, res) => {
  //let country = "Vietnam";
  let cities = ["Hanoi", "HCM City", "Da Nang", "Can Tho"];
  let providers = ["FPT", "Viettel", "VNPT"];
  res.render("city", {
    country: "Vietnam",
    cities: cities,
    providers: providers,
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/logout", (req, res) => {
  res.render("logout");
});

//chạy web server
app.listen(port, () => {
  console.log("Server is running at: http://localhost:3000");
});
