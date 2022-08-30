/* eslint-disable */
// Void é undefined, "nada", não definido
function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'brian',

  exibirNome(): void {
 // return "ola" // O tipo 'string' não pode ser atribuído ao tipo 'void'
 }
}



semRetorno('Luiz', 'Brian')
pessoa.exibirNome()

export default 'ronin'
