export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0

    let delimiterPattern = /,|\n/ // default delimiters: comma or newline
    let numbersSection = numbers

    // Check for custom delimiter syntax: //[...]<newline>
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n')
      const delimiterLine = parts[0].substring(2) // remove leading "//"
      numbersSection = parts.slice(1).join('\n')

      if (delimiterLine.startsWith('[') && delimiterLine.endsWith(']')) {
        // Extract the delimiter inside [ ]
        const delimiter = delimiterLine.slice(1, -1)
        const escapedDelimiter = delimiter.replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&',
        )
        delimiterPattern = new RegExp(escapedDelimiter, 'g')
      } else {
        // fallback for single char delimiter
        const escapedDelimiter = delimiterLine.replace(
          /[.*+?^${}()|[\]\\]/g,
          '\\$&',
        )
        delimiterPattern = new RegExp(escapedDelimiter, 'g')
      }
    }

    // Split numbers and convert to integers
    const nums = numbersSection
      .split(delimiterPattern)
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n))

    // Throw error if there are negative numbers
    const negatives = nums.filter((n) => n < 0)
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`)
    }

    // Ignore numbers greater than 1000
    const validNums = nums.filter((n) => n <= 1000)

    return validNums.reduce((sum, n) => sum + n, 0)
  }
}
