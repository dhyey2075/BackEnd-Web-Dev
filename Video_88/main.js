
const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))
app.get('/dhyey/:slug', (req, res) => {
  res.send(`Hello World ${req.params.slug}`)
  console.log(req.params);
  console.log(req.query);
})
app.get('/dhyey/index', (req, res) => {
  res.sendFile("index.html")
})
app.get('/index',(req,res)=>{
  res.sendFile('public/index.html',{root : __dirname})
})
app.post('/testing',(req,res)=>{
  console.log("this is a post method");
  res.send("Hello world Post")
})

app.get('/download',(req,res)=>{
  console.log("File is downloading");
  res.download('public/myfile.txt',{root : __dirname})
})
app.get('/json',(req,res)=>{
  res.json('public/test.json',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log(__dirname);
