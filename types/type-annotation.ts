/* eslint-disable */
   /* Tipos Basicos */
      //: Type anotation,
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.5, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('qualquer-symbol')// symbol
// let big: bigint = 10n; // bigint

/* Tipos por referencias */
// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
// tanto type[] ou Array<type>. São a mesma coisa
let arrayOfStrings: Array<String> = ['a', 'b', 'c'];
let arrayOfStrings2: string[] = ['a', 'b']

// Objetos                                     ? opcional
let pessoa: {
  nome: string, idade: number, adulto?: boolean // Primeiro infere o timpo com:
} = { //Dica: ao apertar CONTROL + ESPAÇO vira as indicações
  nome: 'brian',
  idade: 21,
};

//Funções    (X:type,   y:type     ): return type { codigo }
function soma(x: number, y: number,): number {
  return x + y
}
//           (X:type,    y:type   ) => return type = ( funcao )
const soma2: (x: number, y: number) => number = (x, y) => x + y

export default 'ronin'
