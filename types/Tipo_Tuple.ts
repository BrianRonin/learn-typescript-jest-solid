/* eslint-disable */
// Tupla ou Tuple em ingles é quando o array ou objeto
// tem um tipo pra cada indice do array ou objeto
                                // ? <== Opcional
const dadosCliente: [number, string?] = [1, 'Brian'];

dadosCliente[0] = 100
dadosCliente[1] = 'Laura'
// dadosCliente[2] = 'João'  //
//ERR: O tipo '"João"' não pode ser atribuído ao tipo 'undefined'.
console.log(dadosCliente)

console.log('### Definir resto do array ###')

//                      ...string[] <== O resto pode ser string
const dadosCliente2: [number, ...string[]] = [1, 'Brian'];

dadosCliente2[0] = 100
dadosCliente2[1] = 'Laura'
dadosCliente2[2] = 'João'

console.log(dadosCliente2)

console.log('### Utilizando Pop etc ###')

const dadosCliente3: [number, ...string[]] = [1, 'Brian'];

dadosCliente3[0] = 100
dadosCliente3[1] = 'Laura'
dadosCliente3[2] = 'João'

console.log(dadosCliente3)

// ambos são as mesmas coisas
const array1: readonly string[] = ['Luiz', 'Otávio']
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio']

export default 'ronin'
