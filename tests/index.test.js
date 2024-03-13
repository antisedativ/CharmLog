import { rainbow, printf, settings, Logger } from '@src/index.js';

describe('Module Imports', () => {
  test('rainbow module is imported correctly', () => {
    expect(rainbow).toBeDefined();
  });

  test('printf module is imported correctly', () => {
    expect(printf).toBeDefined();
  });

  test('settings module is imported correctly', () => {
    expect(settings).toBeDefined();
  });

  test('Logger module is imported correctly', () => {
    expect(Logger).toBeDefined();
  });
});