import express from 'express';
import {readFile, writeFile} from 'node:fs/promises';

type Note = {
  id: number;
  content: string;
};
type Data = {
  nextId: number;
  notes: Record<string, Note>;
}

async function readData(): Promise<Data> {
  const data = await readFile('./data.json');
  return JSON.parse(data.toString());
}

const app = express();
app.use(express.json());
app.get('/api/notes/:id', async (req, res) => {
  try {
  const id = req.params.id;
  if (!Number.isInteger(parseInt(id)) || parseInt(id) <= 0) {
    res.status(400).json({ error: 'Invalid ID.'});
    return;
  }
  const data = await readData();
   const note = data.notes[id];
   if (note) {
    res.status(200).json(note);
   } else {
    res.status(404).json({ error: 'Note not found'});
   }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const content = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Reqired content property.'});
      return;
    }
 const data = await readData();
 const id = data.nextId;
   data.notes[id.toString()] = {
  id: data.nextId,
  content: req.body.content
 }
 data.nextId++;
await writeFile('./data.json', JSON.stringify(data, null, 2));
res.status(201).json(data.notes[id.toString()]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!Number.isInteger(parseInt(id)) || parseInt(id) <= 0) {
      res.status(400).json({ error: 'Invalid ID.' });
      return;
    }
    const data = await readData();
    const note = data.notes[id];
    if (!note) {
      res.status(404).json({ error: `Note not found.` });
      return;
    }
    delete data.notes[id];
    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.'});
  }
})

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const content = req.body.content;
    if (!Number.isInteger(parseInt(id)) || !content) {
      res.status(400).json({error: 'Invalid ID or content not found.'});
      return;
    }
    const data = await readData();
    const note = data.notes[id];
    if (!note) {
      res.status(404).json({error: 'Note at ID ${id} not found.'});
      return;
    }
    note.content = content;
    await writeFile('./data.json', JSON.stringify(data, null, 2));
    res.status(200).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'An unexpected error occurred.'})
  }
})

app.listen(8080, () => console.log('Server is listening.'));
