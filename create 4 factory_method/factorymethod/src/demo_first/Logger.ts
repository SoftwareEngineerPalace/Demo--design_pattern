export interface Logger {
  writeLog: () => void;
}

export class DatabaseLogger implements Logger {
  writeLog() {
    console.log("DatabaseLogger writeLog");
  }
}

export class FileLogger implements Logger {
  writeLog() {
    console.log("FileLogger writeLog");
  }
}
