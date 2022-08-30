/**
 * O mais facil de todos e dificil de quebrar com ts
 * porem com a mais dificil explicação oficial, basicamente
 * voce quebra se retornar uma tipagem diferente.
 * a tipagem do retorno de todas instancias e comportamento
 * devem ser a mesma
 */
/**
 * explicação de liskov se uma animal é mamífero e não mama
 * então não deveria ser mamífero.
 * Liskov pede pra ter coerencia quando for criar 'é um'
 */

abstract class Somar {
  constructor(protected num1: number, protected num2: number) {}
  somar(): number {
    return this.num1 + this.num2
  }
}

// class Pessoa extends Somar{
//   num1 = 'brian'
//   num2 = 'matias'
//   somar(): string {
//   return this.num1 + this.num2
// }
