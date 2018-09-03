import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IframeModuleCommunicationService {
  public requestResponse = new Subject<string>();
  private iframeWindow;
  private baseLocation: string;
  private receiverWindow: any = window as any;
  constructor(private loggerService: LoggerService) {}
  /**
   * Sets up a connection with iframe before sending and receiving message.
   * Must be called before calling any other method of service.
   */
  public createConnection(iframeWindow, baseLocation): any {
    let connectionObject: any;
    // checking for iframe element and parent domain
    if (iframeWindow.tagName === 'IFRAME' && baseLocation) {
      // save iframe element reference and baseLocation values into class variable
      this.iframeWindow = iframeWindow;
      this.baseLocation = baseLocation;
      // add message listener that will receive messages from iframe windows
      connectionObject = this.addListener('message');
    } else {
      connectionObject = {
        response: false,
        message: 'iframeWindow or baseLocation are not defined'
      };
    }

    return connectionObject;
  }

  /**
   * sendMessage receive inputs as parameter and based on condition, it calls postMessage method
   * MUST:- connection should be created, source and target domain must not be same
   * @source: https://localhost:4200, @target: https://localhost:9001
   */
  public sendMessage(source: string, target: string, message: any): void {
    // checking for all important variables before triggering post message
    if (this.iframeWindow && source !== target && this.iframeWindow.src !== `${this.baseLocation}/`) {
      this.postMessage(target, message);
    } else {
      this.loggerService.log('iframeWindow is undefined or source and target are same');
    }
  }
  /**
   * receiveMessage will receive messages from other iframe window
   * MUST:- message.origin and baseLocation must not be same
   * MUST:- iframeWindow must have iframe object for child window
   */
  private receiveMessage(message?: any): void {
    // checking for origin and target window locations
    if (!(!this.iframeWindow || message.origin === this.baseLocation)) {
      // update subscriber
      this.requestResponse.next(message);
    } else {
      this.loggerService.log('iframeWindow  variable is undefined or origin and baseLocation are same');
    }
  }

  /**
   * This listener will be triggered by iframe window
   * return object with response and message properties
   */
  private addListener(listenerName: string): any {
    let responseObject: any;
    // checking for browser's support for adding custom listener
    if (this.receiverWindow.addEventListener) {
      //binding scope of window here
      this.receiveMessage = this.receiveMessage.bind(this);

      this.receiverWindow.addEventListener(listenerName, this.receiveMessage);
      this.loggerService.log('message eventListener is added to receiverWindow object');

      responseObject = {
        response: true,
        message: 'connection has been created successfully'
      };
    } else {
      this.loggerService.log('Browser does not support eventListener');

      responseObject = {
        response: false,
        message: 'Browser does not support eventListener'
      };
    }

    return responseObject;
  }

  /**
   * remove attached listener
   */
  public removeListener(listenerName: string): boolean {
    this.receiverWindow.removeEventListener(listenerName, this.receiveMessage);
    this.loggerService.log('message eventListener is removed successfully');
    this.iframeWindow = undefined;

    return true;
  }

  /**
   * postMessage will post message to iframe window
   */
  private postMessage(target: string, message: any): void {
    this.iframeWindow.contentWindow.postMessage(message, target);
    this.loggerService.log('message has been transferred to iframe');
  }
}
