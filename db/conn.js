const mongoose = require('mongoose')


async function main(){
    await mongoose.connect('mongodb://localhost:27017/test')
    console.log('conectou ao mongoose')
}

main().catch((err)=>{console.log(err)})


module.exports = mongoose