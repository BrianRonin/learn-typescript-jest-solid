/* eslint-disable */

let x;
if (typeof x === 'undefined') x = 20
//Checagem se existe ou não e se não existir dar valor padrão
console.log(x * 2)

export function createPerson(
  FirstName: string,  //Argumento
  LastName?: string   //Argumento
): {
  FirstName: string;  //tipo do Retorno
  LastName?: string;  //tipo do Retorno
} {
  return {
    FirstName,    //{ função }
    LastName,
  };
}

/**
 * É importante conferir o tipo do argumento
 * na função antes de tratar esse elemento na função
 * se ele não tiver tipo pra não dar erro
 */
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x
  return null
}

const squareOfTwoNumber = squareOf(2)
const squareOfTwoString = squareOf('2')

if (typeof squareOfTwoNumber === 'number') {
  console.log(squareOfTwoNumber + 2, 'hello')
  if (typeof squareOfTwoString === 'number') {
    console.log(squareOfTwoString)
  }
} else {
  console.log('conta invalida')
}


export default 'ronin'
