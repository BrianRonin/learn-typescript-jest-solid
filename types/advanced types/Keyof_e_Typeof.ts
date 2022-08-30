//Com typeof eu consigo pegar o tipo automatico atribuido pelo ts
type CoresObj = typeof coresObj
//Com keyof eu consigo pegar todas chaves e valores de um obj  //obs: não sei se funciona com class metodos etc
type keysCoresObj = keyof CoresObj

const coresObj = { //ts cria uma tipagem automatica pro obj
  vermelho: 'red',
  verde: 'green',
  azul: 'blue'
}
//Se eu quero receber apenas uma chave do tipo devo colocar todas chaves possiveis
function traduzirCor(cor: keysCoresObj, cores: CoresObj) {
  return cores[cor]
}

console.log(traduzirCor('verde', coresObj))
console.log(traduzirCor('vermelho', coresObj))
console.log(traduzirCor('azul', coresObj))
