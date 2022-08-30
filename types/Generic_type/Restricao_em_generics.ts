  //extends é um limitador generic
 //keyof define que é uma chave de algum obj
//type getKey = <O, K extends keyof O>(objeto: O, key: K,) => O[K]
type getKey = <O, k extends keyof O>(object: O, key: k) => O[k]

// Mesma coisa com interface
interface getKey2 { //<== 1 diferença
  <O, k extends keyof O>(object: O, key: k): O[k]
}                                         //\\ 2 diferença

const obj = {
  nome: 'brian',
  sobrenome: 'cristiano'
}

//Pra tipar a função inteira tem que definir como uma variavel
// const variavel: tipagemFunção = () =>
const getKey: getKey = function (Object, Key) {
  return Object[Key]
}

console.log(getKey(obj, 'nome'))

/////// Com array não precisa disso apenas obj ////////////////////
const array = [
  'brian', 'cristiano'
]

function getKeyArray<T>(objeto: T[], chave: number): T {
  return objeto[chave]
}

console.log(getKeyArray(array, 0))
