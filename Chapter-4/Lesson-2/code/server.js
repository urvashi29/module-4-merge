// http
var http = require("http"); //

// create basic server
var server = http.createServer(function (req, res) {
  // if(req == "/products") {
  //     //data
  //     res.send(products);
  // }
  // if(req == "/products/:id") {
  //     res.send(product);
  // }

  console.log(res);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Listening to post 3000");
});

// request on a specific host
const options = {
  hostname: "www.facebook.com",
  port: 80,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(res.statusCode); //200

  res.on("data", (data) => {
    console.log(data);
  });

  res.on("error", (error) => {
    console.log(error);
  });
});

req.end();

// OS module
const os = require("os");

console.log(os.platform());
console.log(os.hostname());
console.log(os.arch());

// Path module
const path = require("path");

console.log(path.normalize("/foo/bar//fdhy///cbjdhj/.."));
console.log(path.join("/foo", "bar", "bvsah/djico", "cdkji"));
console.log(path.resolve("ffjo/hfej", "/fhej/fhe/fhe", "...", "edf/efef/e"));

// file system
// creating & removing folder
// mkdir, rmdir (async)
var fs = require("fs");

// fs.mkdir("newDir", (err) => {
//     console.log("directory created");
// });

// fs.rmdir("newDir", (err) => {
//   console.log("directory deleted");
// });

// we can create folder sync
// fs.mkdirSync("newDir", () => {
//     console.log("directory created");
// });

fs.rmdirSync("newDir", {}, () => {
  console.log("directory deleted");
});

// read & write (async methods)
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});

fs.writeFile("./test.txt", "Hello World", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log("content added");
});

// writeFileSync()
// readFileSync()
