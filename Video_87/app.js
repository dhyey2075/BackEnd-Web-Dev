const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/:slug', (req, res) => {
  let fname = req.params.slug
  fs.writeFileSync(`${fname}`,"Hello");
  res.send(`File names ${req.params.slug} is created succesfully.`)
  
})
app.get('/dhyey/index', (req, res) => {
  res.sendFile("index.html")
})
app.get('/', (req, res) => {
  res.send(`Hello World`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log(__dirname);


