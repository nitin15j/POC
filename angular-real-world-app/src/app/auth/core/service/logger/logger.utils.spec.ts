import { inject, TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { LoggerConfig } from './logger.config';
import { LoggerLevel } from './logger-lever.enum';
import { LoggerUtils } from './logger.utils';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LoggerUtils', () => {
  let loggerUtils: LoggerUtils;
  const messageObj: any = 'test';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggerService,
        {
          provide: LoggerConfig,
          useValue: { level: LoggerLevel.INFO, serverLogLevel: LoggerLevel.OFF }
        },
        LoggerUtils,
        HttpClient,
        HttpHandler
      ]
    });
    loggerUtils = TestBed.get(LoggerUtils);
  });

  it(
    'should be created',
    inject([LoggerUtils], (service: LoggerUtils) => {
      expect(service).toBeTruthy();
    })
  );
  it('should call prepareMessage method for dev mode', () => {
    spyOn(console, 'log');
    const value = loggerUtils.prepareMessage(2, false, messageObj);
    expect(value.msg).toBe(messageObj);
  });
  it('should call prepareMessage method for prod mode', () => {
    spyOn(console, 'log');
    const value = loggerUtils.prepareMessage(2, true, messageObj);
    expect(value.msg).toBe(messageObj);
  });
  it('should call logOnServer method', () => {
    loggerUtils.logOnServer('api/log', 'message');
  });
  it('should call logOnServer method when serverLoggingUrl is undefined', () => {
    spyOn(console, 'log');
    loggerUtils.logOnServer('', 'message');
    expect(console.log).toHaveBeenCalled();
  });
});
