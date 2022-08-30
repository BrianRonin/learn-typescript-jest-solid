describe('testando numero', () => {
  it('should test numbers', () => {
    const number = 10

    expect(number).toBe(10) // é igual?
    expect(number).toEqual(10) // é igual? checa o obj inteiro alem da variavel

    expect(number).not.toBeFalsy() // é falso
    expect(number).toBeTruthy() // é verdadeiro?

    expect(number).toBeGreaterThan(9) // maior que
    expect(number).toBeGreaterThanOrEqual(10) // maior que ou igual
    expect(number).toBeLessThan(11) // menor que
    expect(number).toBeLessThanOrEqual(10) // menor que ou igual

    // expect(number).toBeCloseTo(10.001) // perto
    // expect(number).toBeCloseTo(9.891) // perto

    expect(number).not.toBeNull // não é null?
    expect(number).toHaveProperty('toString') // checa se tem essa propriedade EX: number.toString()
  })
})

describe('testando obj', () => {
  it('should test obj', () => {
    const person = {
      name: 'Brian',
      age: 21,
    }
    const copyPerson = { ...person }
    const person2 = {
      name: 'Luiz',
      age: 30,
    }

    expect(person).toEqual(copyPerson)
    expect(person).toHaveProperty('age', 21)
    expect(person.name).toBe('Brian')
  })
})
