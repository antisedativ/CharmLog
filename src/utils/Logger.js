import { hexToAnsiColor } from '../utils/color.js';
const logColor = ['#FFFFFF', '#0000FF', '#FF8000', '#F14065', '#FF0000'];
class Logger {
    constructor(logLevel) {
      this.logLevel = logLevel || 'info';
    }
    setLogLevel(logLevel) {
      this.logLevel = logLevel;
    }
    log(message, level = 'info') {
      const levels = ['debug', 'info', 'warning', 'error', 'critical'];
      const levelIndex = levels.indexOf(level);
      const currentLevelIndex = levels.indexOf(this.logLevel);
      if (levelIndex >= currentLevelIndex) {
        console.log(`${hexToAnsiColor(logColor[levelIndex])}[${level.toUpperCase()}] ${message}\x1b[0m`);
      }
    }
    debug(message) {
      this.log(message, 'debug');
    }
    info(message) {
      this.log(message, 'info');
    }
  
    warning(message) {
      this.log(message, 'warning');
    }
  
    error(message) {
      this.log(message, 'error');
    }
  
    critical(message) {
      this.log(message, 'critical');
    }
  }