import { BrowserInfoInterface, LoggerPayloadInterface } from './Logger.interface';
import { LoggerConfig } from './logger.config';
import { LoggerLevel } from './logger-lever.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerUtils {
  constructor(private readonly http: HttpClient, private config: LoggerConfig) {}
  /**
   * this method will prepare message based on log type level and server level
   * @return LoggerPayloadInterface
   */
  public prepareMessage(level, isProdMode, message, data?: any): LoggerPayloadInterface {
    let messageObj: any;
    // preparing logging message for server or dev mode based on condition
    if (isProdMode) {
      messageObj = {
        loggerType: LoggerLevel[level],
        browserInfo: this.getBrowserInfo(),
        userInfo: this.config.userId,
        timestamp: new Date().toString(),
        callerDetails: this.getCallerDetails(),
        data,
        msg: message
      };
    } else {
      messageObj = {
        timestamp: new Date().toString(),
        callerDetails: this.getCallerDetails(),
        data,
        msg: message
      };
    }

    return messageObj;
  }
  /**
   * This return object to see who called the logger
   * @return Object
   */
  // tslint:disable-next-line:prefer-function-over-method
  private getCallerDetails(): { lineNumber: string; fileName: string } {
    const err = new Error('');

    try {
      // this should produce the line which Logger was called
      const callerLine = err.stack.split('\n')[5].split('/');

      // returns the file:lineNumber
      const fileLineNumber = callerLine[callerLine.length - 1].replace(/[)]/g, '').split(':');

      return {
        fileName: fileLineNumber[0],
        lineNumber: fileLineNumber[1]
      };
    } catch (e) {
      return {
        fileName: undefined,
        lineNumber: undefined
      };
    }
  }
  /**
   * This method return browser information
   * @return BrowserInfoInterface
   */
  private getBrowserInfo(): BrowserInfoInterface {
    return {
      browserName: navigator.appCodeName,
      browserVersion: navigator.appVersion,
      browserPlatform: navigator.platform,
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      localDBSpace: this.localStorageSpace()
    };
  }
  /**
   * This method calculate browser memory and return it
   * @return string
   */
  // tslint:disable-next-line:prefer-function-over-method
  private localStorageSpace(): string {
    let allStrings = '';
    // traversing each key in localStorage to calculate used space
    for (const key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        allStrings += window.localStorage[key];
      }
    }

    return allStrings
      ? // tslint:disable-next-line:binary-expression-operand-order
        `${3 + allStrings.length * 16 / (8 * 1024)} KB`
      : 'Empty (0 KB)';
  }
  /**
   * This method will post request on server
   * @return BrowserInfoInterface
   */
  public logOnServer(url: string, message: any, data?: any): void {
    if (url) {
      this.http.post(url, message, data);
    } else {
      console.log('serverLoggingUrl is undefined');
    }
  }
}
