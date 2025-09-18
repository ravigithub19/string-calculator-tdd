export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0

    // Support both commas and new lines as delimiters
    const nums = numbers.split(/,|\n/).map(n => parseInt(n, 10))

    return nums.reduce((sum, n) => sum + n, 0)
  }
}
