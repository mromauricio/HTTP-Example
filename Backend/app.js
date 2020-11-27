const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());  // Necessário para interpretar o Json enviado no post
app.use(cors())

let controller = require('./controller.js');
app.use('/', controller);

app.listen(port, () => {
    console.log(`Rodando aplicação no endereço http://localhost:${port}`)
})
