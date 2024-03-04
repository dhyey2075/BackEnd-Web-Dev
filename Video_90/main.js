const express = require('express')
const app = express()

// const myLogger1 = function (req, res, next) {
//     console.log('LOGGED1')
//     next()
// }
const myLogger2 = function (req, res, next) {
    console.log('LOGGED2')
    next()
}
const timefun = function(req,res,next){
    req.requestTime = Date.now()
    console.log(date);
        
    console.log(res.requestTime);
    next()
}
app.use(timefun)
app.get('/', (req, res) => {
    let responseText = `Hello World!`
    responseText += `Request at ${req.requestTime}`
    res.send(responseText)
})

app.listen(3000)