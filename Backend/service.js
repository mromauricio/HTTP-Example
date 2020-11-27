const dao = require('./dao.js');

exports.AnalisaJson = (body) => {
  if (body.nome && body.cpf) {
    body.nome = body.nome.toUpperCase()
    console.log(body.nome)
    return ( dao.GravaJson(body) );
  }
  else {
    console.log('Json negado');
    return false;
  }
};

exports.ConsultaNome = (nome) => {
  nome = nome.toUpperCase()
  return ( dao.ProcuraNome(nome) )
}