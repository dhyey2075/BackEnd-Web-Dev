const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.get('/family', (req, res) => {
  let name = "Dhyey";
  let search = "India";
//   let text = `${req.params.slug}`.toUpperCase().slice(0,1) + `${req.params.slug}`.slice(1)
  res.render("index",{name : "Family", Home : "Members", Features : "About"})
})
app.get('/:slug', (req, res) => {
    let name = "Dhyey";
    let search = "India";
    let text = `${req.params.slug}`.toUpperCase().slice(0,1) + `${req.params.slug}`.slice(1)
    res.render("index",{name : "Dhyey",Home : "Home", Features:"Features"})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})