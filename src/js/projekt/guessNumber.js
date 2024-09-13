import readline from 'readline'

/**
 * klass.
 */
export class GuessNumber {
  #correctNumber = Math.round(Math.random() * 100)
  #isGameOver = false

  /**
   * Hej.
   *
   * @returns {Number} - A number.
   */
  get () {
    return this.#correctNumber
  }

  /**
   * Game.
   */
  startGame () {
    const input = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    while (!this.#isGameOver) {
      input.question('Guess a number:', function (number) {
      /*  if (typeof value === 'number') {
          console.log('Write a number. Try again!')
          input.close()
        } */
        if (number === this.#correctNumber) {
          console.log('\x1b[34mYou guessed the right number!\x1b[0m')
        }
        input.close()
      })
    }
  }
}
