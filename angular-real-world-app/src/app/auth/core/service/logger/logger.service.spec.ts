import { inject, TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';
import { LoggerConfig } from './logger.config';
import { LoggerLevel } from './logger-lever.enum';
import { LoggerUtils } from './logger.utils';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LoggerService', () => {
  let logger: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggerService,
        {
          provide: LoggerConfig,
          useValue: {
            level: LoggerLevel.DEBUG,
            serverLogLevel: LoggerLevel.OFF
          }
        },
        LoggerUtils,
        HttpClient,
        HttpHandler
      ]
    });
    logger = TestBed.get(LoggerService);
  });

  it(
    'should be created',
    inject([LoggerService], (service: LoggerService, config: LoggerConfig) => {
      expect(service).toBeTruthy();
    })
  );
  it('should call log method with one param', () => {
    spyOn(console, 'log');
    logger.log('calling log method');
    expect(console.log).toHaveBeenCalled();
  });
  it('should call info method with one param', () => {
    spyOn(console, 'info');
    logger.info('calling info method');
    expect(console.info).toHaveBeenCalled();
  });
  it('should call error method with one param', () => {
    spyOn(console, 'error');
    logger.error('calling error method');
    expect(console.error).toHaveBeenCalled();
  });
  it('should call debug method with one param', () => {
    spyOn(console, 'debug');
    logger.debug('calling debug method');
    expect(console.debug).toHaveBeenCalled();
  });
  it('should call warn method with one param', () => {
    spyOn(console, 'warn');
    logger.warn('calling warn method');
    expect(console.warn).toHaveBeenCalled();
  });
});
