// Basic Usage Examples for CharmLog
// Run with: node examples/basic-usage.js

const charmlog = require('../dist/index.cjs').default;

console.log('🎨 CharmLog Basic Usage Examples\n');

// Basic Colors
console.log('=== Basic Colors ===');
charmlog.red('This is red text');
charmlog.green('This is green text');
charmlog.blue('This is blue text');
charmlog.yellow('This is yellow text');
charmlog.magenta('This is magenta text');
charmlog.cyan('This is cyan text');
charmlog.white('This is white text');
charmlog.black('This is black text');

console.log('\n=== Rainbow Text ===');
charmlog.rainbow('This is a beautiful rainbow text!');

console.log('\n=== Custom Formatting ===');
// Set custom formatting
charmlog.settings.color = '#ff0000';
charmlog.settings.backgroundColor = '#000000';
charmlog.settings.fontWeight = 'bold';
charmlog.printf('Custom formatted text with red color and black background');

// Reset settings
charmlog.settings.reset();

console.log('\n=== Object Inspection ===');
const sampleObject = {
  name: 'John Doe',
  age: 30,
  hobbies: ['coding', 'reading', 'gaming'],
  address: {
    city: 'New York',
    country: 'USA',
    zipCode: '10001'
  },
  isActive: true,
  scores: [95, 87, 92]
};

charmlog.dir(sampleObject);

console.log('\n=== Logger Usage ===');
const { Logger } = require('../dist/index.cjs');

const logger = new Logger('info');

logger.debug('This debug message will not show');
logger.info('This info message will show');
logger.warning('This warning message will show');
logger.error('This error message will show');
logger.critical('This critical message will show');

console.log('\n=== Core Functions ===');
const { charmprint, createCharmedObject } = require('../dist/index.cjs');

// Wrap a function to auto-log its output
const add = charmprint((a, b) => a + b);
console.log('Result:', add(5, 3)); // Will also log: 8

// Create a charmed object
const myObj = createCharmedObject({
  greet: (name) => `Hello, ${name}!`,
  calculate: (x, y) => x * y
});

myObj.greet('World'); // Will log: Hello, World!
myObj.calculate(4, 5); // Will log: 20

console.log('\n✨ Examples completed!'); 