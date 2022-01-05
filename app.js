// console.log("Hello from NodeJS")

// const Person = require('./person')
// const person1 = new Person('Hoge', 20)
// person1.greeting()

// Question a,b
const Sum = require("./reference/sum");
const sum = new Sum();
console.log(sum.mySum(1, 2));

// Question c,d
const myArr = [1, 2, 3, 4];
const result = [...myArr, 5, 6, 7];

console.log(result);

// Question e
const mySecondArr = new Map();

function multi(myArr, mySecondArr) {
  myArr.forEach((element) => {
    mySecondArr.set(element, element * 2);
  });
  return mySecondArr;
}
console.log(multi(myArr, mySecondArr));

// Question f
function average(mySecondArr) {
  let sum = 0;
  let ave = 0;
  let count = 0;
  mySecondArr.forEach(function (key, val) {
    sum += val;
    count += 1;
  });
  ave = (sum / count) | 0;
  return ave;
}

console.log(average(mySecondArr));

function bye() {
  console.log("googbye");
}
setTimeout(bye, 3000);

const Employee = {
  name: "john",
  email: "test@test.com",
  department: "sales",
  startDate: "2022/01/01",
};

console.log(Employee);

const Person = {
  name: Employee.name,
  email: Employee.email,
};

console.log(Person);

const http = require("http");
const path = require("path");
const fs = require("fs");

// const server = http.createServer((req, res) => {
// if(req.url === '/home'){
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html>')
//     res.write('<head><title>Home page</title></head>')
//     res.write('<body>')
//     res.write('<h1>Hola!</h1>')
//     res.write('</h1>')
//     res.write('</html>')
//     return res.end()
// }

//build the file path
// let filePath = path.join(
//   __dirname,
//   "public",
//   req.url === "/" ? "index.html" : req.url
// );

//extension of the file
// let extname = path.extname(filePath);

//initial content type
// let contentType = "text/html";

//check for ext and set content type
// switch (extname) {
//   case ".js":
//     contentType = "text/javascript";
//     break;
//   case ".css":
//     contentType = "text/css";
//     break;
//   case ".json":
//     contentType = "application/json";
//     break;
//   case ".png":
//     contentType = "image/png";
//     break;
//   case ".jpg":
//     contentType = "image/jpg";
//     break;
// }

//check if contentType is text/html but no .html file extension
// if (contentType === "text/html" && extname === "") filePath += ".html";

//read file
// fs.readFile(filePath, (err, content) => {
//   if (err) {
//     if (err.code === "ENOENT") {
//       //error or no entity
//       //Page not found
//       fs.readFile(
//         path.join(__dirname, "public", "404.html"),
//         (err, content) => {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           res.end(content, "utf8");
//         }
//       );
//     } else {
//       //server error
//       res.writeHead(500);
//       res.end(`Server error: ${err.code}`);
//     }
//   } else {
//     //success
//     res.writeHead(200, { "Content-Type": contentType });
//     res.end(content, "utf8");
//   }
// });
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
