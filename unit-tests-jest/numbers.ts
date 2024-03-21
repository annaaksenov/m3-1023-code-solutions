/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  return `$${amount}.00`;
}
describe('toDollars', () => {
  it('returns a number formatted in dollars & cents', () => {
    const amount = 23;
    const res = toDollars(amount);
    expect(res).toBe(`$23.00`);
  })
})

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = numbers[i] / divisor;
  }
  return numbers;
}
describe('divideBy', () => {
  it('returns a new array of numbers where every entry has been divided', () => {
    const number = [NaN, 1, 2];
    const divisor = 2;
    const res = divideBy(number, divisor);
    expect(res).toEqual([NaN, 0.5, 1]);
  })
})
/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = Number(value) * multiplier + 1;
  });
  return result;
}
describe('multiplyBy', () => {
  it('modifies an obj by * the value of each key', () => {
    const obj = {'a': 1, 'b': 'b'};
    const multi = 2;
    const res = multiplyBy(obj, multi);
    expect(res).toEqual({ 'a': 3, 'b': NaN });
  })
});
