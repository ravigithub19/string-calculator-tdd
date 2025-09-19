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

  it('should support custom delimiter defined at the start', () => {
    expect(calculator.add('//;\n1;2')).to.equal(3)
    expect(calculator.add('//#\n2#3#4')).to.equal(9)
  })

  it('should throw an exception for a single negative number', () => {
    expect(() => calculator.add('1,-2,3')).to.throw(
      'negative numbers not allowed -2',
    )
  })

  it('should throw an exception for multiple negative numbers', () => {
    expect(() => calculator.add('1,-2,-5,3')).to.throw(
      'negative numbers not allowed -2,-5',
    )
  })

  it('should throw an exception even with custom delimiters if negatives exist', () => {
    expect(() => calculator.add('//;\n2;3;-4')).to.throw(
      'negative numbers not allowed -4',
    )
  })

  it('should ignore numbers bigger than 1000', () => {
    expect(calculator.add('2,1001')).to.equal(2)
    expect(calculator.add('1000,1001,3')).to.equal(1003)
    expect(calculator.add('500,600,2000')).to.equal(1100)
  })

  it('should support delimiters of any length', () => {
    expect(calculator.add('//[***]\n1***2***3')).to.equal(6)
    expect(calculator.add('//[abc]\n4abc5abc6')).to.equal(15)
    expect(calculator.add('//[---]\n10---20---30')).to.equal(60)
  })
})
