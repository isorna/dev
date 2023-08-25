class User {
  // Private fields
  #name
  #surname

  constructor (name, surname) {
    this.#name = name
    this.#surname = surname
  }

  get name () {
    return this.#name
  }

  set name (newName) {
    if (typeof newName === 'string') {
      this.#name = newName
    } else {
      try {
        throw new TypeError('name should be an string')
      } catch (e) {
        console.error(e.name, e.message)
        if (e instanceof TypeError) console.log(e.stack)
      }
    }
  }

  get surname () {
    return this.#surname
  }

  set surname (newSurname) {
    if (typeof newSurname === 'string') {
      this.#surname = newSurname
    } else {
      try {
        throw new TypeError('surname should be an string')
      } catch (e) {
        console.error(e.name, e.message)
        if (e instanceof TypeError) console.log(e.stack)
      }
    }
  }

  getFullName () {
    return `${this.#name} ${this.#surname}`
  }
}

class Player extends User {
  // Private fields
  #game

  constructor (name, surname, game) {
    super(name, surname)
    this.#game = game
  }

  get game () {
    return this.#game
  }

  set game (newGame) {
    if (typeof newGame === 'string') {
      this.#game = newGame
    } else {
      try {
        throw new TypeError('game should be an string')
      } catch (e) {
        console.error(e.name, e.message)
        if (e instanceof TypeError) console.log(e.stack)
      }
    }
  }
}

const newUser = new User('Alvaro', 'Isorna')
const newPlayer = new Player('Alvaro', 'Isorna', '40k')

newUser.getFullName()
newPlayer.getFullName()
