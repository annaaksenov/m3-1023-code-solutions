import { readFile } from 'node:fs/promises';

async function levelTwo(e) {
  const path = process.argv[2];
  try {
    const x = await readFile(path, e);
    console.log(`${x}`);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

levelTwo();
