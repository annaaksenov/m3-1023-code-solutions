import { readFile } from 'node:fs/promises';

async function levelThree(text1, text2) {
  const path1 = process.argv[2];
  const path2 = process.argv[3];
  try {
    const x = await readFile(path1, text1);
    const y = await readFile(path2, text2);
    console.log(`${x}` + `${y}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

levelThree();
