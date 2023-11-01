import { writeFile } from 'node:fs/promises';

async function levelOne() {
  const math = Math.floor(Math.random() * 9);
  try {
    const txt = await writeFile('random.txt', `${math}`);
    console.log('\n' + `${txt}` + '\n');
  } catch (error) {
    console.log('Error:', error.message);
  }
}
levelOne();
