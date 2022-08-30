   //Exemplo abaixo de merda apenas pra demonstrar
  //como funcionaria o decorator sendo que badicamente
 //é mais facil falar que ele executa uma função antes da classe
//pelo menos é oque deu pra entender

class Pessoa {
  constructor(public cor: string ) {}
}

function decoratorDemonstração(target: any): any {
  console.log('Oie... do decorator')
  return target
}

const decoratorPessoa = decoratorDemonstração(Pessoa)
const pessoa = new Pessoa('roxo')
console.log('### demonstração apenas de como funciona o decorator ###')
console.log(pessoa)
console.log(decoratorPessoa)

   // Decorator é isso dai abaixo @ ele vai executar a função antes da classe
  // com o nome dele e vai passar no argumento dessa função pelo
 // menos nesse estudo a propria classe como argumento


@decorator
export default class Animal {
  constructor(public cor: string, ...args: any) {}
}
//tudo isso apenas pra definir que vai receber e retornar uma class
function decorator<
  t extends new (...args: any) => any
  >// \/ <== o decorator vai mandar a classe em si para a função
  (target: t): t {
  return class extends target {
    cor: string
    nome: string

    constructor(...args: any[]) {
      super(...args)
      this.nome = args[0]
      this.cor = args[1]
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('')
    }
  }
}

const animal = new Animal('roxo', 'buceta');
console.log(animal)


import x from './DecoratorsTest.js'
