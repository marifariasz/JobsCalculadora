const express = require("express")
//executando o servidor
const server = express()
const routes = require("./routes")

const path = require('path')

//hablitar o req.body
server.use(express.urlencoded({extended:true}))
//habilita arquivos statics
server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))


server.use(express.static("public"))
server.use(routes)

server.listen(3000, ()=>console.log('rodando'))