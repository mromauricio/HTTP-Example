const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());

app.use(cors())

app.get('/destino1', function (req, res) {
    res.status(201).send('Resposta do servidor DESTINO 1');
//    res.header('location', 'http://dicasdeprogramacao.com.br/')
//    res.header('access-control-allow-origin',
// 	'*')
    // res.status(307).send()
})

app.get('/destino2', (req, res) => {
    res.send('Resposta do servidor DESTINO 2');
})

app.get('/destino3', (req, res) => {
    let myJson = [{"nome":"Maria","cpf":"123.456.789-10"},
    {"nome":"Joao","cpf":"000.000.000-00"},
    {"nome":"Pedro","cpf":"999.999.999-99"},
    {"nome":"Kawe","cpf":"333.333.999-99"}];
    myJson = JSON.stringify(myJson);
    //myJson = JSON.parse(myJson);     //Ajax
    res.send(myJson);
})

app.get('/destino4', (req, res) => {
    if (req.query.nome=='xpto'){
        res.status(200).send()
    }
    else res.status(404).send();
})

app.post('/destino1',  (req, res) => {
    if (req.body.cpf=='') {
        console.log('Json negado')
        res.status(406).send();
    }
    else {
        console.log('JSON recebido',req.body);
        res.status(201).send();
    }
});
  

app.listen(port, () => {
    console.log(`Rodando aplicação no endereço http://localhost:${port}`)
})