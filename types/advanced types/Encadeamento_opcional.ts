export type Documento = {
  titulo: string
  texto: string
  data?: Date
}

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto'
} // Encadeamento opcional e Operador de coalescência nula //
 // Ao executar um metodo em uma chave que não existe lançaria um erro
// Por isso tem o '?', pra dizer que pode ou não existir
// Inves de retornar um erro vai retornar undefined porem da pra usar
// "??" e escolher oque deve retornar se não exister
// É muito igual ao 'if' e vai poupar muito codigo
console.log(documento.data?.toDateString() ?? 'não existe data')
 //Encadeamento opciona   /\
//Operadores de coalecencia nula \/
console.log(undefined ?? 'não')// não
console.log('dada' ?? 'não')// ''
console.log(null ?? 'não')// não
console.log(false ?? 'não')// false
console.log(0 ?? 'não')// 0
const x = 2 + 2 === 7
console.log(x ?? 'não')// false
//obs:
// ele só vai retornar o ?? se o retorno for null ou undefined.funciona no js
