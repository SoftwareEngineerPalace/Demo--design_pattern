import { DatabaseLogger, FileLogger, Logger } from "./Logger";

export interface LoggerFactory {
  createLogger: () => Logger;
}

export class DatabaseLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    const logger: Logger = new DatabaseLogger();
    return logger;
  }
}

export class FileLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    const logger: Logger = new FileLogger();
    return logger;
  }
}
