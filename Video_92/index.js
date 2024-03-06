const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/:slug', (req, res) => {
    let arr = [];
    for(let i=0;i<3;i++){
        arr.push(Math.floor(1 + Math.random()*9))
    }
    let name = "dhyey";
    res.render("inde",{name,arr});
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})