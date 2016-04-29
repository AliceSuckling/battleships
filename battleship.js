var readline = require('readline')
const Water = require('./Water.js')


// console.log(Water.test());
// console.log(Ships.test());

//game play

function info() {
  console.log('Info:');
  console.log('A5       - hits a target square. Valid targets A-J, 1-10');
  console.log('quit     - Quits the game');
  console.log('info    - Prints this list');
}

function quit() {
  console.log('Goodbye!');
  process.exit(0);
}

//command line value to instructions
var letters = readline.createInterface(process.stdin, process.stdout);

letters.setPrompt('Battleship> ');

info();

letters.prompt();

letters.on('line', function(line) {
  switch(line.trim()) {
    case 'quit':
      quit();
      break;
    case 'restart':
      restart();
      break;
    case 'info':
      info();
      break;
    default:
      console.log(Water.checkAt(line));
      break;
  }
  letters.prompt();
}).on('close', function() {
  quit();
});
