const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const usuarioApi = require('./api/usuario')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.listen(3001)