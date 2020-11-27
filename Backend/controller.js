const express = require('express');
const router = express.Router();
const service = require('./service.js');


router.get('/destino1', function (req, res) {
  res.status(200).send('Resposta do servidor DESTINO 1 feito agora');
  // Repare que o status padrão do response bem sucedido é 200
})

router.get('/speedy', (req, res) => {
  res.status(201).send('Maurício');
  // Repare que o status padrão foi modificado
})

router.get('/destino3', (req, res) => {
  res.header('Content-type','application/json');
  // Repare que sem o Content-type o User Agent não exibe o conteúdo da response adequadamente

  let myJson = [ {"nome":"Maria","cpf":"123.456.789-10"},{"nome":"Joao","cpf":"000.000.000-00"},{"nome":"Pedro","cpf":"999.999.999-99"},{"nome":"Kawe","cpf":"333.333.999-99"}];
  myJson = JSON.stringify(myJson);
  //myJson = JSON.parse(myJson);     // necessário quando o request é via Ajax
  res.send(myJson);
})

router.post('/',  (req, res) => {
  if ( service.AnalisaJson(req.body) ) 
  {
    res.status(201).send();      
  }  
  else res.status(400).send();
});

router.get('/destino4', (req, res) => {
  if ( service.ConsultaNome(req.query.nome) ) 
  {
    res.status(200).send();
  }  
  else res.status(404).send(); 
})

module.exports = router;