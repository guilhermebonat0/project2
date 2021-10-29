const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./api/routers')

routes(app)

app.use(cors())
app.listen(3001, () => {console.log('Servidor rodando na porta 3001')})