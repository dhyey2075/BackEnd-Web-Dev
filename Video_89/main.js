const express = require('express')
const app = express()
const port = 3000
const shop = require('./routes/shop')
app.use('/shop',shop)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})