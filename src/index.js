const readline = require('readline');
const appController = require('./controllers/appController');

const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
  try {
    const input = JSON.parse(line);
    appController.handleInput(input);
  } catch (error) {
    console.error('Error al analizar la entrada JSON:', error);
  }
});

console.log('Esperando entrada...');
