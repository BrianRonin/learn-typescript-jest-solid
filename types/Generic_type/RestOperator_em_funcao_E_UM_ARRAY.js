//////////// RestOperator em js é um array ////////////////

function x(...argumentos) {
  const x = []
  for (let i = 0; i < argumentos.length; i++){
    x.push(argumentos[i])
  }
  return x
}
console.log(x.arguments)

////////// pegando um obj pela chave ///////////////////////
const obj = {
  nome: 'Brian',
  sobrenome: 'Matias',
  ano: 20
}

function getkey (obj, key) {
  return obj[key]
}

//console.log(getkey(obj, 'nome'))

///////////// teste //////////////////////////////

class Pessoa21 {
  idade = 20

  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  nomeCompleto() {
    return this.nome += this.sobrenome
  }
}
const brian = new Pessoa21('brian', 'Cristiano')
const cristiano = new Pessoa21('brian2', 'Cristiano')
const cristiano2 = new Pessoa21('brian3', 'Cristiano')

class arrayClass {
  classes = []
  colocar(classe) {
    this.classes.push(classe)
  }
}


const array = new arrayClass()
array.colocar(brian)
array.colocar(cristiano)
array.colocar(cristiano2)
console.log(array.classes)
