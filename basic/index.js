const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('/api/produto')(app,'com param!')

app.listen(3001)