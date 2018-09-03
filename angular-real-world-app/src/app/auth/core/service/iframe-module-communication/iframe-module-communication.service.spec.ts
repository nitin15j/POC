import { inject, TestBed } from '@angular/core/testing';
import { LoggerConfig, LoggerService, LoggerUtils } from '../logger/logger.service';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { IframeModuleCommunicationService } from './iframe-module-communication.service';

describe('IframeModuleCommunicationService', () => {
  let postMessageService: any;
  let spy: any;
  let iframeElement: any;
  const baseLocation = 'https://localhost:4200';
  const baseLocationWithHttp = 'http://localhost:4200/';
  const iframeLocation = 'https://localhost:9001';
  const message = 'Message to be sent';
  let iframe: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IframeModuleCommunicationService, LoggerService, LoggerConfig, LoggerUtils, HttpClient, HttpHandler]
    });
    postMessageService = TestBed.get(IframeModuleCommunicationService);
    iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://localhost:4200/');
    iframe.setAttribute('id', 'iframeElement');
    document.body.appendChild(iframe);
    iframeElement = document.getElementById('iframeElement');
  });
  afterEach(() => {
    iframeElement.parentNode.removeChild(iframeElement);
  });

  it(
    'should test IframeModuleCommunicationService',
    inject([IframeModuleCommunicationService], (service: IframeModuleCommunicationService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should test createConnection method by setting up an connection', () => {
    postMessageService.createConnection(iframeElement, baseLocation);
    expect(postMessageService.iframeWindow).toBeTruthy();
  });
  it('should test sendMessage method', () => {
    postMessageService.createConnection(iframeElement, baseLocation);
    postMessageService.postMessage = jasmine.createSpy('postMessage() spy').and.callFake(() => {
      console.log('making fake call for postMessage()');
    });
    postMessageService.sendMessage(baseLocation, iframeLocation, message);
    expect(postMessageService.postMessage).toHaveBeenCalled();
  });
  it('should test sendMessage method for else condition if iframeWindow is not set', () => {
    spy = spyOn(postMessageService, 'postMessage');
    postMessageService.sendMessage(baseLocation, iframeLocation, message);
    expect(postMessageService.postMessage).not.toHaveBeenCalled();
  });

  it('should test sendMessage method for else condition if source and destination are same', () => {
    postMessageService.createConnection(iframeElement, baseLocation);
    postMessageService.postMessage = jasmine.createSpy('postMessage() spy').and.callFake(() => {
      console.log('making fake call for postMessage()');
    });
    postMessageService.sendMessage(baseLocation, baseLocation, message);
    expect(postMessageService.postMessage).not.toHaveBeenCalled();
  });

  it('should test receiveMessage method if origin and target are different', () => {
    postMessageService.createConnection(iframeElement, baseLocation);
    postMessageService.receiveMessage({
      origin: iframeLocation,
      data: 'success'
    });
    expect(postMessageService.requestResponse).toBeDefined();
  });
  it('should test receiveMessage method if origin and target are same', () => {
    postMessageService.createConnection(iframeElement, baseLocation);
    postMessageService.receiveMessage({ origin: baseLocation });
    expect(postMessageService.requestResponse.observers.length).toEqual(0);
  });

  it('should test postMessage method', () => {
    postMessageService.createConnection(iframeElement, baseLocation);
    postMessageService.iframeWindow = {
      src: 'http://localhost:4200',
      contentWindow: {
        postMessage(): void {
          console.log('test for postMessage');
        }
      }
    };
    spyOn(postMessageService.iframeWindow.contentWindow, 'postMessage');
    spyOn(postMessageService.loggerService, 'log');
    postMessageService.postMessage({ origin: 'http://localhost:9001' });

    expect(postMessageService.iframeWindow.contentWindow.postMessage).toHaveBeenCalled();
    expect(postMessageService.loggerService.log).toHaveBeenCalledWith('message has been transferred to iframe');
  });
  it('should test addListener ', () => {
    postMessageService.createConnection(baseLocationWithHttp);
    postMessageService.receiverWindow = jasmine.createSpyObj('window', ['addEventListener']);

    spyOn(postMessageService, 'receiveMessage');
    spyOn(postMessageService.loggerService, 'log');
    postMessageService.addListener('message');
    window.dispatchEvent(new Event('message'));
    expect(postMessageService.loggerService.log).toHaveBeenCalledWith(
      'message eventListener is added to receiverWindow object'
    );
  });
  it('should test addListener for else condition', () => {
    postMessageService.createConnection(baseLocationWithHttp);
    postMessageService.receiverWindow = jasmine.createSpyObj('window', ['']);
    spyOn(postMessageService.loggerService, 'log');
    postMessageService.addListener('message');
    expect(postMessageService.loggerService.log).toHaveBeenCalledWith('Browser does not support eventListener');
  });
  it('should test removeListener ', () => {
    postMessageService.createConnection(baseLocationWithHttp);
    spyOn(postMessageService.receiverWindow, 'removeEventListener');
    spyOn(postMessageService.loggerService, 'log');
    postMessageService.removeListener('message');
    expect(postMessageService.loggerService.log).toHaveBeenCalledWith('message eventListener is removed successfully');
  });
});
