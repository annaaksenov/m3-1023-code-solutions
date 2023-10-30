import { writeFile } from 'node:fs/promises';

async function levelTwo(input) {
  const path = process.argv.slice(2);
  const text = path[0];
  try {
    const promise = await writeFile('note.txt', text);
    console.log(`${promise}` + `${input}` + '\n');
  } catch (error) {
    console.error('error:', error.message);
  }
}
levelTwo();
