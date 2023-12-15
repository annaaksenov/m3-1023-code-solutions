async function getNames() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Error!', response.status);
    }
    const names = await response.json();
    console.log('Array of names:', names)
  } catch (err) {
    console.error('Error:', err.message);
  }
}
getNames();

async function aPoke() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Error status:', response.status);
    }
    const poke = await response.json()
    console.log('Poke:', poke);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
aPoke();
