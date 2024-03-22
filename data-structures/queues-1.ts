/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  if (queue) {
    return queue.peek();
  }
  return undefined;
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
return queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  if (!queue) {
    return undefined;
  } else {
    const firstValue = queue.dequeue();
    return firstValue;
  }
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  return queue.peek() === undefined;
}
