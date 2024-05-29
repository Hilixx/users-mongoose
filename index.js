const express = require('express')
const app = express()
const conn = require('./db/conn')
const jwt = require('jsonwebtoken')
const secret = 'any'
const controller = require('./controller/controller')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

function verifyJWT(req,res,next){
    const token = req.headers['x-access-token']
    jwt.verify(token, secret, (err, decoded)=>{
        if(err) return res.status(401).end(

        )

        req.userId = decoded.userId
        next()
    })
}

app.post('/register', controller.registerUser )
app.post('/login', controller.loginUser)
app.get('/cliente',verifyJWT, (req,res)=>{
    res.status(200).json({message:"bem vindo ", userId: req.userId})
    
})

app.listen(3000,()=>{
    console.log('servidor rodando')
})
