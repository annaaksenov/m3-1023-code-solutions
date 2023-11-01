import { readFile, writeFile } from 'node:fs/promises';

async function levelThree() {
  const source = process.argv[2];
  const destination = process.argv[3];
  try {
    const x = await readFile(source);
    const y = await writeFile(destination, x);
    console.log(`${y}`);
  } catch (error) {
    console.error('error:', error.message);
  }
}
levelThree();
