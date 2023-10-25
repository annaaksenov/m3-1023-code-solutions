import add from './add.js';
import sub from './subtract.js';
import multi from './multiply.js';
import div from './divide.js';

const operators = {
  plus: add,
  minus: sub,
  times: multi,
  over: div,
};
const args = process.argv.slice(2);
const operator = args[1];
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[2]);

const result = operators[operator](num1, num2);
console.log(`Result: ${result}`);
