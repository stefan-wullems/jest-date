import {isSameSecond} from 'date-fns'
import {checkDate, deriveMessage} from './utils'

export function toBeSameSecondAs(received, expected) {
  checkDate('received', received, toBeSameSecondAs, this)
  checkDate('expected', expected, toBeSameSecondAs, this)

  const messageContext = {
    name: toBeSameSecondAs.name,
    expected,
    received,
    invert: this.isNot,
  }

  return {
    pass: isSameSecond(received, expected),
    message: () => deriveMessage(messageContext),
  }
}