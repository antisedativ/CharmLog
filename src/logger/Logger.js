import { logLevelColors } from '../utils/constants.js';
export class Logger {
  constructor(logLevel, singleMode) {
    this.logLevel = logLevel ?? 'debug';
    this.singleMode = singleMode ?? false;
  }

  setLogLevel(logLevel, singleMode = false) {
    this.logLevel = logLevel;
    this.singleMode = singleMode;
  }

  log(message, level = 'debug') {
    const levels = ['debug', 'info', 'warning', 'error', 'critical'];
    const levelIndex = levels.indexOf(level);
    const currentLevelIndex = levels.indexOf(this.logLevel);
    if (levelIndex == currentLevelIndex || (!this.singleMode && levelIndex > currentLevelIndex))
      console.log(`${logLevelColors[level]}[${level.toUpperCase()}] ${message}\x1b[0m`);
  }

  reset() {
    this.singleMode = false;
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

export default Logger;
