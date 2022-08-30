/* eslint-disable */
//unknow vem antes do any e é mais seguro

let x: any;
x = 100
x = 'luiz'
x = 900
x = '10' //Conm any ele pega o ultimo valor atribuido
const y = 800
console.log(x + y)

let z: unknown;
z = 100
z = 'luiz'
z = '900'
z = 10
const r = 800        //Com unknow ele reclama
//console.log(z + r)// O objeto é do tipo 'desconhecido'.

// Agora fazendo essa verificação é possitvel por isso é mais seguro
if (typeof z === 'number') console.log(z + r)


export default 'ronin'
