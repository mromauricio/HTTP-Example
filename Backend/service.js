const dao = require('./dao.js');

exports.AnalisaJson = (body) => {
  if (!body.nome || !body.cpf) {
    console.log('Json negado');
    return false;
  }
  else {
      return ( dao.GravaJson(body) );
  }
};

exports.ConsultaNome = (nome) => {
  if (nome == 'xpto') return false
  return ( dao.ProcuraNome(nome) )
}