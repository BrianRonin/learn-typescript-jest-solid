/* eslint-disable */

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  if (typeof a === 'string' && typeof b === 'string') return a + b
  return 'erro'
}

console.log(addOrConcat("10", "20"));
console.log(addOrConcat(10, 20));

export default 'ronin'
