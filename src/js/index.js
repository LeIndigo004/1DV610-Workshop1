/**
 * The starting point of the application.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @author Jakob Rejdemyhr <jr223mt@student.lnu.se>
 * @version 1.0.0
 */

import readline from "readline"
import { GuessNumber } from "./projekt/guessNumber.js"

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let selectedGame = null

input.question("Välj ett nummer mellan 1-3:", function (number) {
  const intNumber = parseInt(number)
  console.log(intNumber + 'TESTTEST')
  selectedGame = intNumber
  input.close()
})

const guessNumberClass = new GuessNumber()

switch (selectedGame) {
  case 1:
    console.log('GAME 1 TEST')
    guessNumberClass.startGame()
    break
  case 2:
    console.log("Du valde nummer 2.")
    break
  case 3:
    console.log("Du valde nummer 3.")
    break
}
