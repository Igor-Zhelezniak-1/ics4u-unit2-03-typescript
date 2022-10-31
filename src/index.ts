/**
 * The program
 *
 *
 * By: Igor
 * Version: 1.0
 * Since:   2022-09-17
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const stack = new MrCoxallStack()

// Input & Process
while (true) {
  const uInput = prompt('Enter a number (! to exit): ')

  if (uInput === '!') {
    break
  } else {
    const number = parseInt(uInput)
    if (isNaN(number)) {
      console.log(`${uInput} is not a number`)
    } else {
      stack.Push(number)
    }
  }
}

console.log('')
console.log(stack.getStack())
const exitValue = stack.exitNumber()
console.log(`Exited: ${exitValue} out of stack`)

console.log('\nDone.')
