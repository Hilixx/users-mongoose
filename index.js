const express = require('express')
const app = express()
const conn = require('./db/conn')
const jwt = require('jsonwebtoken')
const secret = 'any'
const controller = require('./controller/controller')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/register', controller.registerUser )
app.post('/login', controller.loginUser)

app.listen(3000,()=>{
    console.log('servidor rodando')
})
