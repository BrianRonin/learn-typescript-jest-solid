/* eslint-disable */
// type any é qalquer tipo que não tenha um tipo defino por EX
// any = qualquer tipo. tipo não definido
// type inplicity, tipo não definido
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]))
console.log(showMessage(["1", "2", "3"]))
console.log(showMessage('ola'))
console.log(showMessage(5))

export default 'ronin'
