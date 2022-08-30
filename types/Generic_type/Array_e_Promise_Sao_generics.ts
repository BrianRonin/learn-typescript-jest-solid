type MeuTipo = number

async function promise() {
  return 1
}
                                     //\/
export function promise2(): Promise<MeuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

promise().then((resultado) => console.log(resultado + 1))
promise2().then((resultado) => console.log(resultado + 1))
