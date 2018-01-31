const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//Toda requisição que chegar dentro do meu backend passará por esse middleware (urlEncoded)
//extended - interpretar mais tipos de informações na submissão de um formulário
server.use(bodyParser.urlencoded({extended: true}))

//dentro do ciclo de requisição, quando chegar no backend vai passar primeiro pelo urlencoded
//em seguida passa pelo json, fazendo uma interpretação 
server.use(bodyParser.json())

server.listen(port, function(){
   console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server