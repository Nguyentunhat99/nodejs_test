const express = require("express");
const app = express();
const { default: axios } = require("axios");
const fs = require("file-system");
const port = 3000;

function readFileTxt() {
  //đọc file
  const data = fs.readFileSync("data.txt", "utf8");
  console.log(data);
}
readFileTxt(); //đọc file

//check số nguyên tố
function checkPrime(n) {
  let flag = 1;

  if (n < 2)
    return (flag = 0); 
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }

  return flag;
}
let arrNummber = [
  1, 22, 3, -7, -6, 7, 5, -3, 66, 99, 33, 11, 17, 78, 2, 53, 32, -55,
];
for (let i = 0; i < arrNummber.length; i++) {
  if (checkPrime(arrNummber[i]) == 1) console.log(arrNummber[i]);
}
checkPrime(arrNummber);
console.log(resultPrime);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get(
  "/home",
  function (req, res, next) {
    let time = new Date();
    let month = time.getMonth() + 1;
    let day = time.getDay();
    let year = time.getFullYear();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    console.log([hour, minutes].join(":") + " " + [day, month, year].join("/"));
    next();
  },
  (req, res) => {
    res.send("Welcome to our website!");
  }
);

app.get(
  "/about",
  function (req, res, next) {
    let time = new Date();
    let month = time.getMonth() + 1;
    let day = time.getDay();
    let year = time.getFullYear();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    console.log([hour, minutes].join(":") + " " + [day, month, year].join("-"));
    next();
  },
  (req, res) => {
    res.send("About us");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
