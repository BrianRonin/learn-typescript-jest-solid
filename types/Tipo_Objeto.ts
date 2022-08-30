/* eslint-disable */

const objeto1 = { // auto completa pra mim que é tipo objeto
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objeto1.chaveA = 'outro valor'; // consigo mudar o valor da chave do objeto
// objeto1.chaveC = 'nova chave'; // não consigo criar uma nova chave no objeto

const objeto2: {
  readonly chaveA: string, // readonly vai tornar o objeto não editavel
} = {
  chaveA: 'Valor A',
}

//objeto2.chaveA = 'Valor B';// Não é possível atribuir a 'chaveA' porque é uma propriedade de somente leitura.

////////////////////////////////////////////////////////////////////////
// Se eu quiser inserir um valor fora do objeto eu posso fazer assim
//              1# forma seria assim
// Porem deixaria de funcionar o autocomplete não sendo a melhor forma
const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoA.chaveA = 'outro valor'; // consigo mudar o valor da chave do objeto
objetoA.chaveC = 'nova chave'; // não consigo criar uma nova chave no objeto
console.log(objetoA)

const objetoB: {
  chaveA: string,
  chaveB: string,
  chaveC?: string, //2# forma deve inserir o valor a chave como opcional
  [key: string]: unknown; //3# forma qualquer chave a ser criada como string
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoB.chaveA = 'outro valor'; // consigo mudar o valor da chave do objeto
objetoB.chaveC = 'nova chave';
objetoB.chaveD = 'nova chaveD';
objetoB.chaveS = 'chave S'
console.log(objetoB)


export default 'ronin'
