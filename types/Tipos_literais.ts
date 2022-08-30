/* eslint-disable */

// let x: 100 = 10 // O tipo '10' não pode ser atribuído ao tipo '100'.

/**
 * Isso é um tipo literal igual a const
 * seguindo o exemplo do x ele é um subtipo de number
 * porem literal 100 não pode ser diferente de 100
 */

let x: 100 = 100
let a = 100 as const  // Mesma coisa
const b = 100

const person = {
  name: 'Luiz' as const, // Eu consigo transformar tanto um objeto quanto um let
  last_name: 'miranda'  // em uma constate desse jeito
} //person.name = 'brian'//O tipo '"brian"' não pode ser atribuído ao tipo '"Luiz"'

                // tipo literal só aceita essas strings literais
function escolhaCor(cor: 'vermelho' | 'amarelo' | 'azul'): string {
  return cor;
}

//console.log(escolhaCor('roxo'))
//O argumento do tipo 'roxo' não é atribuível ao parâmetro do tipo "vermelho" | "amarelo" | "azul"'
export default 'Ronin'
