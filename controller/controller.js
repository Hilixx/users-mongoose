const User = require('../models/Users')

module.exports = class controller{

    static async registerUser(req,res){
        const nome = req.body.nome
        const login = req.body.login
        const password = req.body.password
        res.status(200).end(`Nome:${nome}`)
        const user = new User({nome,login,password})
        await user.save()
    }
    static async loginUser(req,res){
        const login = req.body.login
        const password = req.body.password
        console.log(login,password)
        const loginAuth = await User.findOne({login: login})
        const passAuth = await User.findOne({password: password})
        if(loginAuth && passAuth){
            res.status(200).end(`bem vindo: ${login}`)
        }else{
            res.status(401).end('acesso negado')
        }
        
        
    }

    
}   