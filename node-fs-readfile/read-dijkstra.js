import { readFile } from 'node:fs/promises';

async function levelOne(e) {
  try {
    const text = await readFile(e);
    console.log(`${text}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
levelOne('dijkstra.txt');
