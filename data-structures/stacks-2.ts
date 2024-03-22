import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
    let count = 0;
    while (stack.peek() !== undefined) {
      stack.pop();
      count++;
    }
    return count;
}

export function maxValue(stack: Stack<number>): number {
    let max = -Infinity;
    while (stack.peek()!== undefined) {
      const currentValue = stack.pop()!;
      if (currentValue > max) {
        max = currentValue;
      }
    }
    return max;
}
