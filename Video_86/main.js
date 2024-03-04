const a = require("./mymodule.js");
const http = require('node:http');
const hostname = '127.0.0.7';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello Dhyey\n');
  console.log(a +" and ");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// import {ob,b} from "./mymodule.js"
// console.log()
// console.log(ob);
// import dhyey from "./mymodule.js"
// console.log(dhyey)
// let b = require("./mymodule2.js")
// console.log(b)