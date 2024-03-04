var slugify = require('slugify')

console.log(slugify('some string')) // some-string

// if you prefer something other than '-' as separator
console.log(slugify(`!@#$%^&*()D hyey 2075 ;'./,`))
const http = require('node:http');
const hostname = '127.0.0.7';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'HTML');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});