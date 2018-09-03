import { Injectable } from '@angular/core';
import { LoggerInterface, LoggerPayloadInterface } from './Logger.interface';
import { LoggerConfig } from './logger.config';
import { LoggerLevel } from './logger-lever.enum';
import { LoggerUtils } from './logger.utils';
export { LoggerUtils } from './logger.utils';
export { LoggerConfig } from './logger.config';
export { LoggerLevel } from './logger-lever.enum';

@Injectable()
export class LoggerService implements LoggerInterface {
  private message: LoggerPayloadInterface = {
    timestamp: '',
    callerDetails: {},
    data: {},
    msg: ''
  };

  constructor(private config: LoggerConfig, private readonly loggerUtils: LoggerUtils) {}

  /**
   * Implementing log method for interface logger
   * @return void
   */
  public log(message: string, data?: any): void {
    this.logMessage(LoggerLevel.LOG, message, data);
  }

  /**
   * Implementing info method for interface logger
   * @return void
   */
  public info(message: string, data?: any): void {
    this.logMessage(LoggerLevel.INFO, message, data);
  }

  /**
   * Implementing error method for interface logger
   * @return void
   */
  public error(message: string, data?: any): void {
    this.logMessage(LoggerLevel.ERROR, message, data);
  }

  /**
   * Implementing debug method for interface logger
   * @return void
   */
  public debug(message: string, data?: any): void {
    this.logMessage(LoggerLevel.DEBUG, message, data);
  }

  /**
   * Implementing warn method for interface logger
   * @return void
   */
  public warn(message: string, data?: any): void {
    this.logMessage(LoggerLevel.WARN, message, data);
  }
  /**
   * This method will prepare log message and log messages based on loggerLevel and ServerLogLevel
   * @return void
   */
  private logMessage(level: LoggerLevel, message, data?: any): void {
    if (level >= this.config.level) {
      // Prepare message before logging
      this.message = this.loggerUtils.prepareMessage(level, this.config.isProdMode, message, data);

      // condition for logging based on level and development/production mode
      if (this.config.serverLoggingUrl && this.config.isProdMode) {
        // sending log to server by calling httpService
        // this.loggerUtils.logOnServer(this.config.serverLoggingUrl, this.message, this.data);
        console.log(this.message, data);
      } else {
        switch (level) {
          case LoggerLevel.WARN:
            console.warn(this.message, data);
            break;
          case LoggerLevel.ERROR:
            console.error(this.message, data);
            break;
          case LoggerLevel.INFO:
            // tslint:disable-next-line:no-console
            console.info(this.message, data);
            break;
          case LoggerLevel.DEBUG:
            // tslint:disable-next-line:no-console
            console.debug(JSON.stringify(this.message), data);
            break;
          default:
            console.log(this.message, data);
        }
      }
    }
  }
}
