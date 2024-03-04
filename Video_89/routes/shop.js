const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("Shop Home page")
})
router.get('/:slug',(req,res)=>{
    res.send(`This is ${req.params.slug} section of shop`)
})
module.exports =  router