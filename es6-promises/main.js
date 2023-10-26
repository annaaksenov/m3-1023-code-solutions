import takeAChance from './take-a-chance.js';

takeAChance('Anna')
  .then((yay) => console.log(yay))
  .catch((err) => console.log(err.message));
