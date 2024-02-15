import { hexToAnsiColor } from '../utils/color.js';
const logColor = ['#FFFFFF', '#0000FF', '#FF8000', '#F14065', '#FF0000'];
export default class Logger {
  constructor(logLevel, single_mode) {
    this.logLevel = logLevel || 'debug';
    this.single_mode = single_mode || false;
  }
  setLogLevel(logLevel, single_mode = false) {
    this.logLevel = logLevel;
    this.single_mode = single_mode;
  }
  log(message, level = 'info') {
    const levels = ['debug', 'info', 'warning', 'error', 'critical'];
    const levelIndex = levels.indexOf(level);
    const currentLevelIndex = levels.indexOf(this.logLevel);
    if (this.single_mode == true) {
      if (levelIndex == currentLevelIndex) {
        console.log(`${hexToAnsiColor(logColor[levelIndex])}[${level.toUpperCase()}] ${message}\x1b[0m`);
      }
    }
    else {
      if (levelIndex >= currentLevelIndex) {
        console.log(`${hexToAnsiColor(logColor[levelIndex])}[${level.toUpperCase()}] ${message}\x1b[0m`);
      }
    }
  }
  reset() {
    this.single_mode = false;
    this.logLevel = 'debug';
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
