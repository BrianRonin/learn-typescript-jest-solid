const arr = [1, 2, 3, 6, 812, 38, 8, 5, 4]

  // Eu posso passar argumentos de tipagem no ts, <Number>
 // E tambem posso usar um tipo Generico como tipagem <T>
// Pra usar um tipo generico basta colocar qualquer coisa <QualquerCoisa>

//É possivel utilizar o tipo com argumento no type
//colocando apenas do lado do nome da função pra receber de argumento
type filterCk<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean

// A tipagem generica vai receber a tipagem sugerida como argumento
// na hora que for executar o codigo, igual o javaScript podendo ser muito
// util como no caso a seguir onde só vai ser definido o tipo pelo argumento
// que pode ser qualquer coisa                              \/
export function myFilter<T>(array: T[], callbackfn: filterCk<T>): T[] {
//É possivel passar uma tipagem de argumento pra um tipo especifico tambem
  const newArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const filteredArray = arr.filter((v) => v < 5)
const myFilteredArray = myFilter(arr, (v) => v < 5)
const myFilteredArrayG = myFilter<number>(arr, (v) => v < 5)

console.log(filteredArray)
console.log(myFilteredArray)
console.log(myFilteredArrayG)


//////////////////// Outro exemplo com classe ////////////////////////

export class ArrayG<T> {
  constructor(
    protected _array: T[]
  ) {}
  get array () {
    return this._array
  }

  filter(argFunction: filterCk<T>): unknown {
    const newArray: T[] = []
    for (let i = 0; i < this._array.length; i++) {
      if(argFunction(this._array[i])) newArray.push(this._array[i])
    }
    return newArray
  }
}

const x = new ArrayG([5, 2, 6, 2, 'ola'])

console.log('### Teste Com Classe ###')
console.log(x.array)
console.log(x.filter(v => v < 5))
