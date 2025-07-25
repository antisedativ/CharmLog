# CharmLog 🎨

[![Check](https://github.com/antisedativ/CharmLog/actions/workflows/check.yml/badge.svg?branch=master)](https://github.com/antisedativ/CharmLog/actions/workflows/check.yml)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/antisedativ/CharmLog)
![npm](https://img.shields.io/npm/dt/charmlog)
![npm version](https://img.shields.io/npm/v/charmlog)
![License](https://img.shields.io/npm/l/charmlog)

> Make your terminal string output even more beautiful 💖

A modern, lightweight logging library for Node.js that provides beautiful colored output, rainbow text, custom formatting, and structured logging capabilities.

## ✨ Features

- 🎨 **Rich Color Support** - 16 basic colors with bright variants
- 🌈 **Rainbow Text** - Multi-colored text output
- 📝 **Custom Formatting** - printf-style formatting with colors and styles
- 📊 **Structured Logging** - Logger class with log levels
- 🔍 **Object Inspection** - Beautiful object/array visualization
- 🎯 **TypeScript Support** - Full type definitions included
- 📦 **Tree-shakable** - Only import what you need
- 🚀 **Zero Dependencies** - Lightweight and fast

## 📦 Installation

```bash
npm install charmlog
```

## 🚀 Quick Start

```javascript
// ES Modules
import charmlog from 'charmlog';

// CommonJS
const charmlog = require('charmlog').default;

// Basic usage
charmlog.blue('Hello, World!');
charmlog.rainbow('This is a rainbow text!');
charmlog.printf('Custom formatted text');
```

## 📚 API Reference

### Basic Colors

```javascript
// Basic colors
charmlog.red('Error message');
charmlog.green('Success message');
charmlog.yellow('Warning message');
charmlog.blue('Info message');
charmlog.magenta('Debug message');
charmlog.cyan('Trace message');
charmlog.white('Normal message');
charmlog.black('Dark message');
```

### Rainbow Text

```javascript
// Rainbow colored text
charmlog.rainbow('This text will be rainbow colored!');
```

### Custom Formatting

```javascript
// Set formatting options
charmlog.settings.color = '#ff0000';
charmlog.settings.backgroundColor = '#000000';
charmlog.settings.fontWeight = 'bold';
charmlog.settings.style = 'italic';

// Apply formatting
charmlog.printf('Custom formatted text');
```

### Structured Logging

```javascript
import { Logger } from 'charmlog';

const logger = new Logger('info');

logger.debug('Debug message');
logger.info('Info message');
logger.warning('Warning message');
logger.error('Error message');
logger.critical('Critical message');
```

### Object Inspection

```javascript
const obj = {
  name: 'John',
  age: 30,
  hobbies: ['coding', 'reading'],
  address: {
    city: 'New York',
    country: 'USA'
  }
};

charmlog.dir(obj);
```

### Core Functions

```javascript
import { charmprint, createCharmedObject } from 'charmlog';

// Wrap any function to auto-log its output
const wrappedFn = charmprint((a, b) => a + b);
wrappedFn(2, 3); // Logs: 5

// Create a charmed object
const myObj = createCharmedObject({
  greet: (name) => `Hello, ${name}!`
});
myObj.greet('World'); // Auto-logs the result
```

## 🎯 Advanced Usage

### Custom Color Methods

```javascript
import { colors } from 'charmlog';

// Access individual color methods
colors.red('This is red');
colors.green('This is green');
```

### Logger Configuration

```javascript
import { Logger } from 'charmlog';

const logger = new Logger('warning', true); // Only show warnings and above

logger.setLogLevel('error'); // Change log level
logger.reset(); // Reset to default settings
```

### Settings Management

```javascript
import { settings } from 'charmlog';

// Configure text formatting
settings.color = '#ff0000';
settings.backgroundColor = 'transparent';
settings.fontWeight = 'bold';
settings.style = 'normal';
settings.textDecoration = 'underline';

// Reset all settings
settings.reset();
```

## 🔧 Configuration

### TypeScript

The library includes full TypeScript support with comprehensive type definitions.

### Build Tools

CharmLog is compatible with:
- Rollup
- Webpack
- Vite
- esbuild
- Parcel

### Tree Shaking

```javascript
// Only import what you need
import { red, green } from 'charmlog';
import { Logger } from 'charmlog';
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/antisedativ/CharmLog.git
cd CharmLog
npm install
npm run build
npm test
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by popular logging libraries like `chalk` and `colors`
- Built with modern JavaScript and TypeScript
- Community-driven development

## 📈 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

---

Made with ❤️ by the CharmLog community
