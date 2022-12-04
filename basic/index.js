const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
app.use(saudacao)


app.listen(3001)