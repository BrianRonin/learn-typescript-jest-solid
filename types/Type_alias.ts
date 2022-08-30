/* eslint-disable */

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type corPreferida = CorRGB | CorCMYK

type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade,
  salario: number,
  corPreferida: CorRGB | CorCMYK,
}

const brian: Pessoa = {
  nome: 'brian',
  idade: 20,
  salario: 0,
  corPreferida: "Ciano"
}

export default function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor}
}

console.log(brian)
console.log(setCorPreferida(brian, 'Preto'))
