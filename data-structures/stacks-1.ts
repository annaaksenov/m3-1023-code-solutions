/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  for (const x in stack) {
    if (x != undefined) {
      return stack.peek();
    }
  }
  return undefined;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  return stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  for (const x in stack) {
    if (x != undefined) {
      return stack.pop();
    }
  }
  return undefined;
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  return stack.peek() === undefined;
}
