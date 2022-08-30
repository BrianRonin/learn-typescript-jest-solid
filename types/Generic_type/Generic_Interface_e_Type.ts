//Igual uma função voce pode definir um valor padrão pro generics
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
//A diferença de type pra interface pra definir OBJETO no
//Interface voce utiliza 'igual' = {}
type PessoaProtocolo2<T, U> = {
  nome: T;                 //\\
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Brian',
  sobrenome: 'Matias',
  idade: 21
}//Igual uma função voce pode sobrescrever o argumento
                     //sobrescreveu o padrão
const aluno2: PessoaProtocolo<number, number> = {
  nome: 20,
  sobrenome: 82,
  idade: 21
}

const aluno3: PessoaProtocolo = {
  nome: 'Brian',
  sobrenome: 'Matias',
  idade: 21
}

////////// Generic Interface com Funcao /////////

