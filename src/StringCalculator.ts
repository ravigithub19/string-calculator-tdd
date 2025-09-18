export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0

    let delimiterPattern = /,|\n/ // default delimiters: comma or newline
    let numbersSection = numbers

    // Check for custom delimiter syntax: //delimiter\nnumbers
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n')
      const delimiterLine = parts[0].substring(2) // remove leading "//"
      numbersSection = parts.slice(1).join('\n') // rest is numbers

      // Escape regex special characters in custom delimiter
      const escapedDelimiter = delimiterLine.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&',
      )
      delimiterPattern = new RegExp(escapedDelimiter, 'g') // global flag ensures all occurrences are split
    }

    // Split numbers and convert to integers
    const nums = numbersSection
      .split(delimiterPattern)
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n)) // ignore empty strings

    // Throw error if there are negative numbers
    const negatives = nums.filter((n) => n < 0)
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`)
    }

    return nums.reduce((sum, n) => sum + n, 0)
  }
}
