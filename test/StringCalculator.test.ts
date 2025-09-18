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

  it('should return the sum of multiple numbers', () => {
    expect(calculator.add('1,2,3')).to.equal(6)
    expect(calculator.add('10,20,30,40')).to.equal(100)
    expect(calculator.add('4,5,6,7,8,9')).to.equal(39)
  })

  it('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).to.equal(6)
    expect(calculator.add('4\n5\n6')).to.equal(15)
  })
})
