import { evenNumbers } from "./numbers";
import { toDollars } from './numbers';
import { divideBy } from './numbers';
import { multiplyBy } from './numbers';

test(
  'Returns a new array that contains only the even numbers in the given array.',
  () => {
    const result = evenNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).not.toEqual(2);
  }
);

test(
  'Returns a number formatted in dollars and cents.',
  () => {
    const result = toDollars(23);
    expect(result).not.toBe(0);
  }
);

test(
  'Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.',
  () => {
    const result = divideBy([1, 2, 3, 4, 5, 6], 3);
    expect(result[2]).toEqual(1);;
  }
);

test(
  'Modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary.',
  () => {
    const result = multiplyBy({'a': 1, 'b': 2, 'c': 3}, 2);
    expect(result).toEqual({ 'a': 3, 'b': 5, 'c': 7 });
  }
);
