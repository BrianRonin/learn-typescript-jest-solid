/* eslint-disable */
    // voce pode criar tipos de função assim
type mapStringsCallBack = (item: string) => string

function mapStrings(
  array: string[],
  callbackfn: mapStringsCallBack
): void {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++){
    newArray.push(callbackfn(array[i]))
  }

  return console.log(newArray)
}

const array: string[] = ['cavalo', 'peixe', 'batata']
const arrayUppercase = mapStrings(array, item => item.toUpperCase())

console.log(arrayUppercase)
console.log(array)
