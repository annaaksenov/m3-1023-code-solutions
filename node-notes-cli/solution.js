import { readFile, writeFile } from 'node:fs/promises';

async function readJSON() {
  if (process.argv[2] !== 'read') {
    return;
  }
  const data = await readFile('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  console.log('type of json in string: ', typeof JSON.stringify(jsonData));
  console.log(jsonData);
  return jsonData;
}
readJSON();

async function createNote() {
  if (process.argv[2] !== 'create') {
    return;
  }
  const text = process.argv[3];
  try {
    const data = await readFile('data.json', 'utf8');
    const parsed = JSON.parse(data);
    parsed.notes[parsed.nextId++] = text;

    const string = JSON.stringify(parsed, null, 2);
    const write = await writeFile('data.json', string);
    const json = JSON.parse(write);
    console.log(json);
    return json;
  } catch (err) {
    console.error('error:', err.message);
  }
}
createNote();

async function deleteNote() {
  if (process.argv[2] !== 'delete') {
    return;
  }
  const selector = process.argv[3];
  try {
    const data = await readFile('data.json', 'utf8');
    const parsed = JSON.parse(data);
    if (parsed.notes[selector]) {
      delete parsed.notes[selector];
    }
    const string = JSON.stringify(parsed, null, 2);
    const write = await writeFile('data.json', string);
    const json = JSON.parse(write);
    console.log(json);
    return json;
  } catch (err) {
    console.error('Error:', err.message);
  }
}
deleteNote();

async function updateNote() {
  if (process.argv[2] !== 'update') {
    return;
  }
  const selector = process.argv[3];
  const newNote = process.argv[4];
  try {
    const data = await readFile('data.json', 'utf8');
    const parsed = JSON.parse(data);
    if (parsed.notes[selector]) {
      parsed.notes[selector] = newNote;
      const string = JSON.stringify(parsed, null, 2);
      const write = await writeFile('data.json', string);
      const json = JSON.parse(write);
      console.log(json);
      return json;
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}
updateNote();
