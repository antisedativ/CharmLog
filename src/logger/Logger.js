import { logLevelColors } from '../utils/constants.js';
export default class Logger {
  constructor(logLevel, single_mode) {
    this.logLevel = logLevel ?? 'debug';
    this.single_mode = single_mode ?? false;
  }
  setLogLevel(logLevel, single_mode = false) {
    this.logLevel = logLevel;
    this.single_mode = single_mode;
  }
  log(message, level = 'info') {
    const levels = ['debug', 'info', 'warning', 'error', 'critical'];
    const levelIndex = levels.indexOf(level);
    const currentLevelIndex = levels.indexOf(this.logLevel);
    if (levelIndex == currentLevelIndex || (!this.single_mode && levelIndex > currentLevelIndex))
      console.log(`${logLevelColors[level]}[${level.toUpperCase()}] ${message}\x1b[0m`);
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

