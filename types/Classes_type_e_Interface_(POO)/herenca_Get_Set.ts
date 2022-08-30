//classes primarias podem ser chamadas de base class. super class. parent class.
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    private cpf: string,
  ) { }

  metodoGenerico(): number {
    return 1 + 1
  }

  get Idade(): number {
    return this.idade
  }
  get Cpf(): string {
    return this.cpf.replace(/\D/g, '')
  }
  set Cpf(cpf: string) {
    this.cpf = cpf
  }
  get NomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

export class Aluno extends Pessoa {
  constructor (
    nome: string,
    sobrenome: string, //Pra modificar o constructor de uma subclasse é necessario
    idade: number,    //Chamar o super e caso Não queira resetar totalmente o construtor
    cpf: string,     //Basta eu apenas receber os valores no super assim e não precisa declarar
    public sala: string,//Public ou private por exemplo, a não ser o elemento novo pra subclasse
  ) {
    super(nome, sobrenome, idade, cpf)
  }

  metodoMae(): number {
    console.log('chamando metodo mãe')
    //para acessar a super class utilizasse super.Metodo_desejado
    return super.metodoGenerico() //
  }
 }
export class Cliente extends Pessoa {
  get NomeCompleto(): string {
    return 'isso vem de Cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('brianPessoa', 'Cristiano', 30, '48165600842')
const aluno = new Aluno('brianAluno', 'Cristiano', 20, '48165600842', '4B')
const cliente = new Cliente('brianCliente', 'Cristiano', 10, '48165600842')

console.log(pessoa.Idade, aluno.Idade, cliente.Idade)
console.log('##verificando alteção do metodo da classe mãe##')
console.log(pessoa.NomeCompleto)
console.log(aluno.metodoMae())
console.log(cliente.NomeCompleto)
