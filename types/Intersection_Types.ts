/* eslint-disable */

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade
type Pessoa2 = TemNome & TemSobrenome & TemIdade

const brian: Pessoa = {
  idade: 20,
  nome: 'brian',
}
console.log(brian)

// const brian2: Pessoa2 = {
//   idade: 20,
//   nome: 'brian',
// }
/**
 * O tipo '{ idade: number; nome: string; }' não pode ser atribuído ao tipo 'Pessoa2'.
 * A propriedade 'sobrenome' está ausente no tipo '{ idade: number; nome: string; }', mas é obrigatória no tipo 'TemSobrenome'.
 */

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersecao = AB & AC & AD
