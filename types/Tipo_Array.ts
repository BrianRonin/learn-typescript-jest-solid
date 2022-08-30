// Array<type> - Type[] <- array

function multiplicaArgs(...args: number[]): number {
  return args.reduce((a, v) => a * v, 1)
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((a, v) => a + v)
}

function toUpperCase(...args: string[]): string[] {
  return args.map(v => v.toUpperCase())
}

const result = multiplicaArgs(1, 2, 3)
const concatenacao = concatenaStrings('a', 'b', 'c')
const upper = toUpperCase('a', 'b', 'c')

console.log(result)
console.log(concatenacao)
console.log(upper)
