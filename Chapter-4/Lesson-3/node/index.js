// // Buffer

// const fs = require("fs");
// const data = fs.readFileSync("./text.txt");
// console.log(data);

// // create a buffer of 10 bytes
// const bufferSpace = new Buffer.alloc(10);
// console.log(bufferSpace);

// // 5 byte buffer is created for array values
// const buffTwo = new Buffer.from([10, 20, 30, 40, 50]);
// console.log(buffTwo);

// // create a buffer space of 5 bytes for "hello"
// const bufferStr = new Buffer.alloc(5, "hello");
// console.log(bufferStr);

// // extract data
// const buf = new Buffer.alloc(5, "world", "utf-8");
// console.log(buf);

// const str = buf.subarray(2, 4); //return the buffer value for "rl"
// console.log(str);

// //convert buffer to string
// const bufferData = new Buffer.alloc(5, "hello", "utf-8");
// const strData = bufferData.toString("utf-8");
// console.log(strData); //hello

// // copying of buffer
// const buff1 = new Buffer.alloc(5, "hi", "utf-8"); //<Buffer 68 69 83 97 88>
// const buff2 = new Buffer(5); //<Buffer 00 00 00 00 00>

// // console.log(buff1, buff2);

// buff1.copy(buff2);
// console.log(buff2);

// URL
const url = require("url");

const urlStr =
  "https://grow.almabetter.com/web-dev/learn/full-stack-web-development/FOUNDATION_TRACK/bootcamp-wd-m4-c3-l3/Concept-Notion";

const parsedUrl = url.parse(urlStr); //give all the information about the url
console.log(parsedUrl.protocol); //https
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.hash);

// create/format url
const urlObj = {
  protocol: "https",
  slashed: true,
  host: "www.airmeet.com",
  port: null,
  hostname: "www.airmeet.com",
  query: { lecture: 2 },
  path: "path/to/file/cb/cvjod",
  search: "?query=6",
};

console.log(url.format(urlObj));

// Task: read a data from from text file, then convert buffer to string and write in another file

// creating & using custom module
const colors = require("mynodemodule");
const randomColor = colors.getRandomColor();

console.log(randomColor.name);
