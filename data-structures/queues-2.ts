/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  if (queue.peek() !== undefined) {
    let lastValue = queue.dequeue()!;
    queue.enqueue(lastValue);
  }
}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() === undefined) {
    return undefined;
  }
const firstValue = queue.dequeue()!;
queue.enqueue(firstValue);
if (queue.peek() === undefined) {
  return firstValue;
}
return queue.dequeue()!;
}
