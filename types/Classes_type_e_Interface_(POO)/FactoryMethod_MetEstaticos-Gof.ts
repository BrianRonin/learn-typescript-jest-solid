export class Pessoa {
  static idadePadrao = 0
  static cpfPadrao = '000.000.000-00'

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) { }
  metodoNormal(): void{
    console.log(Pessoa.cpfPadrao)
  }
//Um exemplo interessante de criar uma instancia pela propria class
//utilizando metodo statico          FACTORY METHOD
  static criaPessoa(nome: string, sobrenome: string): Pessoa{
    return new Pessoa (nome, sobrenome, 0, '000.000.000-00')
  }
}

const pessoa = Pessoa.criaPessoa('Brian', 'Matias')
pessoa.cpf = '5813333'
console.log(pessoa)
