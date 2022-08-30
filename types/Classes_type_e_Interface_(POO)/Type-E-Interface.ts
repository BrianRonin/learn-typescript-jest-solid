//type é mais simples de se utilizar e o mais popular
//assim define-se um type alias
type TipoNome = { //Type tira a opção de usar protected, private
  nome: string; //Assim sempre sendo public tudo dentro
}
type TipoSobrenome = {
  sobrenome: string;
}

type nomeCompleto = {
    nomeCompleto: () => string;
}
//em Type Voce pode usar implements pra implementar um ou quantos types quiser
//Inves de extends usa Implements, não precisando do super
export class Pessoa implements TipoNome, TipoSobrenome, nomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string
  ) {}

  nomeCompleto(): string {
   return this.nome + " " + this.sobrenome
  }
}

const pessoa = new Pessoa('Brian', 'Ronin')
console.log('### Type ###')
console.log(pessoa.nomeCompleto());

////////////////// Interfaces /////////////////
//Interface é basicamente a mesma coisa que o type porem usada mais em
//Objetos mudando algumas coisas
// 1- o modo de concatenação dos tipos
type TipoPessoa = TipoNome & TipoSobrenome & nomeCompleto // Tipo
interface TipoPessoa2 extends TipoNome, TipoSobrenome, nomeCompleto {} // Interface

// 2- definindo interface
interface TipoNome2 {} //Declaration mergin
interface TipoNome2 { // 3- eu posso reatribuir sem problemas igual enum
  nome: string;
}
interface TipoSobrenome2 {
  sobrenome: string;
}

interface nomeCompleto2 {
    nomeCompleto: () => string;
}
//igual type eu posso implementar um ou mais
export class Pessoa2 implements TipoNome2, TipoSobrenome2, nomeCompleto2 {
  constructor(
    public nome: string,
    public sobrenome: string
  ) {}

  nomeCompleto(): string {
   return this.nome + " " + this.sobrenome
  }
}

export const PessoaOBJ: TipoPessoa2 = {
  nome: 'Brian',
  sobrenome: 'Ronin',
  nomeCompleto() {
   return `${this.nome} ${this.sobrenome}`
  }
}

console.log('### Interface ###')
const pessoa2 = new Pessoa2('Brian', 'Ronin')
console.log(pessoa2.nomeCompleto());
console.log('### Interface.obj ###')
console.log(PessoaOBJ.nomeCompleto());
