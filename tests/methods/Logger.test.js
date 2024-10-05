import Logger from '@src/logger/Logger.js';
import { logLevelColors } from '@src/utils/constants.js';

describe('logger', () => {
    let logger;
    beforeEach(() => {
        logger = new Logger();
      });
      it("should log messages with level DEBUG", () => {
        const consoleSpy = jest.spyOn(console, "log");
        logger.log("Debug message", 'debug');
        expect(consoleSpy).toHaveBeenCalledWith(`${logLevelColors['debug']}[DEBUG] Debug message\x1b[0m`);
      });
      it("should log messages with level ERROR only", () => {
        const consoleSpy = jest.spyOn(console, "log");
        consoleSpy.mockClear();
        logger.setLogLevel('warning');
        logger.log("Debug message", 'debug');
        logger.log("Debug2 message", 'debug');
        logger.log("Error message", 'error');
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`${logLevelColors["error"]}[ERROR] Error message\x1b[0m`);
      });
      it("should log messages with level WARNING and ERROR", () => {
        const consoleSpy = jest.spyOn(console, "log");
        consoleSpy.mockClear();
        logger.setLogLevel('warning');
        logger.log("Debug message", 'debug');
        logger.log("Warning message", 'warning');
        logger.log("Error message", 'error');
        expect(consoleSpy).toHaveBeenCalledTimes(2);
        expect(consoleSpy).toHaveBeenCalledWith(`${logLevelColors["warning"]}[WARNING] Warning message\x1b[0m`);
        expect(consoleSpy).toHaveBeenCalledWith(`${logLevelColors["error"]}[ERROR] Error message\x1b[0m`);
      });
      it("shouldn't log anything because of warning debug mode", () => {
        const consoleSpy = jest.spyOn(console, "log");
        consoleSpy.mockClear();
        logger.setLogLevel('debug', true);
        logger.log("Warning message", 'warning');
        logger.log("Error message", 'error');
        expect(consoleSpy).toHaveBeenCalledTimes(0);
      });
      it("should log messages with level CRITICAL", () => {
        const consoleSpy = jest.spyOn(console, "log");
        logger.critical("Critical message");
        expect(consoleSpy).toHaveBeenCalledWith(`${logLevelColors["critical"]}[CRITICAL] Critical message\x1b[0m`);
      });

});
