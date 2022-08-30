{
  interface iPerson {
    name: string
    age: number
    setName(name: string): void
  }
  interface iCar {
    nameCar: string
  }
  class Person implements iPerson {
    name = 'brian'
    age = 20
    setName(name: string) {
      this.name = name
    }
  }
  class Car implements iCar {
    nameCar = 'citroen'
  }
  class PersonWithCar {
    constructor(protected person: iPerson, protected car: iCar) {}
    getName() {
      return console.log(this.person)
    }
  }
  const Mock = () => {
    const person = new Person()
    const car = new Car()
    const personWithCar = new PersonWithCar(person, car)

    return {
      person,
      car,
      personWithCar,
    }
  }

  ;(function () {
    const { person, car, personWithCar } = Mock()

    person.setName('Matias')
    personWithCar.getName()
  })()
}

;(() => {
  class Y {
    name: string = ''
  }
  class X {
    constructor(public y: Y) {}
    getNameY() {
      return console.log(this.y.name)
    }
  }
  const y = new Y()
  const x = new X(y)
  y.name = 'brian'
  x.getNameY()
})()
