import { logLevelColors } from '../utils/constants';
import type { LogLevel } from '../types/index';

export class Logger {
  private logLevel: LogLevel;
  private singleMode: boolean;

  constructor(logLevel?: LogLevel, singleMode?: boolean) {
    this.logLevel = logLevel ?? 'debug';
    this.singleMode = singleMode ?? false;
  }

  setLogLevel(logLevel: LogLevel, singleMode: boolean = false): void {
    this.logLevel = logLevel;
    this.singleMode = singleMode;
  }

  log(message: string, level: LogLevel = 'debug'): void {
    const levels: LogLevel[] = ['debug', 'info', 'warning', 'error', 'critical'];
    const levelIndex = levels.indexOf(level);
    const currentLevelIndex = levels.indexOf(this.logLevel);
    if (levelIndex === currentLevelIndex || (!this.singleMode && levelIndex > currentLevelIndex)) {
      console.log(`${logLevelColors[level]}[${level.toUpperCase()}] ${message}\x1b[0m`);
    }
  }

  reset(): void {
    this.singleMode = false;
    this.logLevel = 'debug';
  }

  debug(message: string): void {
    this.log(message, 'debug');
  }

  info(message: string): void {
    this.log(message, 'info');
  }

  warning(message: string): void {
    this.log(message, 'warning');
  }

  error(message: string): void {
    this.log(message, 'error');
  }

  critical(message: string): void {
    this.log(message, 'critical');
  }
}

export default Logger;
