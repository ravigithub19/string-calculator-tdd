import { expect } from 'chai'
import { StringCalculator } from '../src/StringCalculator'

describe('StringCalculator', () => {
  let calculator: StringCalculator

  beforeEach(() => {
    calculator = new StringCalculator()
  })

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).to.equal(0)
  })

  it('should return the number itself if only one number is provided', () => {
    expect(calculator.add('1')).to.equal(1)
  })

  it('should return the sum of two numbers', () => {
    expect(calculator.add('1,5')).to.equal(6)
  })
})
