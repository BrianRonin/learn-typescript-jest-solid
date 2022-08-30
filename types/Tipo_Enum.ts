/* eslint-disable */
/**
 * Enum é parecido com um objeto com algumas peculiaridade,
 * 1 - ele pode ser reatribuido sem dar problema
 * 2 - ser usado como tipo de um argumento de função por exemplo
 * ponto negativo, ele deixa voce por até sua mãe no argumento e não reclama
 */
enum Cores { //Por padrão ele definira o valor como 0, 1, 2..
  vermelho = 1, //Voce pode reatribuir o valor
 // azul = "teste", //porem se não for numero quebrara a retribuição automatica
  amarelo = 3, // então colocando numero ele continua do numero anterior
  marrom,
}
// se voce chamar a chave ele retorna o valor
// se voce chamar o valor ele retorna a chave
console.log(Cores.vermelho)
console.log(Cores[1])

enum Cores {
  sinza = 6
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor])
}

//escolhaCor(1245616) <== ele não reclama

export default 'Ronin'
