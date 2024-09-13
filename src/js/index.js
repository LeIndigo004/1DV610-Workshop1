/**
 * The starting point of the application.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @author Jakob Rejdemyhr
 * @version 1.0.0
 */

import readline from 'readline'
import { GuessNumber } from './projekt/guessNumber.js'

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/*
 input.question('What is your name?', function (name) {
  console.log(`Hello ${name}`)
  input.close()
}) */
const guessNumberClass = new GuessNumber()
input.question('Välj ett nummer mellan 1-3:', function (nummer) {
  const intNummer = parseInt(nummer)
  switch (intNummer) {
    case 1: console.log(guessNumberClass.startGame())
      break
    case 2: console.log('Du valde nummer 2.')
      break
    case 3: console.log('Du valde nummer 3.')
      break
  }
  input.close()
})
