export type LogLevel = 'debug' | 'info' | 'warning' | 'error' | 'critical';

export interface LoggerOptions {
  logLevel?: LogLevel;
  singleMode?: boolean;
}

export interface CharmedObject {
  [key: string]: any;
}

export type CharmprintFunction<T extends any[] = any[], R = any> = (...args: T) => R;

export interface ColorMethod {
  (text: string): string;
}

export interface RainbowMethod {
  (text: string): string;
}

export interface PrintfMethod {
  (format: string, ...args: any[]): string;
}

export interface SettingsMethod {
  (options: any): void;
}

export interface DirMethod {
  (obj: any): void;
}

export interface CharmlogMethods {
  rainbow: RainbowMethod;
  printf: PrintfMethod;
  settings: SettingsMethod;
  charmprint: <T extends any[] = any[], R = any>(func: CharmprintFunction<T, R>) => CharmprintFunction<T, R>;
  dir: DirMethod;
  [key: string]: any;
} 