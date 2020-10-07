let bdJson = [];

exports.GravaJson = (body) => {
  let tamBd = bdJson.length;
  bdJson.push(body);
  if (bdJson.length == tamBd + 1) {
    console.log (bdJson);
    return true
  }
  else return false
}

exports.ProcuraNome = (nome) => {
  for (i=0; i<bdJson.length; i++){
    if (nome == bdJson[i].nome) {
      console.log ('Localizado nome');
      return true
    }
  }
  return false
}