export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0

    const nums = numbers.split(',').map((n) => parseInt(n, 10))
    return nums.reduce((sum, n) => sum + n, 0)
  }
}
