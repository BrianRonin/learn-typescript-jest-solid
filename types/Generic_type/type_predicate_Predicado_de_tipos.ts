//predicate é usado pra confirmação como na função abaixo
//que vai retornar true se for um number e false se não
//usando predicate consigo confirmar na saida
//que o v é um nunmber se retornar true
export function isNumber(v: unknown): v is number {
  return typeof v === 'number'
}

console.log(isNumber('5124')) //false
console.log(isNumber(5)) //true

export function soma<t>(...args: t[]): number | null {
  const retorno = args.reduce((s, v) => {
    if (isNumber(s) && isNumber(v)) {//type Guard
      return s + v
    }
    return s
  }, 0);

  return retorno
}console.log([1, 'a'])
console.log(soma('a', 'b', 'c'))
console.log(soma(1, 2, 3))
  // Ao utilizar o spreed no argumento da função com a tipagem generic
 // ele vai definir a tipagem como primeiro argumento enviado
//console.log(soma('d', 2, 3))// ERROR: O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.
 // Então pra contornar isso deve preencher o argumento da função com
// spreed também, assim ele vai entender o argumento como um
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]))
